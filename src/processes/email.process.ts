import { Job } from "bull";
import axios from 'axios'

const emailProcess = async (job: Job) => {
    try {
        console.log(job.data)
        let _axios = await axios.get(String(job.data.url))

        console.log("Message sent: %s", _axios);
    } catch (error) {
        console.log("error ---- ", error)
    }

   return;
};

export default emailProcess;