import { h } from 'preact';
import PropTypes from 'prop-types';
import { BsSearch } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import style from "./style.css";

const Search = ({ placeholder, onChange, count }) => {
  return (
    <div className={style.search}>
      <div className="relative">
        <span className="absolute -left-20 top-4 text-lg py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
          {count ? count : <BiLoaderAlt className="animate-spin h-5 w-5" />}
        </span>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch className="w-5 h-5 text-gray-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm rounded-lg font-bold text-gray-600 border border-gray-300 bg-gray-50 hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300"
          placeholder={placeholder}
          onChange={(e) => onChange(e?.target?.value?.toLowerCase() || "")}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;