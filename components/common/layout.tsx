import Head from "next/head";
import { METADATA } from "../../constants";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={METADATA.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={METADATA.title} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:url" content={METADATA.siteUrl} />
        <meta property="og:site_name" content={METADATA.title} />
        <meta property="og:image" content={METADATA.imgUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="keywords" content="UI/UX design, Machine Learning, Artificial Intelligence, AI, ML, Python bots, web solutions, robots, robotics, innovation, blockchain, awards, Notre Dame College, Olympiads, portfolio" />
        <meta name="author" content="Md Hamidur Rahman Khan" />
        <meta name="twitter:title" content={METADATA.title} />
        <meta name="twitter:description" content={METADATA.description} />
        <meta name="twitter:image" content={METADATA.imgUrl} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href={METADATA.siteUrl} />
      </Head>
      {children}
    </>
  );
};

export default Layout;


