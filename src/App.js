import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Header from './components/header';
import Register from './pages/register';
import Navigation from './components/navigation';
import { AuthProvider, ProtectedRoute } from './context/auth';

const App = () => {
    return (
        <div className='App'>
            <AuthProvider>
                <Header />

                <Navigation/>

                <Routes>
                    <Route path='login' element={<Login/>} />
                    <Route path='register' element={<Register/>} />

                    <Route index element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
