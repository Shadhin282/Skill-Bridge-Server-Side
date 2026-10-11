Project Requirement : 

Project Name : Skill Bridge - Where people get expert to learn, guide and enhance skills from all over the world.
What Problem will solve this website ?
There is a lot's of learning website and getting live guidenance is not available that much. Here is the place where people will get live guidenance from the expert.
Who will be benefitted from here?
All the learners in the world. there is no age barrier. who ever wants to learn.

User Roles belows:
Admin → full CRUD on all resources, access to audit logs
tutor → create own profile, set availability and accept/reject booking
learners → check all available tutors and their profile, can booking and payment

Data Modelling:

        User- one to many 
        tutor - one to many
        Student - 
        Booking -
        Payment -

List of all API endpoint :
    User:
        POST/api/v1/auth/register
        POST/api/v1/auth/login
        POST/api/v1/auth/logout
        GET/api/v1/users
    Tutor:    
        GET/api/v1/tutorProfile/:id
        POST/api/v1/tutorProfile
    Students:
        POST/api/v1/booking
    Payment:
        POST/api/v1/createPayment
        GET/api/v1/SuccessPayment
        GET/api/v1/Checkout

Project Design : 

Architechture Pattern : 
        Modular monolith:-
                        One backend application, organized into independent business modules such as authentication, tutors, bookings, reviews, payments, and notifications
Design the schema:



API specification checklist :



Design Authentication and Authorization:


plan error handling and response standard: 



Tech Stack :
        System tech stack :

               Backend :  Nodejs + Expressjs + Typescript + BetterAuth + stripe
               Database: PostgreSQL + Prisma ORM
               API      : REST API
               Real time : Socket.io
               Testing : Vitest + Supertest + Playwright