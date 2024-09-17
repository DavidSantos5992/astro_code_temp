import "./globals.css";

export const metadata = {
  title: "ASTRO CODE - Criação de Sites em Várzea Paulista",
  description:
    "Especializados na criação de sites e sistemas web modernos, responsivos e personalizados. Oferecemos soluções digitais completas para impulsionar seu negócio online, com foco em qualidade e resultados."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASTRO CODE - Criação de Sites em Várzea Paulista</title>

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Página de venda de sites em Várzea Paulista. Criamos sites modernos, responsivos e personalizados para o seu negócio."
        />

        <meta
          name="keywords"
          content="criação de sites Várzea Paulista, desenvolvimento web Várzea Paulista, sites personalizados Várzea Paulista, sites responsivos Várzea Paulista, sistemas empresariais Várzea Paulista, sistemas para restaurantes Várzea Paulista, land pages Várzea Paulista, design de logos Várzea Paulista, branding Várzea Paulista, marketing digital Várzea Paulista, SEO Várzea Paulista, posicionamento digital Várzea Paulista, presença online Várzea Paulista, tecnologia em Várzea Paulista, desenvolvimento de software Várzea Paulista, melhores sites Várzea Paulista, empresa de tecnologia Várzea Paulista, soluções digitais Várzea Paulista, tecnologia empresarial Várzea Paulista, consultoria digital Várzea Paulista, agência de marketing Várzea Paulista"
        />



        <meta name="author" content="ASTRO CODE" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ASTRO CODE - Criação de Sites em Várzea Paulista" />
        <meta
          property="og:description"
          content="Criamos sites modernos e responsivos para impulsionar o seu negócio em Várzea Paulista."
        />
        <meta property="og:image" content="images/logo.svg" />
        <meta property="og:url" content="https://www.astrocode.com.br/" />
        <meta property="og:type" content="https://www.astrocode.com.br/" />

        {/* Favicon */}
        <link rel="icon" href="/images/android-chrome-192x192.png" type="image/x-icon" />


      </head>
      <body>{children}</body>
    </html>
  );
}
