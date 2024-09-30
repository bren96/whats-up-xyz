'use client';

import { ToggleGroup } from '@libs/shadcn-ui-web';
import { SearchCategory } from './search-category';
import { EVENT_CATEGORIES } from '../../events/constants/event-categories';

export function SearchCategoryList() {
  return (
    <ToggleGroup type="multiple" className="p-4 gap-x-2 gap-y-2 flex-wrap">
      {EVENT_CATEGORIES.map((cat) => (
        <SearchCategory key={cat.label} category={cat} />
      ))}
    </ToggleGroup>
  );
}
