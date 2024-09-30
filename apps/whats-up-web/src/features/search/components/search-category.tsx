import { Button, ButtonProps } from '@libs/shadcn-ui-web';

type SearchCategoryProps = ButtonProps;

export function SearchCategory(props: SearchCategoryProps) {
  return <Button {...props} />;
}
