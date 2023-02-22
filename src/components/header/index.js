import { h } from "preact";
import Match, { Link } from "preact-router/match";
import { useContext } from "preact/hooks";
import { Context } from "@/contexts";
import { BsCart3 } from "react-icons/bs";
import style from "./style.css";

const Header = () => {
  const { phoneListStorage } = useContext(Context);
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img
          src="../../assets/logo.svg"
          alt="Phone Logo"
          height="32"
          width="32"
        />
        <h1>Phone Store</h1>
      </div>
      <nav className="flex items-center" aria-label="Breadcrumb">
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
        <Match path="/pdp/:id">
          {({ matches, path }) => {
            const productId = path?.split("/")[2];
            const productModel = phoneListStorage?.dataListPhones?.find(
              ({ id }) => id === productId
            )?.model;
            return (
              matches && (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <button className="text-yellow-400 hover:bg-black/[.1] leading-[3.5rem]">
                    {productModel}
                  </button>
                </>
              )
            );
          }}
        </Match>
      </nav>
      <div className="absolute right-5 top-2 flex items-center">
        <button
          type="button"
          class="float-right relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-transparent rounded-lg hover:bg-black/[.1] leading-[3.5rem] focus:outline-none focus:ring-1 focus:ring-black/[.5]"
        >
          <BsCart3 className="w-6 h-6" />
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
            20
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
