import { prisma } from '@libs/whats-up-prisma';

export function POST() {
  // create email in db
  prisma.email.create({
    data: {
      rawText: 'Test 123',
      status: 'IN_PROGRESS',
    },
  });

  // create and run assistant thread
  // validate response
  // create events in db
}
