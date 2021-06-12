import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import AddForm from './components/AddForm/AddForm'
import EditForm from './components/EditForm/EditForm'
import './App.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add" component={AddForm} />
      <Route path='/edit' component={EditForm} />
      <Route render={() => <h1>404 not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default App;
