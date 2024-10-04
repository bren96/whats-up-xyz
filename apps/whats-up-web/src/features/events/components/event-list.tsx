import { EventCard } from './event-card';
import { MOCK_EVENTS } from '../mocks/events';

function getEvents() {
  return MOCK_EVENTS;
}

export function EventList() {
  const events = getEvents();
  return (
    <div className="flex flex-col gap-y-4 p-4 overflow-scroll">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
