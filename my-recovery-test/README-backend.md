# myrecovery Backend Code Test

Do not spend more than four hours on this test, it doesn't matter if the code is not fully-functional. We want to see how you go about problem-solving within constraints.

## Overview

1. Model a hospital's clinical 'teams'
2. Build a backend API that exposes a hospital's clinical teams via a single RESTful endpoint.
3. Send us your solution as either:
    i) a link to a fork of this repo
    ii) a git archive (`git archive --format=tar --output=backend-test.tar master`)

See 'Data models' below for an example of a team.

## Tooling

* Any recognised Python backend web framework, e.g. Django, Flask etc. (we use Django).

## Backend

### 1. Data models

Design the data models as you see fit, with a view to storing and representing the data effectively.

A 'team' should be a group of individuals working with a surgeon. For example:

- Surgeon A
    - Nurse
    - Nurse
    - Admin Assistant

- Surgeon B
    - Nurse
    - Nurse
    - Admin Assistant

A 'specialty' would be some sort of label/tag object associated with an individual.

Models and their methods should have some very basic unit tests.

### 2. Endpoint

The endpoint must support the following fields:

* profilePicture
* firstName
* lastName
* type (e.g. Surgeon, Nurse, Admin Assistant)
* onLeave
* specialities (e.g. Orthopaedics, Renal, Paediatrics)
* biography

### Bonus

* Basic endpoint tests
