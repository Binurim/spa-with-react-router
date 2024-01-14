import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<ProductsPage/>}/>
  </Route>
);

// const router = createBrowserRouter([
//   { path: '/', element: <HomePage/> },
//   { path: '/products', element: <ProductsPage/>}
// ]);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
