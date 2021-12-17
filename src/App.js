import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainComment from './components/comment/'
import NavBar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Router>
                {/* <NavBar/> */}
                <NavBar />

                <Switch>
                    <Route path='/comment' exact component={MainComment} />

                </Switch>
                                
            </Router>
    </div>
  );
}

export default App;
