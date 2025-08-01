import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/public";
import Home from "./pages/public";
import ShowProduct from "./pages/public/product/show";
import Products from "./pages/public/product";
import Login from "./pages/auth/login";
import AdminLayout from "./layouts/admin";
import Transaction from "./pages/public/transaction";
import Dashboard from "./pages/admin";
import AdminProducts from "./pages/admin/products";
import ProductsAdmin from "./pages/admin/products";
import AdminUsers from "./pages/admin/users/index";
import Cart from "./pages/public/cart";
import ProductCreate from "./pages/admin/products/create";
import AdminProductsEdit from "./pages/admin/products/edit";
import AdminChart from "./pages/admin/charts";
import Adminlaporan from "./pages/admin/laporan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Products />} />
              <Route path="show/:id" element={<ShowProduct />} />
            </Route>
            <Route path="transaction">
              <Route index element={<Transaction />} />
            </Route>
            <Route path="cart">
              <Route index element={<Cart />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users">
              <Route index element={<AdminUsers />} />
            </Route>
            <Route path="products">
              <Route index element={<AdminProducts />} />
              <Route path="create" element={<ProductCreate />} />
              <Route path="edit/:id" element={<AdminProductsEdit />} />
            </Route>
            <Route path="charts">
              <Route index element={<AdminChart />} />
            </Route>
            <Route path="transaction">
              <Route index element={<Adminlaporan />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
