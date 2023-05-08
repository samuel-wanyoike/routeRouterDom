import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Contact } from './pages/contact';
import { useState, createContext } from 'react';

  // context to the state function and variable above
  export const AppContext =createContext();
function App() {
  //state for setting the username across all pages
  const [userName, setUserName] = useState("Wanyoike");

  //routes to different pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<h1>page not found</h1>}/>
      </Route>
    )
  );

  return (
    <div className="App">
      {/* AppContext is being used as a global context */}
      
      <AppContext.Provider value={{userName, setUserName}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
      
    </div>
  );
}

//root component for the root page, it has the navbar and outlet which represents all other pages
const Root = () => {
  return (
    <>
    <div className='navbar'>
      <Link to='/'> Home </Link>
      <Link to='./profile'> Profile </Link>
      <Link to='/contact'> Contact</Link>
    </div>

    <div>
      <Outlet/>
    </div>
    </>
  );
}
export default App;
