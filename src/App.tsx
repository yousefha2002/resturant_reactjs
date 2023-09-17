import "./App.css";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import Products from "./pages/Products";
import Tables from "./pages/Tables";
import AddPoduct from "./pages/AddPoduct";
import AddTable from "./pages/AddTable";
import Staff from "./pages/Staff";

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
            <Route element={<AddTable/>} path="add-table"/>
            <Route element={<AddTable/>} path="update-table/:id"/>
            <Route element={<AddPoduct/>} path="add-product"/>
            <Route element={<AddPoduct/>} path="update-product/:id"/>
            <Route element={<Staff/>} path="staff"/>
          </Routes>
        </Layout>
    </QueryClientProvider>
  );
}

export default App;