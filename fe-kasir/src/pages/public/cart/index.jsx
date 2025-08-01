import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTransactionsWithProducts } from "../../../services/transactions";

const BASE_URL = "http://localhost:8000/";

export default function Cart() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsData = await getTransactionsWithProducts();
        setTransactions(transactionsData);
      } catch (err) {
        console.log(err);
        setError("Gagal Memuat Data Product");
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateSubtotal = () => {
    return transactions.reduce((total, transaction) => {
      const price = Number(transaction.product?.price) || 0;
      const quantity = Number(transaction.quantity) || 0;
      return total + price * quantity;
    }, 0);
  };

  const calculateTotalQuantity = () => {
    return transactions.reduce((total, transaction) => {
      return total + (Number(transaction.quantity) || 0);
    }, 0);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setTransactions([]);
      setIsCheckingOut(false);

      navigate("/transaction");
    }, 1000);
  };

  const subtotal = calculateSubtotal();
  const totalQuantity = calculateTotalQuantity();

  if (loading) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-2"></div>
          <span className="text-gray-600 dark:text-gray-400">
            Memuat data Product Cart...
          </span>
        </div>
      </section>
    );
  }

  if (error || transactions.length === 0) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-8 text-center">
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
            {transactions.length === 0
              ? "Keranjang Kosong"
              : "Belum Ada Transaksi"}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {error || "Silakan tambahkan produk ke keranjang terlebih dahulu"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Coba Lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Transaksi Produk
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">
            {transactions.map((transaction, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
              >
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    {transaction.product?.photo_product ? (
                      <img
                        className="h-20 w-20 object-cover rounded"
                        src={BASE_URL + transaction.product.photo_product}
                        alt={transaction.product.title || "product"}
                        onError={(e) => {
                          console.error(
                            `Error loading image for product ${transaction.product.title}:`,
                            e.target.src
                          );
                          e.target.style.display = "none";
                        }}
                        onLoad={() => {
                          console.log(
                            `Image loaded successfully for product ${transaction.product.title}:`,
                            BASE_URL + transaction.product.photo_product
                          );
                        }}
                      />
                    ) : (
                      <>
                        <img
                          className="h-20 w-20 dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                          alt="product"
                        />
                        <img
                          className="hidden h-20 w-20 dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                          alt="product"
                        />
                      </>
                    )}
                  </a>

                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex flex-col items-center">
                      <p className="text-sm font-medium text-gray-700 dark:text-white mb-1">
                        Quantity
                      </p>
                      <input
                        type="text"
                        value={transaction.quantity}
                        readOnly
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        Total: {`Rp.${transaction.total_amount ?? "$0"}`}
                      </p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-2 md:order-2 md:max-w-md">
                    <p className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                      {transaction.product?.title ||
                        transaction.product?.name ||
                        `Produk ID: ${transaction.product_id}`}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Order #: {transaction.order_number}
                      </span>
                      {transaction.product?.price && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Harga:{" "}
                          {Number(transaction.product.price).toLocaleString(
                            "id-ID"
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Ringkasan Transaksi
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-500 dark:text-gray-400">
                    Total Produk
                  </span>
                  <span className="text-base text-gray-900 dark:text-white">
                    {transactions.length}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-base text-gray-500 dark:text-gray-400">
                    Total Quantity
                  </span>
                  <span className="text-base text-gray-900 dark:text-white">
                    {totalQuantity}
                  </span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Subtotal
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Rp. {subtotal.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`block w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 ${
                  isCheckingOut
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                }`}
              >
                {isCheckingOut ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Memproses Checkout...
                  </div>
                ) : (
                  "Lanjutkan ke Checkout"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
