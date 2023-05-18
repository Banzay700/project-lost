import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from 'components'
import { LogoWrapper, Watch, Navbar } from 'components/header'
import { navData } from 'utils'

const App = () => {
  return (
    <Router>
      <Header className="header">
        <LogoWrapper />
        <Navbar spacing={6.4} direction="row" data={navData} />
        <Watch />
      </Header>
    </Router>
  )
}

export default App
