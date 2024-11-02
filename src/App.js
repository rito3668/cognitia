import './App.css';
import { BrowserRouter,Switch,Route ,Redirect} from 'react-router-dom';
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Profile from './pages/Profile/Profile';
import CreateArticle from './components/CreateArticle/CreateArticle';
import CreateProject from './components/CreateProject/CreateProject';
import CreateQuestion from './components/CreateQuestion/CreateQuestion';
import Article from './pages/Article/Article';
import { Project } from './pages/Project/Project';
function App() {
  const {user,authIsReady} = useAuthContext()
  return (
    <div className="App">
      
     {authIsReady&&(
       <BrowserRouter>
       <Navbar/>
       <Switch>
       <Route exact path='/'>
          {user &&<Home/>}
          {!user &&<Redirect to="/login"/>}
        </Route>
        <Route  path='/login'>
        {!user &&<Login/>}
        {user && <Redirect to="/"/>}
        </Route>
        <Route  path='/signup'>
        {!user &&<Signup/>}
        {user &&<Redirect to="/"/>}
        </Route>
        <Route  path='/users/:id'>
        {!user &&<Redirect to="/login"/>}
        {user &&<Profile/>}
        </Route>
        <Route  path='/create/project'>
        {!user &&<Redirect to="/login"/>}
        {user &&<CreateProject/>}
        </Route>
        <Route  path='/create/article'>
        {!user &&<Redirect to="/login"/>}
        {user &&<CreateArticle/>}
        </Route>
        <Route  path='/create/question'>
        {!user &&<Redirect to="/login"/>}
        {user &&<CreateQuestion/>}
        </Route>
        <Route  path='/articles/:id'>
        {!user &&<Redirect to="/login"/>}
        {user &&<Article/>}
        </Route>
        <Route  path='/projects/:id'>
        {!user &&<Redirect to="/login"/>}
        {user &&<Project/>}
        </Route>
       </Switch>
  </BrowserRouter>
     )
      
     }
    </div>
  );
}

export default App;
