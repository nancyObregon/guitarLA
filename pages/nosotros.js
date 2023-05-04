import Link from "next/link"
import Layout from "../components/layout"

export default function Nosotros() {
    return (
        <Layout
            title={"Nosotros"}
            description="Sobre nosotros, guitarLA"
        >
            <Link href="/">Ir a inicio</Link>
        </Layout>
    )
}
