import { EventCard } from './event-card';
import { MOCK_EVENTS } from '../mocks/events';

function getEvents() {
  return MOCK_EVENTS;
}

export function EventList() {
  const events = getEvents();
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
