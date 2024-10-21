'use client';

import { useMemo, useState } from 'react';
import { Separator } from '@libs/shadcn-ui-web';
import { SearchBar } from '../components/search-bar';
import { SearchCategoryList } from '../components/search-category-list';
import { SearchEventList } from '../components/search-event-list';
import { EventTag } from '../../events/types/event-tag';
import { Event } from '../../events/types/event';

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
      <SearchBar />
      <SearchCategoryList tags={tags} onValueChange={setSelectedTagIds} />
      <Separator />
      <SearchEventList events={events} selectedTags={selectedTags} />
    </div>
  );
}
