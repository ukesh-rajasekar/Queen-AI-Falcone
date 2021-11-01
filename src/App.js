import './App.css';
import FindFalcone from './pages/FindFalcone';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ReferenceDataContext } from './tools/ReferenceDataContext';
import Result from './pages/Result';
import About from './pages/About';
import NavBar from './Components/NavBar';
import Container from '@mui/material/Container';
import Footer from './Components/Footer';

function App() {
   return (
      <div className='App'>
         <ReferenceDataContext>
            <Router>
               <Container
                  sx={{
                     flexGrow: 1,
                     display: 'flex',
                     flexDirection: 'column',
                     padding: '5px',
                  }}
               >
                  <NavBar />

                  <Switch>
                     <Route exact path='/Queen-AI-Falcone/'>
                        <About />
                     </Route>
                     <Route exact path='Queen-AI-Falcone/find'>
                        <FindFalcone />
                     </Route>
                     <Route exact path='Queen-AI-Falcone/result'>
                        <Result />
                     </Route>
                  </Switch>
                  <Footer />
               </Container>
            </Router>
         </ReferenceDataContext>
      </div>
   );
}

export default App;
