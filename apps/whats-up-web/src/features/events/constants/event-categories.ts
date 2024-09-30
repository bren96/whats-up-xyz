import { Category } from '../types/category';

export const EVENT_CATEGORIES: Category[] = [
  {
    label: 'art',
    emoji: '🎨',
  },
  {
    label: 'community',
    emoji: '📢',
  },
  {
    label: 'dance',
    emoji: '💃',
  },
  {
    label: 'drinks',
    emoji: '🍺',
  },
  {
    label: 'food',
    emoji: '🍌',
  },
  {
    label: 'music',
    emoji: '🎵',
  },
  {
    label: 'workshops',
    emoji: '🛠️',
  },
] as const;
