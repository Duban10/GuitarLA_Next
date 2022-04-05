 // import { useEffect } from 'react'
import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"


const Blog = ({ entradas }) => {

  
  // useEffect( () => {
  //   const consultarAPI = async () => {
  //     const url =  'http://localhost:1337/blogs'
  //     const respuesta = await fetch(url)
  //     const resultado = await respuesta.json()

  //     console.log(resultado)
  //   }

  //   consultarAPI();

  // }, [])

  return (
    <div>
        <Layout 
        pagina='Blog'      
        >
        
        <main className="contenedor">
         
          <ListadoBlog
            entradas={entradas}
          />

        </main>
            

        </Layout>
        
    </div>
  )
}

// getServerSideProps() ----> Esta funcion se utiliza cuando el contenido es cambiante 
// getStaticProps()  -------> Se utiliza esta funcion cuando el contenido es estatico, es decir, se crea una vez y no cambia a cada instante

export async function getStaticProps(){

  const url =  `${process.env.API_URL}/blogs?_sort=createdAt:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  // console.log(entradas)

  return {

    props: {
      entradas
    }
  }
}

export default Blog