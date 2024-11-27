import { AssistantCreateParams } from "openai/resources/beta/assistants";

export const EMAILS_ASSISTANT_CONFIG: AssistantCreateParams = {
    name: 'Event Emails Assistant',
    description: '...',
    instructions: '...',
    tools: [{ type: "code_interpreter" }],
    model: 'gpt-4o',
}