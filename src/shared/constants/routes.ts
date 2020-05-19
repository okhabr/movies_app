export const ROUTES = {
  HOME: '/',
  SEARCH: {
    path: '/search/:queryType?',
    route: (queryType: string, value: string = '') => {
      // types keyWord, filter, top
      if (queryType === 'keyword') {
        return `/search/${queryType}-${value}`;
      }
      if (queryType === 'top'){
        return `/search/${queryType}`;
      } 
      return `/search/${queryType}`;
    }
  },
  MOVIE: {
    path: '/movie/:id',
    route: (id: string) => `/movie/${id}`,
  },
}
