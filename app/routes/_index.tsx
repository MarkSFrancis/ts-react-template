import type { MetaFunction } from '@remix-run/node';
import { HelloWorld } from '~/components/HelloWorld';

export const meta: MetaFunction = () => {
  return [
    { title: 'New React App' },
    { name: 'description', content: 'Welcome to your new app!' },
  ];
};

export default function Index() {
  return <HelloWorld />;
}
