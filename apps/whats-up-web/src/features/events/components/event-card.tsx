import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@libs/shadcn-ui-web';
import { Event } from '../types/event';

interface EventProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {Object.values(event).map((value) => {
          return <p key={value}>{value}</p>;
        })}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
