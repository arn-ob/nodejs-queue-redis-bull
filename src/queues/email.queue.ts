import Bull from 'bull';
import emailProcess from '../processes/email.process';
import { setQueues, BullAdapter } from 'bull-board';

// https://optimalbits.github.io/bull

const emailQueue = new Bull('email', `redis://${process.env.REDIS_URL}`, {
    limiter: {
        max: 1,
        duration: 10000
    }
});

setQueues([
    new BullAdapter(emailQueue)
]);

emailQueue.process(emailProcess);

const sendNewEmail = (data: any) => {
    emailQueue.add(data);
};

export {
    sendNewEmail
}