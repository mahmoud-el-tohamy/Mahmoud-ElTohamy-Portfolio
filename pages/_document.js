import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const locale = this.props.__NEXT_DATA__?.locale || 'en';
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
      <Html lang={locale} dir={dir}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
