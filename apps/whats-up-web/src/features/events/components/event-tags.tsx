import { Event } from '@libs/whats-up-events';

interface EventTagsProps {
  event: Event;
}

export function EventTags({ event }: EventTagsProps) {
  return (
    <div>
      {event.tags.map((tag) => (
        <p key={tag.id}>#{tag.label}</p>
      ))}
    </div>
  );
}
