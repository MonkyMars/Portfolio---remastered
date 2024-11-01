import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentProps } from 'next/document'

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to my professional portfolio. I'm a Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my projects and experience in software development." />
        <meta name="keywords" content="full stack developer, web developer, software engineer, React developer, Node.js, JavaScript, TypeScript, portfolio" />
        <meta name="author" content="Levi Noppers" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Levi Noppers | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in creating modern, responsive web applications with React, Node.js, and cutting-edge technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levinoppers-portfolio.vercel.app" />
        <meta property="og:image" content="https://levinoppers-portfolio.vercel.app/code.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Levi Noppers | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer crafting exceptional web experiences. View my portfolio to see my latest projects and technical expertise." />
        <meta name="twitter:image" content="https://levinoppers-portfolio.vercel.app/code.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/code.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Color theme meta tag */}
        <meta name="theme-color" content="#111" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://levinoppers-portfolio.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 