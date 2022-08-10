const { router } = require("../app");
const app = require("../app");
const User = require("../models/User.model");

router.post("/match/:id", (req, res, next) => {
    console.log("pls work");
    const {otherUserId} = req.params
    const userId = req.session.user._id 
    //let findMatchesSentSessionUser = userId.matchesSent;
    //let findMatchesRecievedSessionUser = userId.matchesRecieved;
    
    User.findByIdAndUpdate(otherUserId,{
        
        $push:{matchesRecieved: userId}
        
    }).then(() =>{
        return User.findByIdAndUpdate(userId, {
            
            $push:{matchesSent: otherUserId}
        })}
        
        ).then( ()=> {
            User.findOne({_id:otherUserId, $inc: {matchesRecieved: userId}}).then((found) => {
                if (found) {
                    return User.findByIdAndUpdate(otherUserId,{
                        
                        $push:{matches: userId}
                        
                    })
                }
            })
        }).then( () => {
            User.findOne({_id:userId, $inc: {matchesRecieved: otherUserId}}).then((found) => {
                if (found) {
                    return User.findByIdAndUpdate(userId, {
                        
                        $push:{matches: otherUserId}
                        
                    })
                }
            })
        }).then( () => res.redirect("/search") )
        res.redirect("/search")
        console.log("match sent")
    });






//     User.findOne({ matchesRecieved }).then((found) => {
//         for (let i = 0; i < matchesRecieved.length; i++){
//             if (found.matchesRecieved[i] === findMatchesSentSessionUser){
//                 User.findByIdAndUpdate(otherUserId, {

//                     matches: [userId]

//                 })
//             } else if (found.matchesSent[i] === findMatchesRecievedSessionUser){
//                 User.findByIdAndUpdate(userId, {

//                     matches: [{otherUserId}]

//                 })
//             } User.findOne({$inc: {matchesRecieved: userId}}).then((found) => {
//                 if found 
//             })

//         }
//     });

// })

modules.export = router;