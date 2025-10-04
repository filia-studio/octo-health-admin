export type Address = {
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  latitude: string | number;
  longitude: string | number;
};

export type Route = {
  title: string;
  path: string;
  subRoutes?: Route[];
};

export type Pagination<T> = {
    result: T[];
    count: number;
    page: number;
    pages: number;
}
