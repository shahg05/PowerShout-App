This project is made with the help of GOOGLE SEARCH API, SENDGRID and GOOGLE DEVELOPER CONSOLE.

Run the Energy Power Shout App on the Browser by installing the repo code and running following commands on the BASH terminal:

1 --> cd power-shout-master

2 --> npm i express env-cmd

3 --> make a config folder in the root directory and inside it make a 'dev.env' file like as config(folder) -> dev.env(file) .The config file must contain 4 env variables as:

SENDGRID_API_KEY=your sendgrid api key

CLIENT_ID=your google api client id

CLIENT_SECRET=your google client secret

REFRESH_TOKEN=your developer refresh token

4 --> npm run dev

5 --> Open the Energy Power Shout app in your browser.