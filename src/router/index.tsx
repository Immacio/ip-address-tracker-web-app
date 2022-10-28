import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
