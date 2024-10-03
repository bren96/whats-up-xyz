import { Input } from '@libs/shadcn-ui-web';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8"
      />
    </div>
  );
}