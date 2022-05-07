import NewLink from "./link";
import { useQuery, gql } from "@apollo/client";
import { Key } from "react";

const LINK_QUERY = gql`
{
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;


export default function LinkList() {
    const { loading, error, data } = useQuery(LINK_QUERY);

    return (
        <div>
            {data && (
                <>
                    {data.feed.links.map((link: { id: Key | null | undefined; }) => (
                        <NewLink key={link.id} link={link} />
                    ))}
                </>
            )}
            {/* {
                loading ? (
                    <h3>Loading...</h3>
                ) : (
                    error ? (
                        <h2>{error.message}</h2>
                    ) : (
                        data.feed.links.length > 0 ? (
                            data.links.map((link: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <NewLink key={link.id} link={link} />
                                    </div>
                                )
                            })
                        ) : (
                            <h2>No saved articles found</h2>
                        )
                    )
                )
            } */}
            {/* {linksToRender.map((link) => (
                <NewLink key={link.id} link={link} />
            ))}; */}
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            links: []
        }
    }
}