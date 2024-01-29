import { TimeLine } from 'components/TimeLine/TimeLine'
import { Lead } from 'components/Lead/Lead'
export default function MainPage (): JSX.Element {
    return (
        <div className="main">
            <Lead />
            <TimeLine />
        </div>
    )
};
