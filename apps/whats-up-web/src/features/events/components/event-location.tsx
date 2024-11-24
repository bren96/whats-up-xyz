import { MapPinIcon } from 'lucide-react';
import { Event } from '@libs/whats-up-events';

interface EventLocationProps {
  event: Event;
}

export function EventLocation({ event }: EventLocationProps) {
  return (
    <div className="flex gap-x-2 text-stone-500">
      <p className="text-sm text-right">{event.address}</p>
      <MapPinIcon className="w-5 h-5" />
    </div>
  );
}
