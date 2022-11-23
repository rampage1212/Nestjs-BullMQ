import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('message-queue')
export class MessageConsumer {
    
    @Process('message-job')
    async readOperationJob(job:Job<unknown>){
        console.log("conumer", job.data);
        await this.sleep(10000);
    }

    sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
    } 

    
}
