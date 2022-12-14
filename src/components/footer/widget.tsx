/** @jsxRuntime classic */
/** @jsx jsx */
const { jsx, Box, Heading, Image } = require ('theme-ui')
// import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from '../link';
import { rgba } from 'polished';
import { Key } from 'react';

const Widget = ({ title, items }:any) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }:any, i: Key | null | undefined) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <Link path={path} key={i} label={label} variant="footer" />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Widget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        color: rgba('#02073E', 0.8),
      },
    },
  },
};
