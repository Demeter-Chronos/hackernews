import NewLink from "./link";
import { useQuery, gql } from "@apollo/client";


export const LINK_QUERY = gql`
{
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
            id
            name
        }
        votes {
            id 
            user {
                id
            }
        }
      }
    }
  }
`;


export default function LinkList() {
    const { loading, error, data } = useQuery(LINK_QUERY);

    return (
        <div>
            {/* {data && (
                <>
                    {data.feed.links.map((link: { id: Key | null | undefined; }) => (
                        <NewLink key={link.id} link={link} />
                    ))}
                </>
            )} */}
            {
                loading ? (
                    <h3>Loading...</h3>
                ) : (
                    error ? (
                        <h2>{error.message}</h2>
                    ) : (
                        data.feed.links.length > 0 ? (
                            data.feed.links.map((link: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <NewLink key={link.id} link={link} index={index} />
                                    </div>
                                )
                            })
                        ) : (
                            <h2>No saved articles found</h2>
                        )
                    )
                )
            }
        </div>
    );
};
