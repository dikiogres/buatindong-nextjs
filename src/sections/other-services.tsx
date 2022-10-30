/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import icon4 from '/public/assets/images/icons/service4.png';
import icon5 from '/public/assets/images/icons/service5.png';
import icon6 from '/public/assets/images/icons/service6.png';


const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Aplikasi Mobile',
    description: `Pembuatan aplikasi yang bisa berjalan di smartphone anda, baik untuk Android maupun iOS.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Desain UI/UX',
    description: `Tidak bisa desain? jangan khawatir. Biar kami yang khawatir.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Tugas dan Skripsi',
    description: `Selain bikin website kita juga bisa mengerjakan tugas dan skripsi kalian.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Hal lain yang bisa kita lakukan"
          description="Tidak cuma bisa bikin website, kami juga bisa bikin anda bahagia."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
