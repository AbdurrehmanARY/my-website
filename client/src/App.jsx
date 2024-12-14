// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/auth/AuthLayout';
import './index.css';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Feature from './pages/admin/Feature';
import Orders from './pages/admin/Orders';
import ShopLayout from './components/shoping/ShopLayout';
import Account from './pages/shoping/Account';
import Checkout from './pages/shoping/Checkout';
import Listing from './pages/shoping/Listing';
import Home from './pages/shoping/Home';

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Auth Routing */}
      <Router>
      <Routes >
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

      {/* Admin Routing */}
      <Routes >
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Products />} />
          <Route path="feature" element={<Feature />} />
          <Route path="orders" element={<Orders />} />

        </Route>
      </Routes>
 {/* //   user shopping routing  */}
 <Routes >
        <Route path="/shop" element={<ShopLayout />}>
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="home" element={<Home />} />
          <Route path="listing" element={<Listing />} />

        </Route>
      </Routes>




  
      </Router>
    </div>
  );
}

export default App;
