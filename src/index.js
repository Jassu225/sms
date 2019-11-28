// const SMTPServer = require('smtp-server').SMTPServer;
// const port = process.env.PORT || 7991;

// const serverOptions = {
//     // secure: true, // requires key & certificate
//     logger: true
// };

// const server = new SMTPServer(serverOptions);

// server.on('error', err => {
//     console.log('Error %s', err.message);
// });

// server.listen(port, function() {

// });

// To send emails you need a transporter object
let transporter = nodemailer.createTransport(transport);