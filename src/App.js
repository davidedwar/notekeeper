import Welcome from './Pages/Welcome'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Notekeeper from './Pages/Notekeeper'
import NoteDisplay from './Components/NoteDisplay';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path = "/Welcome">
              <Welcome/>
        </Route>
        <Route path = "/Signup">
              <Signup/>
        </Route>
        <Route path = "/Signin">
              <Signin/>
        </Route>
        <Route path = "/Notekeeper">
              <Notekeeper/>
        </Route>
        <Route path = "/Notedisplay">
              <NoteDisplay/>
        </Route>
       </Switch>
     </Router> 
      
    </div>
  );
}

export default App;
