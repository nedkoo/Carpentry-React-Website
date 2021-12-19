import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContex'

import Header from './components/Header/Header';
import Media from './components/Media';
import Home from './components/Home/Home';
import List from './components/ListCarpentry/List'
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer';
import CardDetail from './components/Details/CardDetail';
import Logout from './components/Logout/Logout';
import About from './components/About/About';
import GuardedRoute from './components/Guards/GuardedRoute';


function App() {

    return (
        <AuthProvider>
            <div className="site">
                <Header />
                <Media />
                <main className="site-content">
                    <div className="site-wrapper">
                        
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/details/:carpentryId' element={<CardDetail />} />
                            <Route path='/list' element={<List />} />
                            <Route path='/about' element={<About />} />

                            <Route element={<GuardedRoute />}>
                                <Route path='/create' element={<Create />} />   
                                <Route path='/edit/:carpentryId' element={<Edit />} />
                            </Route>
                        </Routes>

                    </div>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
