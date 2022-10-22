import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Careers from "./Components/Careers";
import BookClub from "./Components/BookClub";
import Gifts from "./Components/Gifts";
import Shop from "./Components/Shop";
import BookClubForm from "./Components/BookClubForm";

function App() {
  return (
    <div className="main-container">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/book-club" element={<BookClub />}>
          <Route
            path="/book-club-registration-form"
            element={<BookClubForm />}
          />
        </Route>
        <Route path="/gift-a-book" element={<Gifts />} />
        <Route path="/shop-now" element={<Shop />} />
      </Routes>

    </div>
  );
}

export default App;
