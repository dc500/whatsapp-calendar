# WhatsApp Bot
This program combines the Twilio API with the Google Calendar API so that you can create a shared Google calendar, add events to it, and this program will send messages via WhatsApp to intended group(s) reminding them of the events on the shared calendar.

## Instructions
1. run `npm install`
2. Create a `credentials.json` file containing: 
```{
  "installed": {
    "client_id":"GOOGLE_CAL_CLIENT_ID",
    "project_id":"GOOGLE_CAL_PROJECT_ID",
    "auth_uri":"https://accounts.google.com/o/oauth2/auth",
    "token_uri":"https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
    "client_secret":"GOOGLE_CAL_CLIENT_SECRET",
    "redirect_uris":["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
  }
}```
3. To launch app, run `node app`
