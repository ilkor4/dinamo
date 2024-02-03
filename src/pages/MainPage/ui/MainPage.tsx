import { TimeLine } from 'components/TimeLine/TimeLine'
import { Lead } from 'components/Lead/Lead'
import { GameBar } from 'widgets/GameBar'
export default function MainPage (): JSX.Element {
    return (
        <div className="main-page">
            <Lead />
            <GameBar />
            <TimeLine />
        </div>
    )
};
