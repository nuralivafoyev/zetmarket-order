export interface InavigationType {
  path: string;
  title: string;
  icon: string;
  visible: string;
  count: number | string;
  role?: string[];
}

export type TCardPropsType = {
  title: string;
  icon: string;
  value: number | string;
  color: string;
};
