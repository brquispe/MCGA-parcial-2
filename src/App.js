import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Hello, world!</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
