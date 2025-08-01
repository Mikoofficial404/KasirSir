import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showProducts } from "../../../services/products";
import { createTransactions } from "../../../services/transactions";

const BASE_URL = "http://localhost:8000";

export default function ShowProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem("access_token");
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const [productData] = await Promise.all([showProducts(id)]);
      setProducts(productData);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        product_id: id,
        quantity: quantity,
      };
      await createTransactions(payload);
      alert("Transaksi Berhasil Masuk Ke Cart");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleLogins = () => {
    if (!token && !userInfo) {
      alert("Harus login terlebih dahulu!!");
      navigate("/login");
    }
  };

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden rounded-lg"
              src={BASE_URL + products.photo_product}
              alt={products.title}
            />
            <img
              className="w-full hidden dark:block rounded-lg"
              src={BASE_URL + products.photo_product}
              alt={products.title}
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {products.title}
            </h1>
            <div className="mt-6">
              <p className="text-gray-500 text-sm dark:text-gray-400">Harga</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Rp {products.price?.toLocaleString("id-ID")}
              </p>

              {/* Stok */}
              <p className="text-gray-500 text-sm dark:text-gray-400">Stok</p>
              <p
                className={`text-xl font-medium ${
                  products.stock <= 5 ? "text-red-600" : "text-gray-800"
                } dark:text-white`}
              >
                {products.stock} pcs
              </p>
            </div>
            <div className="mt-8">
              {token && userInfo ? (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 sm:mt-8 space-y-4"
                >
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block mb-1 text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Jumlah Pembelian
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min={1}
                        max={products.stock}
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(parseInt(e.target.value) || 1)
                        }
                        className="pl-10 pr-4 py-2 block  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan jumlah"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
                  >
                    <svg
                      className="w-5 h-5 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h1.5L8 16h8a2 2 0 1 1 0 4 2 2 0 0 1 0-4H8m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </form>
              ) : (
                <button
                  onClick={handleLogins}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
                >
                  <svg
                    className="w-5 h-5 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16h8a2 2 0 1 1 0 4 2 2 0 0 1 0-4H8m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to Cart
                </button>
              )}
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-800" />

            {/* Deskripsi */}
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {products.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
