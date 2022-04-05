import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {

    console.log(curso)

    const { Titulo, Contenido, Imagen} = curso
    return (
        <section className={styles.curso}>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{Titulo}</h2>
                    <p className={styles.texto}>{Contenido}</p>

                    <a className={styles.enlace} href="#">Mas Información</a>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, 
                        rgb(0 0 0 /.65), 
                        rgb(0 0 0 / .7)), 
                        url(${Imagen.url});
                    background-size: cover;
                    background-position: 50% ;

                }
                
            
            `}</style>


        </section>
    )
}

export default Curso
