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

}


export default Home
