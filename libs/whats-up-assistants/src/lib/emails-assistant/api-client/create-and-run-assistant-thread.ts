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
