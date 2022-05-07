import NewLink from "./link";

export default function LinkList() {
    let linksToRender: {id: string, description: string, url: string}[] = [
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
            {linksToRender.map((link: {id: string, description: string, url: string}) => {
                <NewLink key={link.id} link={link} />
            })}
        </div>
    );
};