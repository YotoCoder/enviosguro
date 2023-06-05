import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-slate-100 !scroll-smooth' data-theme="light">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
