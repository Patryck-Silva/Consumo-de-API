import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { useFetch } from '../hooks/useFetch'

type Repository = {
  full_name: string
  description: string
}
const Home: React.FC = () => {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    'users/Patryck-Silva/repos'
  )

  return (
    <Container>
      {isFetching && <p style={{ color: 'white' }}>Loading...</p>}
      {repositories?.map(repo => {
        return (
          <div className="repos">
            <h1>{repo.full_name}</h1>
            <p>{repo.description}</p>
          </div>
        )
      })}
    </Container>
  )
}

export default Home
