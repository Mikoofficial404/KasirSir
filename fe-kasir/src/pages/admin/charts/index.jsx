import { useState } from "react";
import { useEffect } from "react";
import { getTransactionsWithProducts } from "../../../services/transactions";

export default function AdminChart() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chartData = await getTransactionsWithProducts();
        setTransactions(chartData);
      } catch (error) {
        console.log(error);
        throw error;
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

  const subtotal = calculateSubtotal();
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-full w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between mb-5">
            <div>
              <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                Rp. {subtotal.toLocaleString("id-ID")}
              </h5>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Hasil Penjualan
              </p>
            </div>
            <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
              23%
              <svg
                className="w-3 h-3 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
            </div>
          </div>
          <div id="main-chart-1" className="h-40"></div>

          <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-700 mt-5 pt-5">
            <div className="flex justify-between items-center">
              <button
                id="dropdownDefaultButton1"
                data-dropdown-toggle="lastDaysdropdown1"
                data-dropdown-placement="bottom"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Last 7 days
                <svg
                  className="w-2.5 m-2.5 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-full w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between mb-5">
            <div>
              <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                Rp. {subtotal.toLocaleString("id-ID")}
              </h5>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Revenue this week
              </p>
            </div>
            <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-red-500 dark:text-red-400 text-center">
              -12%
              <svg
                className="w-3 h-3 ms-1 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
            </div>
          </div>
          <div id="main-chart-2" className="h-40"></div>

          <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-700 mt-5 pt-5">
            <div className="flex justify-between items-center">
              <button
                id="dropdownDefaultButton2"
                data-dropdown-toggle="lastDaysdropdown2"
                data-dropdown-placement="bottom"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Last 30 days
                <svg
                  className="w-2.5 m-2.5 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2"
              >
                Revenue Report
                <svg
                  className="w-2.5 h-2.5 ms-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
