/** @jsxRuntime classic */
/** @jsx jsx */
const { jsx, Flex } = require ('theme-ui')
// import { jsx, Flex } from 'theme-ui';
import Header from './header/header';
import Footer from './footer/footer';
export default function Layout({ children }:any) {
  return (
    <Flex
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </Flex>
  );
}
