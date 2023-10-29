import Home from './pages/Home';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import RootLayout from './layout/RootLayout';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<h1>Contact us</h1>} />
          <Route path="*" element={<NotFound />} />{' '}
        </Route>
        {/* Need to implement not found 404 page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
