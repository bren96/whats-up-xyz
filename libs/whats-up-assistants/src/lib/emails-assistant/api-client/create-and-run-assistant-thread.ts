
// connect to openai

import OpenAI from "openai"
import { ThreadCreateParams } from "openai/resources/beta/threads/threads"

const openai = new OpenAI()

export function createAndRunAssistantThread(thread: ThreadCreateParams) {
    const assistant_id = process.env['EMAILS_ASSISTANT_ID']
    if (!assistant_id) {
        throw new Error('EMAILS_ASSISTANT_ID not defined in environment')
    }

    return openai.beta.threads.createAndRun({
        assistant_id,
        thread: thread,
    })
}

// Example

// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const run = await openai.beta.threads.createAndRun({
//     assistant_id: "asst_abc123",
//     thread: {
//       messages: [
//         { role: "user", content: "Explain deep learning to a 5 year old." },
//       ],
//     },
//   });

//   console.log(run);
// }

// main();
