import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContex'

import Header from './components/Header/Header';
import Media from './components/Media';
import Home from './components/Home/Home';
import OneCard from './components/OneCard';
import Create from './components/Create/Create';
import Edit from './components/Edit';
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
                        </Routes>
                        <div className="cards-layout masonry">
                            <h2>Layout Masonry</h2>
                            <div className="card-masonry">
                                <OneCard />
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image2.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image3.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image4.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image1.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image2.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image3.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                                <div className="card">
                                    <header className="card-img">
                                        <img src="/images/Image4.jpg" alt="card" />
                                    </header>
                                    <section className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                            consequuntur possimus quo enim eveniet, deserunt ducimus
                                            doloremque laudantium iure, ut inventore eaque fugit ex porro
                                            totam perspiciatis molestiae corporis. Odio!</p>
                                        <h4>200 $</h4>
                                    </section>
                                    <footer className="card-footer">
                                        <a href="/some/valid/uri">More interesting things about the thing</a>
                                    </footer>
                                </div>
                            </div>
                        </div>

                        
                        <CardDetail />


                    </div>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
