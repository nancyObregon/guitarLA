import Head from "next/head";

export default function Layout({children, title = '', description = ''}) {
    return (
        <>
            <Head>
                <title>{`GuitarLa - ${title}`}</title>
                <meta  name="description" content={description}/>
            </Head>
            {children}
        </>
    )
}
