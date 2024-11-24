import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@libs/shadcn-ui-web';
import { Event } from '@libs/whats-up-events';
import { EventCategories } from './event-categories';
import { EventLocation } from './event-location';
import { EventTime } from './event-time';

interface EventProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.organization}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-end gap-y-2 text-lg">
        <EventTime event={event} />
        <EventLocation event={event} />
        <EventCategories event={event} />
      </CardFooter>
    </Card>
  );
}
