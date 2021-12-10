import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainComment from './components/comment/UseEx'
function App() {
  return (
    <div className="App">
      <h3>my Components</h3>
      <Router>
                {/* <NavBar/> */}
                <Switch>
                    <Route path='/comment' exact component={MainComment} />
                </Switch>
                                
            </Router>
    </div>
  );
}

export default App;
