# Frontend Notification Library

An exercise to implement a frontend only notification system.>

> A sample solution is implemented in Angular. The commits are pretty well defined: they show a step-by-step path to achieve the exercise goal.

## Goal

In this exercise, you are asked to develop a frontend-only notification library.

There are 4 notification levels: information, success, warning, error. A notification is made of a title and a message.

The library is a sharable solution to send and receive notifications between many components of an application.

## Usage Example

Imagine a quite complex application, like a shopping application:

- the main container, hosting everything composing the frontend application
- a first component to manage the shopping cart
- a second component to manage the user profile
- a lot of other things

Each previous components are developed in their own repository and delivered as a library, before being integrated in the main container (developed on its side as well).

We'd like the components to send notifications to the user in various cases: a request error, a newly added product, an upcoming automatic logout...
We'd like to keep a consistent user interface between all notifications: leave it to the container. We'd like to be able to filter notifications by type (for example, display only errors).

## Implementation Help

- Use any frontend framework you're comfortble with.
- Feel free to use any existing relevant library.
- Create the frontend library (ready for delivery on NPM): its responsability is to provide a way to send and receive notifications.
- Create a frontend application to demonstrate the library usage (you're not asked to design the previous shopping example): its responsability is to pretty display notifications.
- Be sure all components and the application share the same notification system.

## Some Evaluation Points

- classes and types benefits
- dependency management between library and application
- RxJS usage
- unit tests
- singleton implementation for the notification queue
- light library documentation
- tools usage like CLI
