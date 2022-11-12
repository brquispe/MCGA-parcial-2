import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout";
import Home from "./shared/pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
