import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default function Pagina404() {
    return (
        <Layout
            title='Pagina no encontrada'
        >
            <p className='error'>Pagina no encontrada</p>
            <Link href={'/'}>
                <a className='error-enlace'>
                    Ir a inicio
                </a>
            </Link>
        </Layout>
    )
}
