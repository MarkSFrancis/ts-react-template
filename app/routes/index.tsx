import { createFileRoute } from '@tanstack/react-router';
import { HelloWorld } from '~/components/HelloWorld';

export const Route = createFileRoute('/')({
  component: Home,
  meta: () => {
    return [
      { title: 'New React App' },
      { name: 'description', content: 'Welcome to your new app!' },
    ];
  },
});

export default function Home() {
  return <HelloWorld />;
}
