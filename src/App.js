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
import CardDetail from './components/CardDetail';
import Logout from './components/Logout/Logout';


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
                            <Route path='/create' element={<Create />} />
                            <Route path='/edit/:carpentryId' element={<Edit />} />
                            <Route path='/list' element={<List />} />
                        </Routes>
                       

                        
                        <CardDetail />


                    </div>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
