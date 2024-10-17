import { ToggleGroupItem } from '@libs/shadcn-ui-web';

interface SearchCategoryProps {
  label: string;
  emoji: string;
}

export function SearchCategory({ label, emoji }: SearchCategoryProps) {
  return (
    <ToggleGroupItem
      value={label}
      className="rounded font-mono bg-violet-200 hover:bg-violet-300 dark:hover:bg-violet-300 dark:hover:text-inherit data-[state=on]:bg-violet-400 data-[state=on]:text-inherit dark:data-[state=on]:bg-violet-400 dark:data-[state=on]:text-inherit"
    >
      {emoji} {label}
    </ToggleGroupItem>
  );
}
