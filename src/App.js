import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main>Content</main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
