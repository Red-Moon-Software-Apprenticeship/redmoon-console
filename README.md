# redmoon-console
The marketing site, customer relationship management, and apprentice management software for Red Moon

## Project vision

This project will serve several functions

1. serve as a marketing site for employers to see what Red Moon is all about, register their organization, subscribe, and then view Red Moon apprentices

Employers will need to be able to create an account, sign in, forgot password, all that. Integrating with an authentication provider like Auth0 is the way to accomplish this.

Once employers have created an account they'll need to subscribe to view candidates. Integrating with a payment processor like Stripe is the way to accomplish this.

Employers should be able to "Reach out" to an apprentice if they're interested in contacting them. A template email would then go to the apprentice letting them know what employer is interested in them and the employer's contact info.

Employers should be able to filter/sort apprentices based on geographic location, tech stack, and Level (apprentices at Levels 2 and 3 will be visible to employers).

Employers should be able to save details about their current needs to their profile. Ie. geographic restrictions, tech stack, etc.


2. serve as a place to manage subscribed employers

Need a way to see all subscribed employers, what kind of help their looking for, any additional requirements (like only a certain geographic area) and what apprentices they've reached out to.


3. serve as a place to manage apprentices

Will need to be able to fill out the information on apprentices that employer's will see, manage what small team their on, tracking what Level they're on what training they've done, etc.

