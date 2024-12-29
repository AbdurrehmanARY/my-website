import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/AuthLayout';
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
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import NotFound from './pages/NotFound';
import { useAuthContext } from './context/AuthContext';
import Landing from './pages/landing';
import { useEffect } from 'react';
function App() {
  const {dispatch,isAuth,user,myProfile}=useAuthContext()
  console.log("is auth",isAuth,"user",user)

  useEffect(() => {
  myProfile().then((res)=>{
if(res.user){
  dispatch({type:"LOGIN",payload:res.user})
}
else{
  dispatch({type:"LOGOUT"})
}


  })
// console.log(res)
   
  }, []);














  return (
   
   <div className="flex flex-col overflow-hidden bg-white">
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />

          {/* Auth Routing */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Admin Routing */}
          <Route
            path="/admin"
            element={
              // <ProtectedRoute roleAllowed={['admin']}>
                <AdminLayout />
              // </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Products />} />
            <Route path="feature" element={<Feature />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/* User Shopping Routing */}
          {/* <Route
            path="/shop"
            element={
              <ProtectedRoute roleAllowed={['user']}>
                <ShopLayout />
              </ProtectedRoute>
            }
          >
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<Listing />} />
          </Route> */}

          {/* Global Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
