import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Layout from './Layout';
import Home from './Home';
import Browse from './Browse';
import Contact from './Contact';
import Post from './Post';
import Login from './Login';
import Signup from './Signup';
import './style.css';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
