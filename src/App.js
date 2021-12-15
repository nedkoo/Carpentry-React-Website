import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContex'

import Header from './components/Header';
import Media from './components/Media';
import HomeArticle from './components/HomeArticle';
import OneCard from './components/OneCard';
import Create from './components/Create';
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
              {/* <Routes>
              <Route path='/homepage' element={<HomeArticle />} />
              <Route path='/login' element={<Login />} />
          </Routes>       */}

              <main className="site-content">
                  <div className="site-wrapper">
                      <HomeArticle />
                      <article className="entry">
                          <div className="entry-media">
                              <img src="https://images.unsplash.com/photo-1516088719633-86aa7e28a90e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29vZCUyMGNhcnZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                  alt="art" />
                          </div>
                          <div className="entry-content">
                              <h3 className="entry-title">
                                  <a href="/some/valid/uri">Welcome to Arts</a>
                              </h3>
                              <p className="entry-category">
                                  <a href="/some/valid/uri">Branding design</a>
                              </p>
                              <p>Discover the best Wood Carving Tools in Best Sellers.</p>
                              <p>Find the top 100 most popular items in Arts, Crafts & Sewing Best Sellers.</p>
                              <p>Everything for the woodcarving enthusiast.</p>
                          </div>
                      </article>
                      <article className="entry">
                          <div className="entry-media">
                              <img src="https://media.istockphoto.com/photos/wooden-cabinet-with-drawers-and-handles-picture-id465615635?b=1&k=20&m=465615635&s=170667a&w=0&h=wEIhMQuQ5lgZXEQk73UZld57kgW1a2N0Bnv3Y2VcKYI="
                                  alt="art" />
                          </div>
                          <div className="entry-content">
                              <h3 className="entry-title">
                                  <a href="/some/valid/uri">Welcome to Furniture</a>
                              </h3>
                              <p className="entry-category">
                                  <a href="/some/valid/uri">Branding design</a>
                              </p>
                              <p>Discover the best Wood Carving Tools in Best Sellers.</p>
                              <p>Find the top 100 most popular items in Arts, Crafts & Sewing Best Sellers.</p>
                              <p>Everything for the woodcarving enthusiast.</p>
                          </div>
                      </article>

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

                      <Create />
                      <Edit />
                      <Login />
                      <Register />
                      <Logout />
                      <CardDetail />


                  </div>
              </main>
              <Footer />
          </div>
      </AuthProvider>
  );    
}

export default App;
