import img2 from "../image/supermarket-8375343_1280.jpg"
import img3 from "../image/cart-with-products-4525082_1280.jpg"

export default function Description() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Kasir Modern untuk Bisnis Masa Kini
                        </h2>
                        <p className="mb-4">
                            KasirSir hadir sebagai solusi pencatatan transaksi yang cepat, mudah, dan efisien. Cocok untuk UMKM,
                            toko retail, kafe, dan berbagai jenis usaha lainnya. Dengan tampilan yang ramah pengguna, Anda dapat
                            mengelola penjualan hanya dalam hitungan detik.
                        </p>
                        <p>
                            Mulai dari stok barang, laporan penjualan, hingga pengelolaan pelanggan — semua dapat dilakukan secara
                            otomatis dan terpusat dalam satu sistem kasir digital.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img
                            className="w-full rounded-lg"
                            src={img2}
                            alt="office content 1"
                        />
                        <img
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src={img3}
                            alt="office content 2"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
