import Error from "./Component/Error/Error";
import Home from "./Component/Home/Home";
import LoginPage from "./Component/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        {/* <LoginPage /> */}
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
