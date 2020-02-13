var twilio = require('twilio');

const accountSid = 'ACef4264462276641033950f46e043e808'; 
const authToken = '[AuthToken]'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+17864632494' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console