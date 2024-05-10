import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card} from './Componentes/Card'
import { Lenguajes } from './datos/Lenguajes'

function App() {
  //const [count, setCount] = useState(0)
  const lenguajesList = Lenguajes.map((l) => {
    return <Card key={l.nombre} titulo={l.nombre} descripcion={l.comentario} imagen={l.imagen}/>
  })
  return (
    <div className='app'>
      <h1>Prueba React con Vite</h1>
      <div className='container'>
        {lenguajesList}
      </div>
    </div>
  )
}

export default App
