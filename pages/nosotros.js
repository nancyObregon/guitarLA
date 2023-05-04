import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title={"Nosotros"}
            description="Sobre nosotros, guitarLA"
        >
            <main className="contenedor">
                <h2 className="heading">
                    Nosotros
                </h2>
                <div className={styles.contenido}>
                    <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros"/>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac 
                            nulla placerat ipsum porta consectetur egestas nec nulla. Nullam finibus 
                            lacinia augue, a bibendum tellus sodales sed. Orci varius natoque penatibus 
                            et magnis dis parturient montes, nascetur ridiculus mus. Fusce a viverra leo. 
                            Proin a dui ipsum. Nulla arcu massa, interdum elementum viverra a, condimentum nec nisi. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac 
                            nulla placerat ipsum porta consectetur egestas nec nulla. Nullam finibus 
                            lacinia augue, a bibendum tellus sodales sed. Orci varius natoque penatibus 
                            et magnis dis parturient montes, nascetur ridiculus mus. Fusce a viverra leo. 
                            Proin a dui ipsum. Nulla arcu massa, interdum elementum viverra a, condimentum nec nisi. 
                            nec iaculis sapien consectetur id. Vivamus tempor lacus id tellus eleifend dignissim. 
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
