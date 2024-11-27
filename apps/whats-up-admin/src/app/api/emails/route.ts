import { prisma } from '@libs/whats-up-prisma';
import { email } from '@prisma/client';
import { NextRequest } from 'next/server';
import { createAndRunAssistantThread } from 'whats-up-assistants';

function validatePostRequest(object: any): object is email {
  return (object as email) && typeof (object as email).rawText === 'string';
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!validatePostRequest(body)) {
    return new Response('Invalid Data', { status: 400 });
  }

  // create email in db
  const email = await prisma.email.create({
    data: {
      rawText: body.rawText,
      status: 'IN_PROGRESS',
    },
  });

    // create and run assistant thread
    createAndRunAssistantThread({
      messages: [
        {
          role: 'user',
          content: '...'
        }
      ]
    })
  
  
    // validate response
    // create events in db

  return new Response(JSON.stringify(email), { status: 201 });
}
