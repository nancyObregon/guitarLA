import Layout from "../components/layout"

export default function Tienda({guitarras}) {
    console.log(guitarras)
    return (
        <Layout
            title={"Tienda virtual"}
            description="Tienda Virtual, guitarLA"
        >
            <main className="contenedor">
                <h1 className="heading">
                    Nuestra Colección
                </h1>
            </main>
        </Layout>
    )
}

export async function getStaticProps(){
    const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}