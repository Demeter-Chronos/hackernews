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

  return (
    <div className="ph3 pv1 background-gray">
      <LinkList />
    </div>
  );
}


export default Home
