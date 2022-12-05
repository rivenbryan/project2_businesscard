import Frontpage from "./components/Fontpage";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './app.css'

const App = () => {
  return (
    <div className="container">
      <Frontpage/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
