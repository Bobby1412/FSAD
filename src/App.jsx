import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import Contact from './Contact';
import Post from './Post';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
