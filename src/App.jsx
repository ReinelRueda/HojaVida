import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BarraLateral from './componentes/BarraLateral'
import Educacion from './componentes/Educacion'
import Experiencia from './componentes/Experiencia'
import Foto from './componentes/Foto'
import PieLateral from './componentes/PieLateral'
import Skills from './componentes/Skills'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='container'>
    <Foto/>
    <BarraLateral/>
    <PieLateral/>
    <Experiencia/>
    <Educacion/>
    <Skills/>
  </div>
  )
}

export default App
