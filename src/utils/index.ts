import type { InavigationType } from '@/types';

export const checkRole = (navigation: InavigationType[], role: string) => {
  return navigation.filter((item: any) => item.role?.includes(role));
};
