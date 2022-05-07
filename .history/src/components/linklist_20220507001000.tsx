import NewLink from "./link";
import { useQuery, gql } from "@apollo/client";

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
`


export default function LinkList() {
    const {data} = useQuery(LINK_QUERY);

    const linksToRender = [
        {
            id: 'link-id-1',
            description:
                'Prisma gives you a powerful...',
            url: 'https://prisma.io'
        },
        {
            id: 'link-id-2',
            description:
                'The best GraphQl client',
            url: 'https://www.apollographql.com/docs'
        }
    ];

    return (
        <div>
            {data && (
                
            )}
            {linksToRender.map((link) => (
                <NewLink key={link.id} link={link} />
            ))};
        </div>
    );
};