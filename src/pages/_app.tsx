import { useEffect, ReactNode } from 'react';
import React from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';

interface Props {
  Component?: React.ElementType;
  pageProps?: ReactNode
}

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}
