import { Prisma } from '@prisma/client';

export type Event = Prisma.eventGetPayload<{ include: { tags: true } }>;
