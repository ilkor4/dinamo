import { TimeLine } from 'widgets/TimeLine/TimeLine'
import { Lead } from 'widgets/Lead/Lead'
import { GameBar } from 'widgets/GameBar'
import { useProtocol } from 'app/providers/ProtocolProvider'
import { GameProtocol } from 'widgets/GameProtocol/ui/GameProtocol'
export default function MainPage (): JSX.Element {
    const { protocolState, setProtocolState } = useProtocol()
    return (
        <div className="main-page">
            <Lead />
            <GameBar
                isVertical={false}
                protocolState = {protocolState}
                setProtocolState = {setProtocolState}
            />
            <GameProtocol
                protocolState = {protocolState}
                setProtocolState = {setProtocolState}
            />
            <TimeLine />
        </div>
    )
};
