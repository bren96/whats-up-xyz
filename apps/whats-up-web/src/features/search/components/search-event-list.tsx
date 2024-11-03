import { EventList, EventListProps } from '../../events/components/event-list';
import { EventTag } from '../../events/types/event-tag';

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
            .map((tag) => selectedTags.map((t) => t.label).includes(tag.label))
            .includes(true)
        )
      : events;

  console.log({ filteredEvents, selectedTags });

  return <EventList events={filteredEvents} />;
}
