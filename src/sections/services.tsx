/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Image from 'next/image';
import { rgba } from 'polished';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import icon1 from '/public/assets/images/icons/service1.png';
import icon2 from '/public/assets/images/icons/service2.png';
import icon3 from '/public/assets/images/icons/service3.png';


const data = [
  {
    id: 1,
    icon: '/assets/images/icons/service1.png',
    title: 'E-Commerce',
    description: `Situs web yang dapat digunakan untuk jual beli secara online. Melalui situs web e-commerce, kamu sebagai pebisnis dapat memproses pesanan, menerima pembayaran, mengelola pengiriman dan logistik, serta menyediakan layanan dukungan pelanggan.`,
  },
  {
    id: 3,
    icon: '/assets/images/icons/service2.png',
    title: 'Pemerintahan',
    description: `Situs website yang diperuntukan untuk penyebaran informasi dan pelayanan pemerintah kepada masyarakat. Bisa untuk sistem pemerintahan dari skala desa hingga nasional.`,
  },
  {
    id: 4,
    icon: '/assets/images/icons/service3.png',
    title: 'Portofolio',
    description: `Portofolio digital yang dapat diakses melalui internet dengan tujuan untuk menunjukan karya dan bakat Anda. Pada website yang dibuat, Anda bisa menunjukkan bakat, keahlian dan pengalaman yang telah Anda miliki.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Bangun websitemu dengan layanan kami!"
          description="Punya usaha? Untuk tempat kerja? Branding diri? kami bisa semuanya!"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item}/>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
