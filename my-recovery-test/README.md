# myrecovery Full-Stack Code Test

Do not spend more than four hours on this test, it doesn't matter if the code is not fully-functional. We want to see how you go about problem-solving within constraints.

## Overview

1. Build a backend API that exposes a hospital's clinical teams via a single RESTful endpoint.
2. Build a frontend application that consumes this endpoint, and provides the ability for a user to:
    i) view their team
    ii) view their team members
    iii) add / remove a team member.
3. Send us your solution as either:
    i) a link to a fork of this repo
    ii) a git archive (`git archive --format=tar --output=full-stack-test.tar master`)

## Tooling

* Any recognised backend web framework, e.g. Django, Rails, Flask etc. (we use Django)
* Any recognised frontend framework, e.g. Angular, React, Vue.js (we use Vue.js)
* Any recognised css framekwork, e.g Bootstrap, Skeleton, Materialize (we use Semantic UI)

## Backend

### Endpoint

The endpoint must support the following fields:

* profilePicture
* firstName
* lastName
* type (e.g. Surgeon, Nurse, Admin Assistant)
* onLeave
* specialities (e.g. Orthopaedics, Renal, Paediatrics)
* biography

### Data models

Design the data models as you see fit, with a view to storing and representing the data effectively.

### Bonus

* Basic endpoint tests

## Frontend

### List view

The user needs to be able to see all their team members within a list view, with the ability to add / remove a team member.

### Detail view

By clicking on a team member in the list view, the user needs to be able to view all the team member's information.

### Bonus

* Good UX and clean visual design
* Basic frontend tests
