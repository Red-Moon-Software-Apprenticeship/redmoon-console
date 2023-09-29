# redmoon-console
The marketing site, customer relationship management, and apprentice management software for Red Moon

# Table of Contents

1. [redmoon-console](#redmoon-console)
2. [Contributing to this Project](#contributing)
3. [Project vision](#project-vision)
   1. [Marketing Site and Employer Management](#1-marketing-site-and-employer-management)
   2. [Subscribed Employers Management](#2-subscribed-employers-management)
   3. [Apprentices Management](#3-apprentices-management)

4. [Getting Setup](#getting-setup)
   1. [Install Dependencies](#1-run-npm-install)
   2. [Setting Up the Database and Prisma](#2-setting-up-the-database-and-prisma)
   3. [Setting Up Google and Github OAuth](#3-setting-up-google-and-github-oauth)
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

## Contributing

### For Prospective Apprentices

As you know, contributing to the Red Moon Apprenticeship program is one way of applying to the Redmoon Apprenticeship. This is your chance to show us what your capable of. Here are some ways to contribute:

1. Tackle an open issue:
2. Submit your own issue:
3. Improve an existing feature:
4. Write tests for an existing feature(s):

If you're looking for ideas, please consult the issues tab.

### Domain Specific Guidelines

#### Frontend Design

Please consult existing style sheets and designs before submitting a pull request.

#### User Auth and Payments

Any features that look to edit any tables responsible for user authentication, or that deal with payments must have tests written for them before being merged onto the project. You can collaborate with other contributors to write tests (one person writes tests, another writes the feature, etc). In some cases, we might suggest a test for you to write.

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


3. Setting Up Google and Github OAuth

If you want to test features specific to Google and Github OAuth, refer to the below instructions, else feel free to skip this section.

Navigate to "./src/app/api/auth/" and create an .env file. Inside the .env file should look like this:

```bash
GOOGLE_CLIENT_ID=<YOUR KEY>
GOOGLE_CLIENT_SECRET=<YOUR KEY>
GITHUB_ID=<YOUR KEY>
GITHUB_SECRET=<YOUR KEY>

```

You will need a Github account and a Google API account in order to get set up, please refer to the following video for a walkthrough:

![Google API key access](https://youtu.be/MrzCV0och5k?si=6fKEDV-rufPRQLTz&t=114)
![GitHub API key access](https://youtu.be/MrzCV0och5k?si=hhl05aOBKbTYByMA&t=576)

4. Running the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
