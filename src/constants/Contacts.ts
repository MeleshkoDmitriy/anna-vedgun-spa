import { TLink, TPost } from '../types/types';

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

export const loadingPosts: TPost[] = [
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
