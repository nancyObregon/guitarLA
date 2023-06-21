import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import styles from '../styles/grid.module.css'

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
// export async function getServerSideProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json()

//     return {
//         props: {
//             guitarras
//         }
//     }
// }