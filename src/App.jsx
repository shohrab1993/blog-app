import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./component/ui/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog/:blogId" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
