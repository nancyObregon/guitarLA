import { Html,Head,  Main, NextScript } from "next/document"

export default function Document(){
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}