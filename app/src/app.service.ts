import { Injectable } from '@nestjs/common';
const sgMail = require('@sendgrid/mail')

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sendMail(): string {
    sgMail.setApiKey('SG.n9iGd69TTqKf259tbXJMRw.VrDpLh6kpPIbzJl9H3u_qp8XZt9R0NbfEna5QEWlU6')
    const msg = {
      to: 'nguyennhattan1398@gmail.com', // Change to your recipient
      from: 'nguyennhattan1397@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(JSON.stringify(error))
      })
    return 'Success!';
  }

}
