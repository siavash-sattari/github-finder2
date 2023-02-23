import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/AlertContext';

import Alert from './layout/Alert';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import User from './pages/User';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// NOTE: Alert is only used on the '/' route

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-16 md:pb-28'>
              <Routes>
                <Route
                  path='/'
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
