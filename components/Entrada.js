import Link  from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {

    const { titulo, resumen, imagen, published_at, id, url } = entrada


  return (
    <article>
        {/* para que funcione la imagen se debe configurar el archivo next.config.js 
        rel="prefetch" priority="true" para corregir errores de ña imagen en consola
        
        */}
        <Image rel="prefetch" priority="true" layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />


        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            {/* El link indiqca que va a la carpeta blog y al archivo url */}
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer Entrada
                </a> 
            </Link>
        </div>
        
    </article>
  )
}

export default Entrada