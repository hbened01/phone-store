import { h } from "preact";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";
import { COLORS } from "@/constants/";
import { FaEuroSign } from "react-icons/fa";

function PdpAction({ price, colors }) {
  return (
    <>
      <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-10">
        <div class="flex">
          <span class="mr-3">Color</span>
          {colors?.map((color) => {
            const colorCode = COLORS?.find(
              ({ name }) => name.toLowerCase() === color.toLowerCase()
            );
            return (
              <button
                key={color}
                className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none`}
                style={{ backgroundColor: `${colorCode?.hex}` }}
              />
            );
          })}
        </div>
      </div>
      <div class="flex">
        <span class="font-extrabold text-3xl text-gray-900 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]">
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
        <button class="flex ml-auto text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-900 rounded">
          Add to Cart
        </button>
      </div>
    </>
  );
}


PdpAction.propTypes = {
  price: PropTypes.string,
  color: PropTypes.array,
};

export default PdpAction;
