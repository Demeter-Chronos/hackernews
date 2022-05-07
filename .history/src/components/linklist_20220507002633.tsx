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
    const { loading, error, data } = useQuery(LINK_QUERY);

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
            {
                loading ? (
                    <h2>Loading</h2>
                ) : (
                    error ? (
                        <h2>{error.message}</h2>
                    ) : (
                        data.links.length > 0 ? (
                            data.links.map((link: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <NewLink key={link.id} link />
                                        <p>{article['summary']}</p>
                                    </div>
                                )
                            })
                        ) : (
                            <h2>No saved articles found</h2>
                        )
                    )
                )
            }
            {/* {linksToRender.map((link) => (
                <NewLink key={link.id} link={link} />
            ))}; */}
        </div>
    );
};