/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../components/section-heading';
import TeamMember from '../components/cards/team-member';

import avatar1 from '/public/assets/images/team/member1.png';
import avatar2 from '/public/assets/images/team/member2.png';
import avatar3 from '/public/assets/images/team/member3.png';
import avatar4 from '/public/assets/images/team/member4.png';
import arrowRight from '/public/assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: '/assets/images/team/member1.png',
    name: 'Dzikri Syairozi',
    designation: 'Product Designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 2,
    avatar: '/assets/images/team/member2.png',
    name: 'Dzikri Syairozi',
    designation: 'Lead developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'dribble',
        link: 'https://www.instagram.com/dzikrisyairozi/',
      },
    ],
  },
  {
    id: 3,
    avatar: '/assets/images/team/member3.png',
    name: 'Dzikri Syairozi',
    designation: 'Experience Designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'github',
        link: 'https://github.com/dikiogres',
      },
    ],
  },
  {
    id: 4,
    avatar: '/assets/images/team/member4.png',
    name: 'Dzikri Syairozi',
    designation: 'User interface designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'github',
        link: 'https://github.com/dikiogres',
      },
      {
        name: 'dribbble',
        link: 'https://www.instagram.com/dzikrisyairozi/',
      },
    ],
  },
  {
    id: 5,
    avatar: '/assets/images/team/member1.png',
    name: 'Dzikri Syairozi',
    designation: 'Front End Developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'github',
        link: 'https://github.com/dikiogres',
      },
      {
        name: 'dribbble',
        link: 'https://www.instagram.com/dzikrisyairozi/',
      },
    ],
  },
  {
    id: 6,
    avatar: '/assets/images/team/member2.png',
    name: 'Dzikri Syairozi',
    designation: 'Back End Developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'github',
        link: 'https://github.com/dikiogres',
      },
      {
        name: 'dribbble',
        link: 'https://www.instagram.com/dzikrisyairozi/',
      },
    ],
  },
  {
    id: 7,
    avatar: '/assets/images/team/member3.png',
    name: 'Dzikri Syairozi',
    designation: 'DevOps',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'github',
        link: 'https://github.com/dikiogres',
      },
      {
        name: 'dribbble',
        link: 'https://www.instagram.com/dzikrisyairozi/',
      },
    ],
  },
  {
    id: 8,
    avatar: '/assets/images/team/member4.png',
    name: 'Dzikri Syairozi',
    designation: 'Research Engineer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'https://twitter.com/DikiOgre',
      },
      {
        name: 'github',
        link: 'https://github.com/dikiogres',
      },
      {
        name: 'dribbble',
        link: 'https://www.instagram.com/dzikrisyairozi/',
      },
    ],
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });


  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Team Buatindong"
          description="Bangun tempat kerja yang luar biasa dan kembangkan usaha Anda melalui website lengkap dengan konten luar biasa bersama kami."
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
