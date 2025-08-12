export type BitFeverConfig = {
  style?: Record<string, string | number>;
  title?: string;
  scrolling?: string;
  id?: string;
  [key: string]: string | number | Record<string, string | number> | undefined;
};

export interface BitFeverProps {
  style?: Record<string, string | number>;
  [key: string]: string | number | Record<string, string | number> | undefined;
}
