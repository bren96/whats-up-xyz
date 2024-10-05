import { Tags } from 'lucide-react';
import { Event } from '../types/event';

interface EventCategoriesProps {
  event: Event;
}

export function EventCategories({ event }: EventCategoriesProps) {
  return (
    <div className="flex gap-x-2 text-violet-600 font-mono">
      {event.categories.map((category) => (
        <p className="text-sm text-right" key={category}>
          #{category}
        </p>
      ))}
      <Tags className="w-5 h-5" />
    </div>
  );
}
