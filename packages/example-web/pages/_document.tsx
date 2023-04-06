import { BlockingSetInitialColorMode } from '@expo/styleguide';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-screen text-default">
        <BlockingSetInitialColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}