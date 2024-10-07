import { createFileRoute } from '@tanstack/react-router';
import { HelloWorld } from '~/components/HelloWorld';

export const Route = createFileRoute('/')({
  component: Home,
});

export default function Home() {
  return <HelloWorld />;
}
