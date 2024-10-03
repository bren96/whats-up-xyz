import { EVENT_CATEGORIES } from '../constants/event-categories';
export type EventCategory = (typeof EVENT_CATEGORIES)[number]['label'];
