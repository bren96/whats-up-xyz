'use client';

import { useMemo, useState } from 'react';
import { Separator } from '@libs/shadcn-ui-web';
import { SearchCategoryList } from '../components/search-category-list';
import { SearchEventList } from '../components/search-event-list';
import { Event, EventTag } from '@libs/whats-up-events';

interface SearchPageProps {
  tags: EventTag[];
  events: Event[];
}

export function SearchPage({ tags, events }: SearchPageProps) {
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  const selectedTags = useMemo(() => {
    return tags.filter((tag) => {
      return selectedTagIds.includes(`${tag.id}`);
    });
  }, [tags, selectedTagIds]);

  return (
    <div className="p-4 grow">
      {/* TODO <SearchBar /> */}
      <SearchCategoryList tags={tags} onValueChange={setSelectedTagIds} />
      <Separator />
      <SearchEventList events={events} selectedTags={selectedTags} />
    </div>
  );
}
