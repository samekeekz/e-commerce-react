import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import RootLayout from './layout/RootLayout';
import ProductsPageOutlet from './layout/ProductsPageOutlet';
import { products } from './constants/index';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<h1>Contact us</h1>} />
          <Route path="about" element={<h1>About us</h1>} />
          <Route path="signup" element={<h1>Sign up</h1>} />
          <Route path="products" element={<ProductsPageOutlet />} />
          <Route path="products/:category" element={<CategoryPage />} />
          <Route path="products/:category/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
