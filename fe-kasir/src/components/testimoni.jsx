export default function Testimoni() {
  return (
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Fitur Utama Sistem KasirSir
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Website kasir modern untuk membantu Anda mengelola bisnis retail, toko, atau usaha kuliner secara efisien dan otomatis.
              </p>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

              {/* Item 1 */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  {/* Icon tetap */}
                  <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12H7v-2h2v2zm0-4H7V6h2v2zm4 4h-2v-2h2v2zm0-4h-2V6h2v2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Manajemen Produk</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tambah, ubah, dan atur stok barang dengan cepat melalui dashboard yang mudah digunakan.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4zM3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 3a1 1 0 100 2h12a1 1 0 100-2H4zm-1 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Transaksi Cepat</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Proses penjualan dan pencetakan struk hanya dalam hitungan detik, cocok untuk toko dengan antrian panjang.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v2h10V5H5zm0 4v6h10V9H5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Laporan Penjualan</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Lihat grafik dan data penjualan harian, mingguan, atau bulanan secara otomatis.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 011 1v2h6V3a1 1 0 112 0v2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2V3a1 1 0 112 0v2h6V3a1 1 0 011-1z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Manajemen Pengguna</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Kelola kasir dan admin dengan hak akses yang berbeda sesuai kebutuhan bisnis.
                </p>
              </div>

              {/* Item 5 */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h5.586l2 2H17a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm13 4H5v2h10V7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Integrasi Printer & Barcode</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Mendukung pencetakan struk otomatis dan pemindaian barcode produk dengan mudah.
                </p>
              </div>

              {/* Item 6 */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                  <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 108 8 8 8 0 00-8-8zm-1 11V9h2v4h3l-4 4-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">Backup & Keamanan</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Data tersimpan otomatis ke cloud dan aman dari kehilangan atau kerusakan perangkat.
                </p>
              </div>

            </div>
          </div>
        </section>
      </>
  );
}
