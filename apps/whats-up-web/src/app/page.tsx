'use server';

import { prisma } from '@libs/whats-up-prisma';
import { SearchPage } from '../features/search/pages/search-page';

export default async function Page() {
  const tags = await prisma.event_tag.findMany();
  const events = await prisma.event.findMany({ include: { tags: true } });
  return <SearchPage tags={tags} events={events} />;
}
