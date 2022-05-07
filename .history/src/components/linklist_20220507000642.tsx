import NewLink from "./link";
import { useQuery,  } from "@apollo/client";


export default function LinkList() {
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
            {linksToRender.map((link) => (
                <NewLink key={link.id} link={link} />
            ))};
        </div>
    );
};