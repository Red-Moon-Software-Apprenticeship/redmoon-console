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

## Getting setup

1. Run:

```bash
npm install
```

2. Setting up the database

The redmoon console uses Prisma to manage its Postgresql database. 

First, in /prisma create a .env file, inside copy-paste the following:

```bash
DATABASE_URL="postgresql://<johndoe>:<randompassword>@localhost:5432/redmoon?schema=public"
```
Of course, replace johndoe and randompassword with your Postgresql username and password

In the root folder, run the following:

```bash
prisma db push  # This will create the initial table
prisma generate # This will set up the Prisma client, which will allow us to do basic interactions with the database.
```

For hosting, we want to run migrations so that the live database stays in sync with database changes, Prisma provides the following command

```bash
prisma migrate dev --name <name>

```
Where name here is the name of the migration.

4. Running the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.