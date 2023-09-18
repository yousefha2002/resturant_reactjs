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
import POS from "./pages/POS";
import Kitchen from "./pages/Kitchen";
import AddRole from "./pages/AddRole";
import AddEmployee from "./pages/AddEmployee";

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
            <Route element={<POS/>} path="pos"/>
            <Route element={<Kitchen/>} path="kitchen"/>
            <Route element={<AddRole/>} path="add-role"/>
            <Route element={<AddRole/>} path="update-role/:id"/>
            <Route element={<AddEmployee/>} path="add-employee"/>
            <Route element={<AddEmployee/>} path="update-employee/:id"/>
          </Routes>
        </Layout>
    </QueryClientProvider>
  );
}

export default App;