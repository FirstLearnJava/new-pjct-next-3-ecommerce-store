import { Fragment, ReactNode } from 'react';
import './globals.css';
import styles from './children.module.scss';

export const metadata = {
  title: 'Niemand',
  description: 'Your place for selfmade fashion and clothes',
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* {<header>This should be above!</header>} */}
        {children}
      </body>
    </html>
  );
}
