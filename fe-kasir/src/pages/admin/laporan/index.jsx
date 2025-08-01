import { useEffect, useState } from "react";
import { getTransactionHistory } from "../../../services/transaction_details";
import { downloadPdf } from "../../../services/transaction_details";

export default function Adminlaporan() {
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [transactionHistory, setTransactionsHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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

  const handleDownloadPdf = async () => {
    setDownloading(true);
    try {
      await downloadPdf();
    } catch (err) {
      console.log(err);
      alert("Gagal mengunduh PDF");
    }
    setDownloading(false);
  };

  const filteredTransaction = transactionHistory.filter((transaction) => {
    const keyword = searchTerm.toLowerCase();
    return (
      transaction.sales_date?.toLowerCase().includes(keyword) ||
      String(transaction.status).toLowerCase().includes(keyword)
    );
  });

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

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form
              className="flex items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Cari berdasarkan tanggal atau status"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Total: {filteredTransaction.length} dari {transactionHistory.length}{" "}
            transaksi
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          >
            {downloading ? (
              "Mengunduh..."
            ) : (
              <>
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Export PDF
              </>
            )}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Sales Date</th>
                <th className="px-4 py-3">Total Amount</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransaction.length > 0 ? (
                filteredTransaction.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b dark:border-gray-700"
                  >
                    <td className="px-4 py-3">{transaction.sales_date}</td>
                    <td className="px-4 py-3">{transaction.total_amount}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold
                          ${
                            transaction.status === "paid"
                              ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-200"
                              : transaction.status === "canceled"
                              ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-200"
                              : "text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                          }
                        `}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-4">
                    Data Tidak Ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
