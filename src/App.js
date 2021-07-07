import { useState } from 'react';
import Nav from './components/Nav';
import Main from './pages/Main';
import Disclaimer from './components/Disclaimer'
import GlobalStyle from './utils/GlobalStyle';
import NotFound from './components/NotFound'
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


//TODO: 404 error catching
function App() {
  const [userDisclaimed, setUserDisclaimed] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/"> 
          <AnimatePresence>
            {userDisclaimed ? 
              <Main key="main"/>
              :
              <Disclaimer
                key="disclaim"
                disclaimer={userDisclaimed} 
                setDisclaimer={setUserDisclaimed}
              />
            }
          </AnimatePresence>
        </Route>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
