import type { InavigationType } from '@ttypes';

export const navigation: InavigationType[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: 'bi bi-menu-button-wide-fill',
    visible: 'hidden',
    count: 0,
    role: ['admin', 'employee'],
  },
  {
    path: '/orders',
    title: 'New orders',
    icon: 'bi bi-collection-fill',
    visible: 'visible',
    count: 324,
    role: ['admin'],
  },
  {
    path: '/order-canceled',
    title: 'Canceled Orders',
    icon: 'bi bi-x-circle',
    visible: 'hidden',
    count: 12,
    role: ['admin', 'employee'],
  },
  {
    path: '/order-completed',
    title: 'Orders completed',
    icon: 'bi bi-bag-check-fill',
    visible: 'hidden',
    count: 48,
    role: ['admin', 'employee'],
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: 'bi bi-people-fill',
    visible: 'hidden',
    count: 0,
    role: ['admin', 'employee'],
  },
];

export const cardStats = [
  {
    title: 'New orders',
    value: 324,
    icon: 'bi bi-cart-check-fill',
    color: '#9cd4ff',
  },
  {
    title: 'Canceled orders',
    value: 12,
    icon: 'bi bi-x-circle-fill',
    color: '#ff9c9c',
  },
  {
    title: 'Completed orders',
    value: 48,
    icon: 'bi bi-check-circle-fill',
    color: '#9ae85a',
  },
  {
    title: 'Leads',
    value: 4,
    icon: 'bi bi-fire',
    color: '#e0e334',
  },
  {
    title: 'Employees',
    value: 2,
    icon: 'bi bi-person-fill',
    color: '#d5d9de',
  },
];

export const dataChart = [
  {
    name: 'Yanvar',
    iPhone: 4000,
    android: 2400,
    amt: 2400,
  },
  {
    name: 'Fevral',
    iPhone: 3000,
    android: 1398,
    amt: 2210,
  },
  {
    name: 'Mart',
    iPhone: 2000,
    android: 800,
    amt: 2290,
  },
  {
    name: 'Aprel',
    iPhone: 2780,
    android: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    iPhone: 1890,
    android: 4000,
    amt: 2181,
  },
  {
    name: 'Iyun',
    iPhone: 2390,
    android: 3800,
    amt: 2500,
  },
  {
    name: 'Iyul',
    iPhone: 3490,
    android: 3300,
    amt: 2100,
  },
  {
    name: 'Avgust',
    iPhone: 3490,
    android: 3100,
    amt: 2100,
  },
  {
    name: 'Sentabr',
    iPhone: 3490,
    android: 4000,
    amt: 2100,
  },
  {
    name: 'Oktabr',
    iPhone: 3490,
    android: 3300,
    amt: 2100,
  },
  {
    name: 'Noyabr',
    iPhone: 0,
    android: 0,
    amt: 2100,
  },
  {
    name: 'Dekabr',
    iPhone: 0,
    android: 0,
    amt: 2100,
  },
];

export const options = [
  {
    value: 'sun | yak',
    label: 'Yakshanba',
  },
  {
    value: 'mon',
    label: 'Dushanba',
  },
  {
    value: 'tue',
    label: 'Seshanba',
  },
  {
    value: 'wed',
    label: 'Chorshanba',
  },
  {
    value: 'thu',
    label: 'Payshanba',
  },
  {
    value: 'fri',
    label: 'Juma',
  },
  {
    value: 'sat',
    label: 'Shanba',
  },
];

export interface DataItem {
  id: number | string;
  name: string;
  age: number;
  phone: string;
  country: string;
  product: string;
  quantity: number;
  ttprice: number;
  payment: string;
  status: string;
  statusBg: string;
}

export const sampleData: DataItem[] = [
  {
    id: 1,
    name: 'Donald Trump',
    phone: '+7 999 123 45 67',
    age: 78,
    country: 'USA',
    product: 'iPhone 14 Pro Max',
    quantity: 5,
    ttprice: 12000000,
    payment: 'Credit Card',
    status: 'Completed',
    statusBg: 'green',
  },
  {
    id: 2,
    name: 'Vladimir Putin',
    phone: '+7 888 987 65 43',
    age: 72,
    country: 'Russia',
    product: 'iPhone 13 Pro',
    quantity: 3,
    ttprice: 9000000,
    payment: 'Credit Card',
    status: 'Canceled',
    statusBg: 'red',
  },
  {
    id: 3,
    name: 'Xusniddin Atoullayev',
    phone: '+998 90 675 69 39',
    age: 23,
    country: 'Andijon',
    product: 'iPhone 12 Pro Max',
    quantity: 1,
    ttprice: 8000000,
    payment: 'PayPal',
    status: 'Completed',
    statusBg: 'green',
  },
  {
    id: 4,
    name: 'Anora Toshova',
    phone: '+998 90 213 45 67',
    age: 16,
    country: 'Samarqand',
    product: 'iPhone 11 Pro Max',
    quantity: 2,
    ttprice: 7000000,
    payment: 'PayPal',
    status: 'Canceled',
    statusBg: 'red',
  },
  {
    id: 5,
    name: 'Begzodjon Nematov',
    phone: '+998 90 567 89 01',
    age: 27,
    country: 'Xorazim',
    product: 'iPhone 12 Pro',
    quantity: 3,
    ttprice: 7000000,
    payment: 'Credit Card',
    status: 'Completed',
    statusBg: 'green',
  },
  {
    id: 6,
    name: 'Rashid Toshov',
    phone: '+998 90 321 65 43',
    age: 29,
    country: "Qoraqalpog'iston",
    product: 'iPhone 11 Pro',
    quantity: 2,
    ttprice: 6000000,
    payment: 'Credit Card',
    status: 'Waiting',
    statusBg: 'silver',
  },
  {
    id: 7,
    name: 'Timur Khatamov',
    phone: '+998 90 456 78 90',
    age: 32,
    country: "Qoraqalpog'iston",
    product: 'iPhone 12',
    quantity: 1,
    ttprice: 6000000,
    payment: 'Credit Card',
    status: 'Completed',
    statusBg: 'green',
  },
  {
    id: 8,
    name: 'Mukhriddin khodiyev',
    phone: '+998 90 123 45 67',
    age: 25,
    country: 'Tashkent',
    product: 'iPhone 16 Pro Max',
    quantity: 4,
    ttprice: 10000000,
    payment: 'Credit Card',
    status: 'Waiting',
    statusBg: 'silver',
  },
  {
    id: 9,
    name: 'Nurali Vafoyev',
    phone: '+998 90 804 57 75',
    age: 19,
    country: 'Navoi',
    product: 'iPhone 20 Pro Max',
    quantity: 3,
    ttprice: 8000000,
    payment: 'Credit Card',
    status: 'Completed',
    statusBg: 'green',
  },
];
