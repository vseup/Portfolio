import type { ProjectData } from '@app/types/project-data.type';

export const PROJECTS: ProjectData[] = [
  {
    area: 'Fullstack Development',
    period: '2026',
    title: 'Cathouse',
    summary: 'Lightweight donation platform that raised more than 1,000 EUR for an animal shelter.',
    tags: ['SvelteKit', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
    toneClass: 'tone-sun',
    detailsRoute: '/projects/cathouse',
    previewImage: {
      src: '/images/projects/cathouse/cathouse-preview.jpg',
      alt: 'Cathouse project preview showing the charity web app interface.',
      width: 1280,
      height: 786,
    },
  },
  {
    area: 'Mobile App Development',
    period: '2023',
    title: 'Playmake',
    summary:
      'Platform that allows to build interactive board-game-like games without any programming experience.',
    tags: ['Flutter', 'OpenCV', 'UX Research', 'Interactive Prototyping'],
    toneClass: 'tone-pink',
    detailsRoute: '/projects/playmake',
    previewImage: {
      src: '/images/projects/playmake/playmake-preview.jpg',
      alt: 'Playmake project preview showing the board-game-like setup.',
      width: 1280,
      height: 899,
    },
  },
  {
    area: 'Embedded Development',
    period: '2022/23',
    title: 'Braillebuddy',
    summary:
      "Tool that supports children's self-directed exploration of Braille. Published at the ACM CHI Conference.",
    tags: ['Arduino C/C++', 'Accessibility', 'UX Research', 'Interactive Prototyping'],
    toneClass: 'tone-sky',
    detailsRoute: '/projects/braillebuddy',
    previewImage: {
      src: '/images/projects/braillebuddy/braillebuddy-preview.jpg',
      alt: 'Braillebuddy project preview showing the game station and braille letter cards.',
      width: 1586,
      height: 992,
    },
  },
  {
    area: 'Interaction Design',
    period: '2017/18',
    title: 'Magic Glove',
    summary:
      'Concept of a smart glove that integrates the human intuitively into the network of smart kitchen devices. Siemens Home Appliances Design Award (2nd place).',
    tags: ['Arduino C/C++', 'UX Research', 'Interactive Prototyping'],
    toneClass: 'tone-violet',
    detailsRoute: '/projects/magic-glove',
    previewImage: {
      src: '/images/projects/magic-glove/magic-glove-preview.jpg',
      alt: 'Smart gesture-control glove in the foreground and signal markers on connected appliances in the kitchen background.',
      width: 1280,
      height: 856,
    },
  },
  {
    area: 'Service Design',
    period: '2017',
    title: 'Cura',
    summary: 'Concept of a conversional agent that streamlines the early stages of home care.',
    tags: ['UX Design', 'UX Research', 'Prototyping'],
    toneClass: 'tone-mint',
    detailsRoute: '/projects/cura',
    previewImage: {
      src: '/images/projects/cura/cura-preview.jpg',
      alt: 'Smartphone screen showing the Cura care-assistant chat interface.',
      width: 1280,
      height: 842,
    },
  },
];

const braillebuddyProject = PROJECTS.find(
  (project) => project.detailsRoute === '/projects/braillebuddy',
);
const cathouseProject = PROJECTS.find((project) => project.detailsRoute === '/projects/cathouse');
const playmakeProject = PROJECTS.find((project) => project.detailsRoute === '/projects/playmake');
const magicGloveProject = PROJECTS.find(
  (project) => project.detailsRoute === '/projects/magic-glove',
);
const curaProject = PROJECTS.find((project) => project.detailsRoute === '/projects/cura');

export const CATHOUSE_PROJECT = cathouseProject!;
export const BRAILLEBUDDY_PROJECT = braillebuddyProject!;
export const PLAYMAKE_PROJECT = playmakeProject!;
export const MAGIC_GLOVE_PROJECT = magicGloveProject!;
export const CURA_PROJECT = curaProject!;
