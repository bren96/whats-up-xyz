import { EventCategory } from '../types/event-category';

export interface Event {
  id: string;
  title: string;
  description: string;
  organization: string;
  link: string;
  startDateTime: string;
  endDateTime: string;
  address: string;
  categories: EventCategory[];
}
