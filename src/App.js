import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route component={HomeScreen} exact path="/" />
          <Route component={ProductScreen} path="/product/:id" />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
