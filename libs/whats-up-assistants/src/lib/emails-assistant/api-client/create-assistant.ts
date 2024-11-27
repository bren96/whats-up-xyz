import OpenAI from "openai"
import { EMAILS_ASSISTANT_CONFIG } from "../constants/emails-assistant-config"

const openai = new OpenAI()

export function createAssistant() {
    return openai.beta.assistants.create(EMAILS_ASSISTANT_CONFIG)
}