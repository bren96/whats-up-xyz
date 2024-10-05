import { cn } from '@libs/shadcn-ui-utils';
import { Monofett } from 'next/font/google';

const titleFont = Monofett({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export function NavBarTitle() {
  return (
    <h1 className={cn('text-4xl text-violet-600', titleFont.className)}>
      Whats up!
    </h1>
  );
}
