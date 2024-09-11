// App.tsx
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyles } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <div>
        <ListaVagas />
      </div>
    </>
  )
}

export default App
