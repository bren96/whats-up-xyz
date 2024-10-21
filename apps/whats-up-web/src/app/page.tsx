'use server';

import { prisma } from '@libs/whats-up-prisma';
import { SearchPage } from '../features/search/pages/search-page';
import { MOCK_EVENTS } from '../features/events/mocks/events';

export default async function Page() {
  const tags = await prisma.event_tag.findMany();
  const events = MOCK_EVENTS;
  return <SearchPage tags={tags} events={events} />;
}
