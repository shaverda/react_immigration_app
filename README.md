# Immigration Portal


Immigration Portal is an app designed to connect pro-bono lawyers with immigrants looking to file USCIS forms.

Composed of Webpack, React, Redux, and MongoDB. Utilizes the following APIs: Auth0, Smartystreets, and Sendgrid.

## Installation

To run this app on your local computer

```javascript
//To install, first open your terminal and run:
git clone https://github.com/Shaverda/react_immigration_app.git
cd react_immigration_app
npm install

//Next, in the same react_immigration_app root directory folder, run:
touch .env
```

This creates an environment file, to which you will add your [personal API keys](https://en.wikipedia.org/wiki/Application_programming_interface_key). To do this, edit the conents of this .env file in your favorite text editor. It should have four different lines like this:

SENDGRID_API_KEY='insert sendgrid api key here'
SMARTYSTREETS_AUTH_ID='insert smartystreets api key here'
SMARTYSTREETS_AUTH_TOKEN='insert smartystreets auth token here'
AUTH_CLIENT_ID='insert auth0 client id here'
AUTH_CLIENT_DOMAIN='insert auth0 client domain here'

You now need to retrieve api keys/auth tokens from Sendgrid, Smartystreets, and Auth0. This app uses Sengrid to send emails to our pro bono lawyer partners when users/immigrants have finished filling out their forms. Smartystreets is used to validate that addresses are entered properly. Auth0 is used for Google logins. 

Obtain a Sendgrid API key by [signing up here.](https://app.sendgrid.com/signup?id=71713987-9f01-4dea-b3d4-8d0bcd9d53ed&co=true)

Obtain a Smartystreets auth id/auth token by [signing up here.](https://smartystreets.com/signup)

Obtain an Auth0 auth id/domain by [signing up here.](https://auth0.com/signup)

Once you have all 5 keys/auth id/tokens, type them within the single quotes marks in place of 'insert sendgrid api key here'. Save this file, and go back to your terminal within the root react_immigration_app directory. 
```javascript
//To start your server
node server

```

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