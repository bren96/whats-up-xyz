import { EventList, EventListProps } from '../../events/components/event-list';
import { EventTag } from '@libs/whats-up-events';

interface SearchEventListProps extends EventListProps {
  selectedTags: EventTag[];
}

export function SearchEventList({
  events,
  selectedTags,
}: SearchEventListProps) {
  // filter by selected tags
  const filteredEvents =
    selectedTags.length > 0
      ? events.filter((event) =>
          event.tags
            .map((tag) => selectedTags.map((t) => t.id).includes(tag.id))
            .includes(true)
        )
      : events;

  return <EventList events={filteredEvents} />;
}
