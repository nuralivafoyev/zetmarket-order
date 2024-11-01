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

export const chartdb =[
    {
      quarter: "Q1'18",
      iphone: 140,
      mac: 16,
      ipad: 14,
      wearables: 12,
      services: 20,
    },
    {
      quarter: "Q2'18",
      iphone: 124,
      mac: 20,
      ipad: 14,
      wearables: 12,
      services: 30,
    },
    {
      quarter: "Q3'18",
      iphone: 112,
      mac: 20,
      ipad: 18,
      wearables: 14,
      services: 36,
    },
    {
      quarter: "Q4'18",
      iphone: 118,
      mac: 24,
      ipad: 14,
      wearables: 14,
      services: 36,
    },
];
