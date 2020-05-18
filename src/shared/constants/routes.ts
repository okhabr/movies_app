export const ROUTES = {
  HOME: '/',
  SEARCH: {
    path: '/search/:id?',
    route: (id: string = '') => `/search/${id}`,
  },
  MOVIE: {
    path: '/movie/:id',
    route: (id: string) => `/movie/${id}`,
  },
}
