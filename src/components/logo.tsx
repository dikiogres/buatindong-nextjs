/** @jsxRuntime classic */
/** @jsx jsx */
const { jsx } = require ('theme-ui');
// import { jsx } from 'theme-ui';
import Image from 'next/image';
import { Link } from '../components/link';
import LogoSvg from '/public/assets/images/logo.png';

export default function Logo({ isSticky, footer, ...props }:any) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src='/assets/images/logo.png' alt="logo" width="182" height="37"/>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
