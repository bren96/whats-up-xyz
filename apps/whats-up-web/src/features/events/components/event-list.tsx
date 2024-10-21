import { EventCard } from './event-card';
import { Event } from '../types/event';

export interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  return (
    <div className="flex flex-col gap-y-4 p-4 overflow-scroll">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
