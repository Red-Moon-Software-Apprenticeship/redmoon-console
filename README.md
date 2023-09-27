# redmoon-console
The marketing site, customer relationship management, and apprentice management software for Red Moon

# Table of Contents

1. [redmoon-console](#redmoon-console)
2. [Getting ]
3. [Project vision](#project-vision)
   1. [Marketing Site and Employer Management](#1-marketing-site-and-employer-management)
   2. [Subscribed Employers Management](#2-subscribed-employers-management)
   3. [Apprentices Management](#3-apprentices-management)

4. [Getting Setup](#getting-setup)
   1. [Install Dependencies](#1-run-npm-install)
   2. [Setting Up the Database and Prisma](#2-setting-up-the-database-and-prisma)
   3. [Running the Development Server](#3-running-the-development-server)


## Project vision

This project will serve several functions

1. serve as a marketing site for employers to see what Red Moon is all about, register their organization, subscribe, and then view Red Moon apprentices

Employers will need to be able to create an account, sign in, forgot password, all that. Integrating with an authentication provider like Auth0 is the way to accomplish this.

Once employers have created an account they'll need to subscribe to view candidates. Integrating with a payment processor like Stripe is the way to accomplish this.

Employers should be able to "Reach out" to an apprentice if they're interested in contacting them. A template email would then go to the apprentice letting them know what employer is interested in them and the employer's contact info.

Employers should be able to filter/sort apprentices based on geographic location, tech stack, and Level (apprentices at Levels 2 and 3 will be visible to employers).

Employers should be able to save details about their current needs to their profile. Ie. geographic restrictions, tech stack, etc.


2. serve as a place to manage subscribed employers

Need a way to see all subscribed employers, what kind of help they're looking for, any additional requirements (like only a certain geographic area) and what apprentices they've reached out to.


3. serve as a place to manage apprentices

Will need to be able to fill out the information on apprentices that employers will see, manage what small team they're on, tracking what Level they're on, what training they've done, etc.

## Getting setup

1. Run:

```bash
npm install
```

2. Setting up the database and Prisma

The redmoon console uses Prisma ORM to manage its Postgresql database. 

It is highly recommended that you install Prisma globally:

```bash
npm install -g prisma

```

First, in /prisma create a .env file, inside copy-paste the following:

```bash
DATABASE_URL="postgresql://<johndoe>:<randompassword>@localhost:5432/redmoon?schema=public"
```
Of course, replace johndoe and randompassword with your Postgresql username and password

In the root folder, run the following:

```bash
npx prisma db push  # This will create the initial table
npx prisma generate # This will set up the Prisma client, which will allow us to do basic interactions with the database.
```

For hosting, we want to run migrations so that the live database stays in sync with database changes, Prisma provides the following command

```bash
npx prisma migrate dev --name <name>
```
Where name here is the name of the migration.

4. Running the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
