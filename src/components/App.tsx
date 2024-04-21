import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './Error/Error';
import Hello from './Hello/Hello';
import Main from './Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />
  },
  {
    path: 'hello',
    element: <Hello />
  }
]);

export default function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
