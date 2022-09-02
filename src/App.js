import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
// import { About } from './components/About';
import { AuthProvider } from './components/auth'
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeatureProducts } from './components/FeatureProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback='loading...'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeatureProducts />} />
          <Route path='featured' element={<FeatureProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;