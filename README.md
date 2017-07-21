### Formstack Angular Directive

Working Angular 1 directive created that meets the following requirements:

* Receives a model as a float (from 0 - 1)
* Displays to the user as a percentage (from 0 - 100)
* Would be marked invalid if below 0 or above 100

Regarding deliverables, this repository contains:

* [x] The directive implementation
* [x] A simple template implementing the directive
* [ ] Tests covering the functionality of the directive

Regarding tests, I created unit tests for the initial implementation but found the implementation was inadequate. After fixing the directive, I hit a wall with writing useful tests.

I used Jasmine for unit testing, but I found it difficult to mock the necessary user interaction with the directive to test the directive requirements. I think Protractor might have made it easier since it was more about mocking the user interaction rather than how the directive worked with other Angular services or controllers. This obviously demonstrates some learning opportunities on my part, so if I ran into this situation on the job, I'd be quick to engage my team members who might have know the right approach.

## Contents

* Implementation in [index.html](index.html)
* Angular App in [js/app.js](js/app.js)
* Tests in [spec/app-spec.js](spec/app-spec.js)
* Run test by refreshing [test-runner/index.html](test-runner/index.html)

## Boilerplate

Boilerplate for project: ["Simple AngularJS app setup with Jasmine and an Html Test Runner"](https://github.com/felippenardi/angularjs-and-jasmine-test-boilerplate) created by [felippenardi](https://github.com/felippenardi).
