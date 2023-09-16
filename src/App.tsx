import "./App.css";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import Products from "./pages/Products";
import Tables from "./pages/Tables";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route element={<Categories/>} path="categories"/>
            <Route element={<AddCategory/>} path="add-category"/>
            <Route element={<AddCategory/>} path="update-category/:id"/>
            <Route element={<Products/>} path="products"/>
            <Route element={<Tables/>} path="tables"/>
          </Routes>
        </Layout>
    </QueryClientProvider>
  );
}

export default App;