import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header";

import Home from "../pages/Home";
import Cardapio from "../pages/cardapio";
import Eventos from "../pages/eventos";
import FaleConosco from "../pages/fale-conosco";
import NossaHistoria from "../pages/nossa-historia";
import Promocoes from "../pages/promocoes";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/nossahistoria" element={<NossaHistoria />} />
        <Route path="/promocoes" element={<Promocoes />} />
      </Routes>
    </BrowserRouter>
  );
}
