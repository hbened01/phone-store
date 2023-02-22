import { h } from "preact";
import PropTypes from "prop-types";
import { useRef, useState, useContext } from "preact/hooks";
import CurrencyFormat from "react-currency-format";
import { COLORS } from "@/constants/";
import { isObjectEmpty } from "@/utils";
import { Context } from "@/contexts";
import { FaEuroSign } from "react-icons/fa";
import style from "./style.css";

const PdpAction = (props) => {
  const [color, setColor] = useState({});
  const [storage, setStorage] = useState({});
  const { id, price, options, handleAddProductToCart } = props;
  const listBtnColors = useRef(null);
  const { setNotify } = useContext(Context);

  const getButtons = async (el) => {
    return await el?.getElementsByTagName("button");
  };

  const handleSelectColor = (e, option) => {
    getButtons(listBtnColors.current)
      .then((buttons) => {
        // SET DEFAULT STATE COLOR CLASS:
        Array.from(buttons).forEach((button) => {
          const classList = Array.from(button.classList);
          const index = classList?.findIndex((name) => name.includes("active"));
          index !== -1 && button.classList.remove(button.classList[index]);
        });
      })
      .finally(() => {
        // ADD NEW STATE IN BUTTON SELECTED AND SAVE:
        e.target.classList.add(style.active);
        setColor(option);
      });
  };

  const handleAddToCart = () => {
    if (isObjectEmpty(color) || isObjectEmpty(storage)) {
      setNotify((prevState) => ({
        ...prevState,
        ...{
          type: "warning",
          message: "Select color and storage for to add in the cart.",
          isNotify: true,
        },
      }));
      return;
    }
    handleAddProductToCart({
      colorCode: color?.code,
      storageCode: storage?.code,
      id,
    });
  };

  return (
    <>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-10">
        <div className="flex items-center">
          <span className="mr-3">Color</span>
          <div className={style.test} ref={listBtnColors}>
            {options?.colors?.map((option, key) => {
              const colorCode = COLORS?.find(
                ({ name }) =>
                  name.toLowerCase() === option?.name?.toLowerCase() ||
                  option?.name?.toLowerCase().indexOf(name.toLowerCase()) !== -1
              );
              return (
                <button
                  key={option?.code}
                  className={`btn-color-${key} border-2 border-gray-300 ml-1 rounded-full w-6 h-6 hover:bg-black/[.1] focus:outline-none focus:ring-1 focus:ring-black/[.5]`}
                  style={{ backgroundColor: `${colorCode?.hex}` }}
                  onClick={(e) => handleSelectColor(e, option)}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center ml-10 ">
          <span className="mr-3">Storage</span>
          <div className="relative">
            <select
              className="rounded border appearance-none border-gray-400 py-1 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
              onChange={(e) => setStorage(JSON.parse(e.target.value))}
            >
              <option value={JSON.stringify({})}> Select </option>
              {options?.storages.map(({ code, name }) => (
                <option key={code} value={JSON.stringify({ code, name })}>
                  {name}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="font-extrabold text-3xl text-gray-900 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">
          <CurrencyFormat
            value={price && price !== "" ? price : 0}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(price) => (
              <>
                <FaEuroSign className="inline-flex" />
                {price}
              </>
            )}
          />
        </span>
        <button
          className="flex ml-auto text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

PdpAction.propTypes = {
  price: PropTypes.string,
  color: PropTypes.array,
};

export default PdpAction;
