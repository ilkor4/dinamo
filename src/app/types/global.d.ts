declare module '*.scss'{
    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.woff';
declare module '*.woff2';
declare module '*.mp4';
declare module '*.svg' {
    import type React from 'react'

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}
