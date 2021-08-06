import { useState } from 'react';
import Nav from './components/Nav';
import Main from './pages/Main';
import Disclaimer from './components/Disclaimer'
import GlobalStyle from './utils/GlobalStyle';
import { Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


//TODO: 404 error catching
function App() {
  // const [userDisclaimed, setUserDisclaimed] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path="/"> 
        <AnimatePresence>
          <Main key="main"/>
        </AnimatePresence>
      </Route>
    </div>
  );
}

export default App;


/*

Use below and uncomment line 12 when page is under construction.

{
  userDisclaimed ? 
    <Main key="main"/>
    :
    <Disclaimer
      key="disclaim"
      disclaimer={userDisclaimed} 
      setDisclaimer={setUserDisclaimed}
    />
}
*/