var twilio = require('twilio');

const accountSid = 'ACCOUNT_SID'; 
const authToken = 'AUTH_TOKEN'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
         from: 'whatsapp:FROM_NUMBER',       
         to: 'whatsapp:TO_NUMBER' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();