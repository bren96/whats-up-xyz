'use server';

import { ToggleGroup } from '@libs/shadcn-ui-web';
import { SearchCategory } from './search-category';
import { prisma } from '@libs/whats-up-prisma';

export async function SearchCategoryList() {
  const tags = await prisma.event_tag.findMany();
  return (
    <ToggleGroup type="multiple" className="p-4 gap-x-2 gap-y-2 flex-wrap">
      {tags.map(({ id, label, emoji }) => (
        <>
          {label && emoji && (
            <SearchCategory key={id} label={label} emoji={emoji} />
          )}
        </>
      ))}
    </ToggleGroup>
  );
}
