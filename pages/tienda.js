import Layout from "../components/layout"
import Guitarra from "../components/guitarra"

export default function Tienda({guitarras}) {
    return (
        <Layout
            title={"Tienda virtual"}
            description="Tienda Virtual, guitarLA"
        >
            <main className="contenedor">
                <h1 className="heading">
                    Nuestra Colección
                </h1>
                {guitarras.map(guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
            </main>
        </Layout>
    )
}

//Necesita un rebuild para cargar nueva informacion / Informacion Estatica
// export async function getStaticProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json()

//     return {
//         props: {
//             guitarras
//         }
//     }
// }

// Mostrara la informacion en vivo no necesita de un rebuild 
export async function getServerSideProps(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}