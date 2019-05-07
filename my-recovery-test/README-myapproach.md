# Front-end Tech test for myrecovery

## Instructions

`cd my-recovery-test`
`npm install` to install dependencies
`npm start` to run the server on 3000
`npm test` to run tests

## Current Features

* View team members in list form
* See detailed view of team members 
* Add a team member
* Remove a team member

## Future Features

* Behavioral tests for MemberList.jsx to test removing and adding a member to the list
* Simple snapshot test for Member.jsx to ensure each member's information is rendered properly
* A test for NewMemberForm to ensure the inputted information is being stored on MemberList properly
* Fix the UI for each member component when in expanded mode - stop the other components from expanding. Perhaps a split screen where the list is on the left and the detailed view populates on the right when clicked.
* Improve responsiveness of the UI for mobile devices
* Fix component alignment with CSS grid

## Comments
I gave the elements in the api.json file ids in order to be able to find the correct member when deleting from the MemberList. New members are assigned the current date as their ids.