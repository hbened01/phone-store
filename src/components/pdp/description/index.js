import { h } from "preact";
import PropTypes from "prop-types";
import { BsCpu, BsBattery, BsCamera } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { AiOutlineAndroid } from "react-icons/ai";
import { MdOutlineScreenshot } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";

function PdpDescription({
  brand,
  model,
  announced,
  cpu,
  ram,
  os,
  displaySize,
  battery,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weight,
}) {
  return (
    <>
      <h2 className="text-sm title-font text-gray-500 tracking-widest">
        {brand}
      </h2>
      <h1 className="text-gray-700 md:text-4xl text-xl font-medium mb-1 truncate drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        {model}
      </h1>
      <span className="font-normal text-gray-500">{announced}</span>
      <div className="border-t-2 border-gray-200 my-5" />
      <p className="leading-relaxed my-5">
        <h2 className="mb-2 text-lg font-semibold text-gray-600 dark:text-white underline underline-offset-2">
          Technical specifications
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          {os && (
            <li className="flex items-center truncate">
              <AiOutlineAndroid className="mr-2" />
              {os}
            </li>
          )}
          {cpu && (
            <li className="flex items-center truncate">
              <BsCpu className="mr-2" />
              {cpu}
            </li>
          )}
          {ram && (
            <li className="flex items-center truncate">
              <CgSmartphoneRam className="mr-2" />
              {ram}
            </li>
          )}
          {battery && (
            <li className="flex items-center truncate">
              <BsBattery className="mr-2" />
              {battery}
            </li>
          )}
          {displaySize && (
            <li className="flex items-center truncate">
              <MdOutlineScreenshot className="mr-2" />
              {displaySize}
            </li>
          )}
          {(primaryCamera || secondaryCmera) && (
            <li className="flex items-center truncate">
              <BsCamera className="mr-2" /> Front: (
              {primaryCamera?.toString()?.replaceAll(",", ", ")}), Rear: (
              {secondaryCmera?.toString()?.replaceAll(",", ", ")})
            </li>
          )}
          {dimentions && (
            <li className="flex items-center truncate">
              <RxDimensions className="mr-2" />
              {dimentions}
            </li>
          )}
          {weight && (
            <li className="flex items-center truncate">
              <GiWeight className="mr-2" />
              {weight} gr
            </li>
          )}
        </ul>
      </p>
    </>
  );
}

PdpDescription.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  announced: PropTypes.string,
  cpu: PropTypes.string,
  ram: PropTypes.string,
  os: PropTypes.string,
  displaySize: PropTypes.string,
  battery: PropTypes.string,
  primaryCamera: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  secondaryCmera: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  weight: PropTypes.string,
  dimentions: PropTypes.string,
};

export default PdpDescription;
