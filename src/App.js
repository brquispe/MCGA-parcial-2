import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout";
import Home from "./shared/pages/Home";
import Products from './shared/pages/Products';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Layout>
  );
}

export default App;
