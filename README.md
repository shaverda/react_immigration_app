# Immigration Portal
---

Immigration Portal is an app designed to connect pro-bono lawyers with immigrants looking to file USCIS forms.

This app is comprised of Webpack, React, Redux, and MongoDB. It tilizes the following APIs: Auth0, Smartystreets, and Sendgrid.

## Installation

To run this app on your local computer:

```javascript
//To install, first open your terminal and run:
git clone https://github.com/Shaverda/react_immigration_app.git
cd react_immigration_app
npm install

//Next, in the same react_immigration_app root directory folder, we need to create a .env file. You can create this in Linux in the terminal by running:
touch .env
```

This creates an environment file, to which you will add your [personal API keys](https://en.wikipedia.org/wiki/Application_programming_interface_key). To do this, edit the conents of this .env file in your favorite text editor (I use Sublime!). It should now have four different lines like this:
```javascript
SENDGRID_API_KEY='insert sendgrid api key here'
SMARTYSTREETS_AUTH_ID='insert smartystreets api key here'
SMARTYSTREETS_AUTH_TOKEN='insert smartystreets auth token here'
AUTH_CLIENT_ID='insert auth0 client id here'
AUTH_CLIENT_DOMAIN='insert auth0 client domain here'
```

## Obtaining API keys
You now need to retrieve api keys/auth tokens from Sendgrid, Smartystreets, and Auth0. This app uses Sengrid to send emails to our pro bono lawyer partners when users/immigrants have submitted their forms. Smartystreets is used to validate that mailing addresses are entered properly. Auth0 is used for Google logins. 

1. Obtain a Sendgrid API key by [signing up here.](https://app.sendgrid.com/signup?id=71713987-9f01-4dea-b3d4-8d0bcd9d53ed&co=true)
2. Obtain a Smartystreets auth id/auth token by [signing up here.](https://smartystreets.com/signup)
3. Obtain an Auth0 auth id/domain by [signing up here.](https://auth0.com/signup)

Once you have all 5 keys/auth id/tokens, type them within the single quotes marks in place of, for example, 'insert sendgrid api key here'. Save this file, and navigate back in your terminal to the root react_immigration_app directory. 


## Setting up your Database
This app uses MongoDB in order to quickly/easily create and store data. First, [make sure you've installed MongoDB.](https://www.mongodb.com/download-center#community)
You will need to create a database and edit the file server.js in the root directory of this project to be able to successfully run it. Specifically, what needs to be edited is line 28 of server.js: 
```javascript
//This is my specific database. 
mongoose.connect("mongodb://localhost/React");
```
You will need to instead connect to your own database you've created, and then edit that line accordingly with your database name/hostname. 
For a simple tutorial for creating a MongoDB database, click [here.](https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm)
Before we can start our server, we need to have our MongoDB instance running. If you've used your own machine for this like I did, you need to start MongoDB in your terminal by running:
```javascript
mongod
//occasionnally, you will have permissions difficulty and instead have to run sudo mongod
//You can then start an actual MongoDB shell by running:
mongo
```

Time to start our local server...
```javascript
//To start your server
node server
```

Now you're all up and running, time to navigate in our browser to localhost:3000!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Original Project Began in April 2017;

## Notes 


## Credits

Contributors: @Shaverda, @williamwgilmore for a pre-React version of this project