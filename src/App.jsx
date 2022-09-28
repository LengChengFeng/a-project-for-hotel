

import { useRoutes } from "react-router";
import Footer from "./components/app-footer";
import Header from "./components/app-header";
import routes from "./router"
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div>
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
