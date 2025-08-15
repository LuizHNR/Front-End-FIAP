import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Menu from './routes/Menu/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Produto from './routes/Produtos/index.tsx';
import Error from './routes/Error/index.tsx';

const routes = createBrowserRouter([{
  path:"/", element: <App/>, 
  errorElement: <Error/>,
  children: [
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produto/>},
    {path: "/produtos/editar/:id", element: <EditarProdutos/>},
  ]

}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router = {routes} />

  </StrictMode>,
)
