import { useProtocol } from 'app/providers/ProtocolProvider/lib/useProtocol'
import { GameBar } from 'widgets/GameBar'
import { GameProtocol } from 'widgets/GameProtocol/ui/GameProtocol'

export default function AboutPage (): JSX.Element {
    const { protocolState, setProtocolState } = useProtocol()

    return (
        <div className="about-page">
            <GameBar
                isVertical={true}
                protocolState = {protocolState}
                setProtocolState = {setProtocolState}
            />
            <GameProtocol
                protocolState = {protocolState}
                setProtocolState = {setProtocolState}
            />
        </div>
    )
};
