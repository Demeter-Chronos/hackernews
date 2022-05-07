import type { NextPage } from 'next';
import {
  useQuery,
  gql,
} from '@apollo/client';
import LinkList from '../src/components/linklist';

const LINK_QUERY = gql`
query getLink{
    links{
        description
        url
        postedBy {
          username
        }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(LINK_QUERY);

  return (
    <div className="ph3 pv1 background-gray">
      <LinkList lin />
    </div>
  );
}


export default Home
