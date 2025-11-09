import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './component/Layout/UserLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {


  return (
    <>

      <BrowserRouter>

        <Routes>
          {/* User Routes */}

          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />
          </Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App;
