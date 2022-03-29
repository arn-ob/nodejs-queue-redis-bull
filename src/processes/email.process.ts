import { Job } from "bull";
import nodemailer from "nodemailer";

const emailProcess = async (job: Job) => {

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'core.isp.mail@gmail.com',
            pass: '01746110246Arn?'
        }
    });

    const mailOptions = {
        from: ' "Core-ISP" <core.isp.mail@gmail.com>',
        to: "arnobxtreme@gmail.com",
        subject: "subject",
        text: "text",
        html: job.data
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    return;
};

export default emailProcess;