import Image from 'next/image'
import facebook from '/public/assets/images/icons/facebook.png'
import twitter from '/public/assets/images/icons/twitter.png';
import github from '/public/assets/images/icons/github.png';
import dribbble from '/public/assets/images/icons/dribbble.png';

export const menuItems = [
  {
    id: 2,
    title: 'Tentang Kami',
    items: [
      {
        path: '#!',
        label: 'Pusat Bantuan',
      },
      {
        path: '#!',
        label: 'Bantuan Pelanggan',
      },
      {
        path: '#!',
        label: 'Tentang Kami',
      },
      {
        path: '#!',
        label: 'Hak Cipta',
      },
      {
        path: '#!',
        label: 'Kampanye Populer',
      },
    ],
  },
  {
    id: 3,
    title: 'Informasi',
    items: [
      {
        path: '#!',
        label: 'Kebijakan Pengembalian',
      },
      {
        path: '#!',
        label: 'Kebijakan Pribadi',
      },
      {
        path: '#!',
        label: 'Syarat & Ketentuan',
      },
      {
        path: '#!',
        label: 'Peta Situs',
      },
      {
        path: '#!',
        label: 'Jam Layanan',
      },
    ],
  },
  {
    id: 4,
    title: 'Akun Kami',
    items: [
      {
        path: '#!',
        label: 'Pertanyaan pers',
      },
      {
        path: '#!',
        label: 'Media Sosial',
      },
      {
        path: '#!',
        label: 'Direktori',
      },
      {
        path: '#!',
        label: 'Gambar & B-roll',
      },
      {
        path: '#!',
        label: 'Perizinan',
      },
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: '#!',
        icon: "/assets/images/icons/facebook.png",
        label: 'Facebook',
      },
      {
        path: '#!',
        icon: "/assets/images/icons/twitter.png",
        label: 'Twitter',
      },
      {
        path: '#!',
        icon: "/assets/images/icons/github.png",
        label: 'Github',
      },
      {
        path: '#!',
        icon: "/assets/images/icons/dribbble.png",
        label: 'Dribbble',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Beranda',
  },
  {
    path: '#!',
    label: 'Periklanan',
  },
  {
    path: '#!',
    label: 'Bantuan',
  },
  {
    path: '#!',
    label: 'Pemasaran',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
