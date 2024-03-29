// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '333216393990838', // your App ID
        'clientSecret'  : '8d1cea1d8ce084aa1f1968c4fc6add6e', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    },
    'tvdbAuth':{
       "apikey": "TZVI3E2TM190H36B",
       "userkey": "sJOP0QP806WYVPRIZ",
       "username": "arajegan.ajpr8"
}
// {
//   "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTI1NDEyODksImlkIjoiIiwib3JpZ19pYXQiOjE1NTI0NTQ4ODksInVzZXJpZCI6NTIyNjYzLCJ1c2VybmFtZSI6InMua2lyaXNoYW50aDk3YmtkIn0.Wz5eIpRxuQDRsj3slNi3fSbrgHSrzVzSBAE3RRUPkKn1LyPVB8B0uF9dCIVVOkXL7YXXqjw_weZ_2gr89bNbA35EPcJFn7SymecR28jjk3b5d5I3aKjNXJWzsNGPYZEhVN04FOFpJQsqOgG8KcUIcyV9V99hqUOsPoY-f35nyEu34lQtcrBVReRyJVlsD3MZuNoE7t1IV_6tEHUlVnp9nlRwfQUwT8IEX3lgbVGm2sAlpza5srhw7xfvnGylkq0SnvyoWN7gi22nwjrhYxkNC_D9lvUcDwmZOaMmlUKULMMMZS8kM0i1UzlbpLlScrURIK591euNOUkJbkTJ5FjYUg"
// }
};
