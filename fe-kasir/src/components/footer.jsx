import { Link } from "react-router-dom";
import logokasir from "../image/logokasir.png";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={logokasir}
              className="mr-3 h-20 sm:h-20"
              alt="KasirSir Logo"
            />
            KasirSir
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            KasirSir adalah sistem kasir modern dengan fitur lengkap untuk
            mendukung kebutuhan penjualan dan pengelolaan toko Anda.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link to={"/"} className="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="mr-4 hover:underline md:mr-6">
                Product
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025-2026{" "}
            <a href="#" className="hover:underline">
              KasirSir™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
