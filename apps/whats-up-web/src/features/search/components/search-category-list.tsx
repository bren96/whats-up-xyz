'use client';

import { ToggleGroup, ToggleGroupItem } from '@libs/shadcn-ui-web';
import { EVENT_CATEGORIES } from '../../events/constants/event-categories';

export function SearchCategoryList() {
  return (
    <div>
      <ToggleGroup type="multiple">
        {EVENT_CATEGORIES.map((cat) => (
          <ToggleGroupItem key={cat.label} value={cat.label}>
            {cat.emoji} {cat.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
