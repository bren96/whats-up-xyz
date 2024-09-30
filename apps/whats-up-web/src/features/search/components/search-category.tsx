import { ToggleGroupItem } from '@libs/shadcn-ui-web';
import { Category } from '../../events/types/category';

interface SearchCategoryProps {
  category: Category;
}

export function SearchCategory({ category }: SearchCategoryProps) {
  return (
    <ToggleGroupItem
      key={category.label}
      value={category.label}
      className="rounded font-mono bg-violet-200 hover:bg-violet-300 dark:hover:bg-violet-300 dark:hover:text-inherit data-[state=on]:bg-violet-400 data-[state=on]:text-inherit dark:data-[state=on]:bg-violet-400 dark:data-[state=on]:text-inherit"
    >
      {category.emoji} {category.label}
    </ToggleGroupItem>
  );
}
