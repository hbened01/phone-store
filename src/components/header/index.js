import { h } from "preact";
import Match, { Link } from "preact-router/match";
import { route } from "preact-router";
import { useContext, useState, useRef, useEffect } from "preact/hooks";
import CurrencyFormat from "react-currency-format";
import { Context } from "@/contexts";
import { PREACT_APP_PUBLIC_PATH } from "@/constants";
import { BsCart3 } from "react-icons/bs";
import { FaEuroSign } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import logo from "@/assets/logo.svg";
import style from "./style.css";

const Header = () => {
  const [total, setTotal] = useState(0);
  const { phoneListStorage, cartListStorage, setCartListStorage } = useContext(Context);
  const shoppingListElement = useRef(null);

  const handleToggleShoppingList = () => {
    if (cartListStorage?.length === 0) return;
    shoppingListElement.current.classList.toggle("hidden");
  };

  const handleRemoveItemCart = (productId) => {
    setCartListStorage((prevState) => {
      const newCartListData = prevState.filter(({id}) => id !== productId );
      // SET LIST DATA CART INTO LOCAL STORAGE:
      window.localStorage.setItem(
        "DATA_CART_ITEMS",
        JSON.stringify(newCartListData)
      );
      return newCartListData;
    });
  };

  useEffect(() => {
    if (cartListStorage?.length === 0) {
      shoppingListElement.current.classList.add("hidden");
      return;
    }
    setTotal(cartListStorage.reduce((acc, { price }) => acc + Number(price), 0));
  }, [cartListStorage]);

  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <img
            src={logo}
            alt="Phone Logo"
            height="32"
            width="32"
          />
          <h1>Phone Store</h1>
        </div>
        <nav className="flex items-center" aria-label="Breadcrumb">
          <Link activeClassName={style.active} href={`${PREACT_APP_PUBLIC_PATH}`}>
            Home
          </Link>
          <Match path={`${PREACT_APP_PUBLIC_PATH}pdp/:id`}>
            {({ matches, path }) => {
              const productId = path?.split("/")[PREACT_APP_PUBLIC_PATH === "/phone-store/" ? 3 : 2];
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
            onClick={handleToggleShoppingList}
            className="float-right relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-transparent rounded-lg hover:bg-black/[.1] leading-[3.5rem] focus:outline-none focus:ring-1 focus:ring-black/[.5]"
          >
            <BsCart3 className="w-6 h-6" />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
              {cartListStorage?.length}
            </div>
          </button>
        </div>
      </header>
      <div
        ref={shoppingListElement}
        className="hidden fixed top-14 right-0 z-20 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow"
      >
        <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50">
          Shopping list
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700 overflow-auto max-h-60">
          {cartListStorage?.map((product) => (
            <button
              key={product?.id}
              className="flex w-full px-4 py-3 hover:bg-gray-100 cursor-default"
            >
              <div className="flex-shrink-0 cursor-pointer" onClick={() => route(`${PREACT_APP_PUBLIC_PATH}pdp/${product?.id}`)}>
                <img
                  className="object-contain object-center rounded-lg w-14 h-14"
                  src={product?.imgUrl}
                  alt={product?.model}
                />
              </div>
              <div className=" relative w-full pl-3">
                <div className="text-gray-600 text-sm mb-1.5 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">
                  {product?.model}
                </div>
                <div className="absolute right-3 font-bold text-gray-900">
                  <CurrencyFormat
                    value={
                      product?.price && product?.price !== ""
                        ? product?.price
                        : 0
                    }
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(price) => (
                      <>
                        <FaEuroSign className="inline-flex drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
                        {price}
                      </>
                    )}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveItemCart(product?.id)}
                className="ml-4 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
                aria-label="Close"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </button>
          ))}
        </div>
        <div className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100">
          <div className="inline-flex items-center ">
            <GrMoney className="mr-1" />
            Total:{" "}
            <CurrencyFormat
              value={total && total !== "" ? total : 0}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(total) => (
                <>
                  <FaEuroSign className="inline-flex drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
                  {total}
                </>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
