import {
  createRootRoute,
  HeadContent,
  Scripts,
  Outlet,
} from '@tanstack/react-router';
import * as React from 'react';
import appCss from '~/app.css?url';

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'New React App',
      },
      {
        name: 'description',
        content: 'Welcome to your new app!',
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
