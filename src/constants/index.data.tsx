import type { TnavigationType } from '@ttypes';

export const navigation: TnavigationType[] = [
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
