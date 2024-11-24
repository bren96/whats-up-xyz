import { Tags } from 'lucide-react';
import { Event } from '@libs/whats-up-events';

interface EventCategoriesProps {
  event: Event;
}

export function EventCategories({ event }: EventCategoriesProps) {
  return (
    <div className="flex gap-x-2 text-violet-600 font-mono">
      {event.tags.map((tag) => (
        <p className="text-sm text-right" key={tag.id}>
          #{tag.label}
        </p>
      ))}
      <Tags className="w-5 h-5" />
    </div>
  );
}
