# Knowledge Test Client

Client application for user to register and create their own sets of question and answers and group them by topics.

## References:
* [Knowledge test application](https://shantalanarayan.github.io/knowledge-test-client/)
* [Knowledge test api url](https://sn-knowledge-test.herokuapp.com/examples)
* [Knowledge test api repo](https://github.com/shantalanarayan/knowledge-test-api)

## User stories
![User stories](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/kt_user_stories.jpeg)

## Wireframes
### Sign-in
![Sign-in wireframe](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Sign%20in%20form.png)

### Sign-up
![Sign-up wireframe](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Sign%20up%20form.png)

### Change-password
![Change password](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Change%20password.png)

### Study cards - answer not visibile
![Study cards - answer not visibile](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Study%20cards%20-%20read%20mode%20-%20answer%20hidden.png)

### Study cards - answer visibile
![Study cards - answer visibile](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Study%20cards%20-%20read%20mode%20-%20answer%20visible.png)

### Study cards - update
![Study cards - update](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Study%20cards%20-%20edit%20mode.png)

### Add study card
![Add study card](https://github.com/shantalanarayan/knowledge-test-client/blob/KTClient/docs/Knowledge%20Test%20-%20Add%20study%20card.png)


## Technologies Used
* Html
* CSS
* JavaScript
* Handlebars
* Ajax
* JSON
* jQuery
* Bootstrap 4
* Grunt

## Planning
* Brainstormed ideas with team members
* Shortlisted 3 projects and ran it by the instructor
* Created user stories and ran it by instructor for approval.
* Created rough draft of wireframes
* Instructor directed to implement application with minimal resources for brevity of time.
* Once the project was finalized, refined user stories and wireframes.

## Development process
 * Created user stories and ran it by instructor for approval.
 * Designed wireframes - pencil, sketch, drawing-board to whimsical.
 * Kept backend API running on local
 * Started with html and build piece by piece
 * Used [Bootstrap 4.0 documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/) extensively for styles and formatting and layout ideas.
 * Used [jQuery API documentation](https://api.jquery.com/) for behaviors and special effects.
 * Used chrome developer tools and `console.log` to validate api callback and other operations
 * Used GA study and other reference materials for concept clarifications

## Problem solving strategies
 * I wanted to enable auto-signin on sign-up. One way to do this was to call sign-in api immediately on successful sign-up. However, that meant it will take 2 api calls to accomplish auto sign-in on sign-up. When inspected the json returned for successful signup, I realized only thing missing is a **token** Hence, I updated the backend API code to generate and include token on successful sign-up.
 * Initially, I had a button to get studies created by the user. Later, when I was implementing create study, I realized, I need to refresh studies list on successful creation of a new study. This required me to call `get topics` api in `create topic's` success callback function. This change meant, **Get topic button** was redundant. Hence, I removed it.
 * Above change, gave me the opportunity to implement `get topics` api call on sign-in or sign-up itself. Thus improving user experience.
 * Implementing delete and update functionality for a study card was a challenge. The main problem was I could not figure out how would I get the id of the study to update. I refered back to `Handlebars` study to figure out how it was done there. After, some reading and experimenting, I figured out I could use `data-id` of the *closest section* for the button that was clicked.
 * Another challenge with update functionality, was that I couldn't figure out how to implement a smooth user experience for update.
   - Initial idea was to add a new tab to update card, where user will enter the card id and then I can submit that form to update. However, it immediately occurred to me that user wont know what the id is unless I display it on the card, which seemed unnecessary.
   - Another idea, was to let user click on a card which will navigate them to a new tab and the id would be pre-populated there. Thus solving above problem. Seemed like a good idea, but I that was still not an experience I would enjoy.
   - Finally, after brainstorming for solutions with my friends, on their direction I started exploring jQuery toggle functionality to create an illusion of edit on the spot.
     - For each topic - 2 sections were created using handlebars.
     - 1 for read - **visible at first**.
     - 1 for edit - **hidden at first**.
     - Both read and edit have **same class** called `{topicId}-section` used for toggling visibility
     - Read section has an update button with id **{topic-id}-Update**
     - Edit section has its counterpart cancel button with id **{topic-id}-Cancel**
     - Both update and cancel button implements the **same handler callback function** for click event
     - In that function I just toggle visibility of element with class  `{topicId}-section` - to toggle between read and edit card’s visibility. Thus, for a given topic-id, when read is visible, edit is hidden. When edit is visible, read is hidden.