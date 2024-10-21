import { ToggleGroupItem } from '@libs/shadcn-ui-web';
import { EventTag } from '../../events/types/event-tag';

type SearchCategoryProps = EventTag;

export function SearchCategory({ id, label, emoji }: SearchCategoryProps) {
  return (
    <ToggleGroupItem
      value={`${id}`}
      className="rounded font-mono bg-violet-200 hover:bg-violet-300 dark:hover:bg-violet-300 dark:hover:text-inherit data-[state=on]:bg-violet-400 data-[state=on]:text-inherit dark:data-[state=on]:bg-violet-400 dark:data-[state=on]:text-inherit"
    >
      {emoji} {label}
    </ToggleGroupItem>
  );
}
