import { TLink, TPost } from '../types/types';
import diploma from '../assets/images/education/diploma.jpg';
import diploma2 from '../assets/images/education/diploma2.jpg';
import diploma3 from '../assets/images/education/diploma3.jpg';
import diploma4 from '../assets/images/education/diploma4.jpg';
import diploma5 from '../assets/images/education/diploma5.jpg';
import diploma6 from '../assets/images/education/diploma6.jpg';
import diploma7 from '../assets/images/education/diploma7.jpg';
import diploma8 from '../assets/images/education/diploma8.jpg';
import diploma9 from '../assets/images/education/diploma9.jpg';
import diploma10 from '../assets/images/education/diploma10.jpg';
import diploma11 from '../assets/images/education/diploma11.jpg';
import diploma12 from '../assets/images/education/diploma12.jpg';
import diploma13 from '../assets/images/education/diploma13.jpg';
import diploma14 from '../assets/images/education/diploma14.jpg';

export const Contacts = {
  TELEGRAM: 'https://telegram.me/annavedgun',
  INSTAGRAM: 'https://www.instagram.com/anna.vedgun',
  B17: 'https://www.b17.ru/vedgun_anna',
  PHONE_NUMBER: '+375 (44) 545 93 39',
};

export const Links: TLink[] = [
  {
    title: 'Обо мне',
    path: '/',
  },
  {
    title: 'Контакты',
    path: '/contacts',
  },
  {
    title: 'Блог',
    path: '/blog',
  },
];

export const defaultPosts: TPost[] = [
  {
    id: 1,
    date: '',
    title: 'Загрузка...',
    text: '',
    url: '',
  },
  {
    id: 2,
    date: '',
    title: 'Загрузка...',
    text: '',
    url: '',
  },
  {
    id: 3,
    date: '',
    title: 'Загрузка...',
    text: '',
    url: '',
  },
  {
    id: 4,
    date: '',
    title: 'Загрузка...',
    text: '',
    url: '',
  },
  {
    id: 5,
    date: '',
    title: 'Загрузка...',
    text: '',
    url: '',
  },
];

export const workingWith: string[] = [
  'Навязчивые мысли и действия (обсессивно-компульсивное расстройство)',
  'Тревожные состояния',
  'Самокритика и низкая самооценка',
  'Сложности в межличностных отношениях (с родителями, партнером, друзьями и т.д.)',
  'Кризисные состояния (смерть близкого, развод, увольнение и т.д.)',
  'Личностные кризисы (потеря смысла жизни, самоопределение)',
];

export const notWorkingWith: string[] = [
  'Зависимости (алкогольная, наркотическая и т.д.)',
  'Детский и подростковый возраст (от 0 до 18 лет)',
  'Не работаю с друзьями и знакомыми',
  'Семейная терапия',
];

export const diplomasArray: string[] = [
  diploma,
  diploma2,
  diploma3,
  diploma4,
  diploma5,
  diploma6,
  diploma7,
  diploma8,
  diploma9,
  diploma10,
  diploma11,
  diploma12,
  diploma13,
  diploma14,
];
