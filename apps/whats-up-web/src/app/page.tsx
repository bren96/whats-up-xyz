import { SearchBar } from '../features/search/components/search-bar';
import { NavBar } from '../features/navigation/components/nav-bar';
import { Separator } from '@libs/shadcn-ui-web';
import { EventList } from '../features/events/components/event-list';
import { SearchCategoryList } from '../features/search/components/search-category-list';

export default function Page() {
  return (
    <div className="h-full flex flex-col bg-violet-50">
      <NavBar />
      <div className="p-4 grow">
        <SearchBar />
        <SearchCategoryList />
        <Separator />
        <EventList />
      </div>
    </div>
  );
}
