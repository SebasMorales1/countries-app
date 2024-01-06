import { useQuery, gql } from '@apollo/client'

export function useFetchApi() {
  const GET_ALL_COUNTRIES = gql`
    query getAllCountries {
      countries {
        code,
        name
      }
    }
  `

  const { error, loading, data } = useQuery(GET_ALL_COUNTRIES)

  if (error) console.error(error.message)

  return { error, loading, data }
}