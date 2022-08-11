const router = require("express").Router();
const User = require("../models/User.model");

router.post("/match/:id", async (req, res, next) => {
    console.log("pls work");
    const {id} = req.params
    const userId = req.session.user._id 


    try {
        /* console.log("Current User Id: ", userId) */
        
         await User.findByIdAndUpdate(userId, {
            $push: {
                matchSent: id
            }
        }, {new: true});
        
        const otherUser = await User.findById(id)

       
        
        if (otherUser.matchRecieved.includes(userId)) {
            await User.findByIdAndUpdate(otherUser._id, {
                $pull: {
                    matchRecieved: userId
                },
                $push: {
                    matches: userId
                }
            })
            await User.findByIdAndUpdate(userId, {
                $pull: {
                 matchRecieved: otherUser._id
                 },
                $push: {
                 matches: otherUser._id
                 }
            })
        } else {
            await User.findByIdAndUpdate(id, {
                $push: {
                    matchRecieved: userId
                }
            })
        }

        res.redirect(req.get('referer'))

    } catch (error) {
        next(error)
    }
   

    //let findMatchesSentSessionUser = userId.matchesSent;
    //let findMatchesRecievedSessionUser = userId.matchesRecieved;
    
    // User.findByIdAndUpdate(otherUserId,{

    //     $push:{matchesRecieved: userId}
    // })
    // .then(() =>{
    //     User.findByIdAndUpdate(userId, {
            
    //         $push:{matchesSent: otherUserId}
    //     })})

    /* User.findByIdAndUpdate(otherUserId, {$push:{matchesRecieved: otherUserId}} )
        .then( ()=> User.findByIdAndUpdate(userId, {$push:{matchesSent: userId}}))
        
        .then( ()=> {
            User.findOne({_id:otherUserId, $inc: {matchesRecieved: userId}})
            .then((found) => {
                if (found) {
                    return User.findByIdAndUpdate(otherUserId, {
                        
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
        .catch((err) => next(err)) */
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

module.exports = router;