import { SearchBar } from '../features/search/components/search-bar';
import { SearchCategoryList } from '../features/search/components/search-category-list';
import { NavBar } from '../features/navigation/components/nav-bar';
import { Separator } from '@libs/shadcn-ui-web';
import { EventList } from '../features/events/components/event-list';

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      <NavBar />
      <div className="p-2 grow bg-indigo-50">
        <SearchBar />
        <SearchCategoryList />
        <Separator />
        <EventList />
      </div>
    </div>
  );
}
