import React from 'react';

import { GrInstagram } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    label: 'home',
  },
  {
    id: 2,
    url: '/projects',
    label: 'projects',
  },
  {
    id: 3,
    url: '/about',
    label: 'about',
  },
  {
    id: 4,
    url: '/contact',
    label: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    label: 'profile',
  },
];

export const socialIcons = [
  {
    id: 1,
    url: 'https://github.com',
    label: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://instagram.com',
    label: <GrInstagram />,
  },
  {
    id: 3,
    url: 'https://fb.com',
    label: <BsFacebook />,
  },
  {
    id: 4,
    url: 'https://twitter.com',
    label: <FaTwitter />,
  },
];
