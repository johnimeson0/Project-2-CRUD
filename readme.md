Side note - “**text**” means it needs revision and is just an idea that I am not confident on 
 
# Interest
 
 
 
 
 
<br>
 
 
 
## Description
 
Interest is a CRUD web application where Entrepreneurs and Manufacturers can find their perfect corresponding match for investments and business partnerships.
 
 
 
<br>
 
## User Stories
 
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **homepage** - As a user I want to be able to access the homepage and filter by type of industry, business, etc.,log in, sign up and view my matches.
- **sign up** - As a user I want to sign up on the web page easily so that I can view and add potential matches to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.
- **edit user profile** - As a user I want to be able to edit my profile.
 
- **profile page** - As a user I want a nice, functional profile page that will have my information and include a feed of contacts and potential business opportunities.
- ** Search page** - As a user I want a page with a search feature and filter that I can use to view potential matches and their key information.
- **search result page** - As a user I want to see the list of profiles with key information based on filters by my preferences and see all potential matches.
- **chat feature page** - As a user I want a page where I can chat with other users once we both match with each other
 
<br>
 
 
 
## Server Routes (Back-end):
 
 
 
| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/` | Main page route.  Renders home `index` view. |             |   
| `GET`      | `/home` | Second main page route.  Renders the main `home` view.  |
|                                                        
| `GET`      | `/login` | Renders `login` form view.     | 
|                                                                               
| `POST`     | `/login`| Sends Login form data to the server.                         | { email, password } |                                    
|
| `GET`      | `/signup`| Renders `signup` form view.      |                            |                                                          
| `POST`     | `/signup`| Sends Sign Up info to the server and creates a user in the DB. | {  email, password  }           |                         |                                                 
| `GET`      | `/edit-profile` | Private route. Renders `edit-profile` form view.|                                                          |
| `PUT`      | `/edit-profile`  | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
 
| `GET`      | `/create-profile`  |  Take the created profile and connect to the profile page. |                                                       |
| `POST`     | `/create-profile`  | Private route. Shows the current created profile.  | { name, location, parameter 1, parameter 2, parameter 3 }          |                      |
| `DELETE`   | `/delete-profile`| Private route. Deletes the existing user from the database. |                                                          |
| `GET`      | `/entrepreneurs`  | Renders `entrepreneurs-list` view.                              |                                                          |
| `GET`      | `/entrepreneurs/profile/:id`| Renders `entrepreneurs-details` view for the particular entrepreneur profile. |                                                      |
| `GET`      | `/manufacturers` | Renders `manufacturers-list` view.   |                     |                                                          
| `GET`      | `/manufacturers/profile/:id` | Renders `manufacturers-details` view for the particular manufacturer profile. |                                                         |
| `POST`      | `/search`  |  User can input into the search box and send their queries to render filtered through user profiles.
|
| `POST`      | `/chat/create/:otherUserId`| Renders page where user can create a chat with another user.|
|
| `GET`      | '/chat/:chatId' | Users can enter that chat that was created.| 
|
| `POST`     | '/chat/:chatId/message' | Renders the page where the user's name who sent the message appears. |
|
| `POST`     | "/match/:id" | Renders the match sent and received between one user to another user.
|
| `GET`      | /logout | Renders `logout` form view.     |
|
| `GET`      | /auth/logout  | Renders an error page 505 if issue with `logout` form view.     |
 
## Models
 
User model
 
```javascript
{
    username: String,
    email: String,
    password: String,
    entrepreneur: Boolean,
    manufacturer: Boolean,
    firstParameter: String,
    secondParameter: Number,
    thirdParameter: Number,
    location: String,
    capacity: Number,
    name: String,
    contact: String,
    imgUrl: String,
    description: String,
 
 }
	
 Messages model
 
```javascript
 {
      author: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      content: String,
    }
 
 
   
 Conversation Model
 
```javascript
 
 {  participants: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
      messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
      }]
  }
 
```
 
 
 
<br>
 
## API's
 - No API’s were used
 
<br>
 
 
## Packages
 
- **npm**
 
<br>
 
 
 
## Backlog
 
[See the Trello board.]
(https://trello.com/invite/b/mwZLqheg/5aaa13f6e62686ea898db44685c2e9c7/best-group)
 
<br>
 
 
 
## Links
 
 
 
### Git
 
The url to our repository and to our deployed project
 
[Repository Link](https://github.com/johnimeson0/Project-2-CRUD)
 
[Deploy Link]()
 
 
 
<br>
 
 
 
### Slides
 
The url to your presentation slides
 
[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)
 
### Contributors
 
John Imeson - [`<github-username>`](https://https://github.com/johnimeson0) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person1-username)
 
Luisa Coelho - 
[`<github-username>`](https://https://github.com/marilu777) - [`<linkedin-profile-link>`](https://https://www.linkedin.com/in/lu%C3%ADsamariacoelho07/)
 
Jason Rosa - [`<github-username>`](https://github.com/JasonRosa) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/jason-cristiano-da-rosa-346660a5/)
 
 
 
