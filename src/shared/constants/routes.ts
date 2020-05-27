import { FilterValues } from 'shared/models'

const filterStarterData = {
  excludeAdult: false,
  genres: [],
  year: 0,
}

export const ROUTES = {
  HOME: '/',
  SEARCH: {
    path: '/search',
    route: (
      queryType: string,
      value: string = '',
      filterData: FilterValues = filterStarterData
    ) => {
      if (queryType === 'keyword') {
        return `/search?${queryType}=${value}`
      }
      if (queryType === 'filter') {
        return `/search?${queryType}=true&year=${
          filterData.year
        }&genres=${filterData.genres.join()}&excludeAdult=${
          filterData.excludeAdult
        }`
      }
      return `/search/?${queryType}=true`
    },
  },
  MOVIE: {
    path: '/movie/:id',
    route: (id: string) => `/movie/${id}`,
  },
}
