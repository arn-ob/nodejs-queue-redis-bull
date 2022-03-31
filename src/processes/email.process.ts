import { Job } from "bull";


const emailProcess = async (job: Job) => {

    let todos  = await fetch('https://jsonplaceholder.typicode.com/todos')

    console.log("todos List", JSON.stringify(todos));

    console.log("Message sent: %s");
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    return;
};

export default emailProcess;