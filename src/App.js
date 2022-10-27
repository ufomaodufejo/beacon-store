import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BookClub from "./Components/BookClub";
import Shop from "./Components/Shop";
import BookClubForm from "./Components/BookClubForm";
import ErrorPage from "./Components/ErrorPage";
import Users from "./Components/Users";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="main-container">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorBoundary />}/>
        <Route
          path="/about-us"
          element={<About />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="/contact-us"
          element={<Contact />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="/book-club"
          element={<BookClub />}
          errorElement={<ErrorBoundary />}
        >
          <Route
            path="/book-club-registration-form"
            element={<BookClubForm />}
            errorElement={<ErrorBoundary />}
          />
        </Route>
        <Route
            path="/shop-now"
            element={<Shop />}
            errorElement={<ErrorBoundary />}
          />
        <Route
          path="/members"
          element={<Users />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
          errorElement={<ErrorBoundary />}
        />
      </Routes>
    </div>
  );
}

export default App;
