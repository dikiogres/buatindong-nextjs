/** @jsxRuntime classic */
/** @jsx jsx */
const { jsx } = require ('theme-ui');
// import { jsx } from 'theme-ui';
import { Link } from '../components/link';
// import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }:any) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg /> */}
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
