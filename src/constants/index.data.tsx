import type { InavigationType } from '@ttypes';

export const navigation: InavigationType[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: 'bi bi-menu-button-wide-fill',
    role: ['admin', 'employee'],
  },
  {
    path: '/orders',
    title: 'Orders',
    icon: 'bi bi-collection-fill',
    role: ['admin'],
  },
  {
    path: '/order-canceled',
    title: 'Canceled Orders',
    icon: 'bi bi-x-circle',
    role: ['admin', 'employee'],
  },
  {
    path: '/order-completed',
    title: 'Orders completed',
    icon: 'bi bi-bag-check-fill',
    role: ['admin', 'employee'],
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: 'bi bi-people-fill',
    role: ['admin', 'employee'],
  },
];

export const cardStats = [
  {
    title: 'New orders',
    value: 324,
    icon: 'bi bi-cart-check-fill',
    color: '#9cd4ff'
  },
  {
    title: 'Canceled orders',
    value: 12,
    icon: 'bi bi-x-circle-fill',
    color: '#ff9c9c'
  },
  {
    title: 'Completed orders',
    value: 48,
    icon: 'bi bi-check-circle-fill',
    color: '#9ae85a'
  },
  {
    title: 'Leads',
    value: 4,
    icon: 'bi bi-fire',
    color: '#e0e334'
  },
  {
    title: 'Employees',
    value: 2,
    icon: 'bi bi-person-fill',
    color: '#d5d9de'
  }
]