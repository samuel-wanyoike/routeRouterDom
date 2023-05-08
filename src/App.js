import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
import { Home } from './pages/home';
import { Menu } from './pages/menu';
import { Contact } from './pages/contact';

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
    <div className='navbar'>
      <Link to='/'> Home </Link>
      <Link to='./menu'> Menu </Link>
      <Link to='/contact'> Contact</Link>
    </div>

    <div>
      <Outlet/>
    </div>
    </>
  )
}
export default App;
