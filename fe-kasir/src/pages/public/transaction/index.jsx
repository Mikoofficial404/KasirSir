import { useEffect, useState } from "react";
import { getTransactionHistory } from "../../../services/transaction_details";
import { Link } from "react-router-dom";

export default function Transaction() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transactionHistory, setTransactionsHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const transactionHistoryData = await getTransactionHistory();
        setTransactionsHistory(transactionHistoryData);
      } catch (err) {
        console.error(err);
        setTransactionsHistory([]);
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
              Memuat data...
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (error || transactionHistory.length === 0) {
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
            Belum Ada Riwayat Transaksi
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {error}
          </p>
          <Link
            to={"/login"}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Harap Login
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Riwayat Transaksi
            </h2>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactionHistory.map((transaction, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-y-4 py-6"
                >
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Tanggal Transaksi:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      {transaction.sales_date || "Tanggal tidak tersedia"}
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Total Transaksi:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      Rp{" "}
                      {Number(transaction.total_amount).toLocaleString("id-ID")}
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Status:
                    </dt>
                    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg
                        className="me-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 11.917 9.724 16.5 19 7.5"
                        />
                      </svg>
                      {transaction.status || "Belum Diketahui"}
                    </dd>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
