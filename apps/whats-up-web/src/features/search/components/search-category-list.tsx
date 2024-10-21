import { ToggleGroup } from '@libs/shadcn-ui-web';
import { SearchCategory } from './search-category';
import { ToggleGroupMultipleProps } from '@radix-ui/react-toggle-group';
import { EventTag } from '../../events/types/event-tag';

interface SearchCategoryListProps
  extends Omit<ToggleGroupMultipleProps, 'type'> {
  tags: EventTag[];
}

export function SearchCategoryList({
  tags,
  ...props
}: SearchCategoryListProps) {
  return (
    <ToggleGroup
      type="multiple"
      className="p-4 gap-x-2 gap-y-2 flex-wrap"
      {...props}
    >
      {tags.map((tag) => (
        <>
          {tag.label && tag.emoji && <SearchCategory key={tag.id} {...tag} />}
        </>
      ))}
    </ToggleGroup>
  );
}
