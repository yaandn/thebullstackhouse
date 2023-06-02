import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <section className="section-container">
        <div className="box-description">
          <div className="line"></div>
          <h3 className="description">Serving the best cuts in town!</h3>
          <div className="line"></div>
        </div>
        <h1 className="title-home">THEBULL STACKHOUSE</h1>
        <h2 className="subtitle">Open Now!</h2>
        <nav className="box-buttons">
          <a href="#">
            <button className="button-home">Acessar serviço</button>
          </a>
          <a href="#">
            <button className="button-home">Acessar serviço</button>
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Home;
