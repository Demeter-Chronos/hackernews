import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate } from '../utils';

export default function NewLink(props: { link: any; }) {
    const { link } = props;
    return (
        <div className="flex mt2 items-start">
            <div className="flex items-center">
                <span className="gray">1</span>
                <div
                    className="ml1 gray f11"
                    style={{ cursor: 'pointer' }}
                >
                    ▲
                </div>
            </div>
            <div className="ml1">
                <div>
                    {link.description} ({link.url})
                </div>
                <div className="f6 lh-copy gray">
                    link votes length votes | by 
                    {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
                    {timeDifferenceForDate(link.createdAt)}
                </div>
            </div>
        </div>
    );
};