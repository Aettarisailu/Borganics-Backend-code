const nodemailer = require('nodemailer');



// API endpoint to send email
const UserFeedbackMail  =  async (req,res) => {
  try{
      const {email, subject, message } = req.body;
    
      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'attarisai5@gmail.com',
              pass: 'fbja copy atld lzvp'
          }
      });
    
      // Mail options
      const mailOptions = {
          from: 'attarisai5@gmail.com',
          to: "ranransai992@gmail.com",
          subject: subject,
          text: `Feedback from ${email}    Feedback message ${message}`
      };
    
      // Send mail
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
              res.status(500).send('Error occurred while sending email');
          } else {
              console.log('Email sent: ' + info.response);
              res.status(200).send('Email sent successfully');
          }
      });
  }catch(error){
    console.log(error)
  }
}


module.exports = {
  UserFeedbackMail,
}