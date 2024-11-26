import { prisma } from '@libs/whats-up-prisma';
import { email } from '@prisma/client';
import { NextRequest } from 'next/server';

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

  return new Response(JSON.stringify(email), { status: 201 });

  // create and run assistant thread
  // validate response
  // create events in db
}
