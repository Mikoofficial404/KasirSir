import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../services/products";

const BASE_URL = "http://localhost:8000";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProduct = products.filter((product) => {
    const keyword = searchTerm.toLowerCase();
    return (
      product.title?.toLowerCase().includes(keyword) ||
      String(product.price).toLowerCase().includes(keyword) ||
      String(product.stock).toLowerCase().includes(keyword)
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [productData] = await Promise.all([getProducts()]);
        setProducts(productData);
      } catch (err) {
        console.log(err);
        setError("Gagal memuat data Product");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              Memuat data Product ...
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                Error
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 mb-4">
      <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari berdasarkan nama Product, price"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 mt-10">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="h-56 w-full">
                  <img
                    className="mx-auto h-full object-contain dark:hidden"
                    src={BASE_URL + product.photo_product}
                    alt={product.title}
                  />
                  <img
                    className="mx-auto h-full object-contain hidden dark:block"
                    src={BASE_URL + product.photo_product}
                    alt={product.title}
                  />
                </div>

                <div className="pt-6">
                  <Link
                    to={`/products/show/${product.id}`}
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white break-words"
                  >
                    {product.title}
                  </Link>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xl font-extrabold text-gray-900 dark:text-white break-words">
                      Rp. {Number(product.price).toLocaleString("id-ID")}
                    </p>
                    <Link
                      to={`/products/show/${product.id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
              Tidak ada produk yang di cari
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
