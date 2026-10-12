export const profile = {
  firstName: 'María',
  lastName: 'Puchades',
  role: 'Software Developer',
  specialty: 'Front End',
  location: 'Valencia',
  since: '2022',
  email: '',
  cvUrl: '',
  isAvailable: false,
  avatarSrc: '/avatar.webp',
  ghostWord: 'DEV',
  japanese: {
    pirateKing: 'コードの王に、私はなる',
    role: 'フロントエンド',
    motto: '火コード',
  },
};

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/emepuchades' },
  { label: 'Instagram', url: 'https://instagram.com/puchiideev' },
  { label: 'Twitter', url: 'https://twitter.com/puchiiidev' },
];

export const githubUrl = socialLinks[0].url;

export const fullName = `${profile.firstName} ${profile.lastName}`;
