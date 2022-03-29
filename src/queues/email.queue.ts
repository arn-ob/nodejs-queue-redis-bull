import Bull from 'bull';
import emailProcess from '../processes/email.process';
import {setQueues, BullAdapter} from 'bull-board';

// https://optimalbits.github.io/bull

const emailQueue = new Bull('email', {
    redis: {
        host: process.env.REDIS_URL,
        port: 6379
    }
});

setQueues([
    new BullAdapter(emailQueue)
]);

emailQueue.process(emailProcess);

const sendNewEmail = (data: any) => {
    emailQueue.add(data, {
        attempts: 5
    });
};

export {
    sendNewEmail
}