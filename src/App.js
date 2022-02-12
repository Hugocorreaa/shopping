import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './routes';
import { Container } from "@material-ui/core";
import Header from './components/Header';

const App = () => {


  return(
    <Container maxWidth="xl">
      <Router>
        <Header/>
        <MainRoutes/>
      </Router>
    </Container>

  )
}

export default App;
