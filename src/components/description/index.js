import { h } from "preact";
import PropTypes from "prop-types";
import { BsCpu, BsBattery, BsCamera } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { AiOutlineAndroid } from "react-icons/ai";
import { MdOutlineScreenshot } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";

const PdpDescription = ({
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
}) => {
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
        <h2 className="mb-2 text-lg font-semibold text-gray-600">
          Technical specifications
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside">
          {os && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <AiOutlineAndroid className="inline-flex mr-1 min-w-[15px]" />
              <span>{os}</span>
            </li>
          )}
          {cpu && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <BsCpu className="inline-flex mr-1 min-w-[15px]" />
              <span>{cpu}</span>
            </li>
          )}
          {ram && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <CgSmartphoneRam className="inline-flex mr-1 min-w-[15px]" />
              <span>{ram}</span>
            </li>
          )}
          {battery && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <BsBattery className="inline-flex mr-1 min-w-[15px]" />
              <span>{battery}</span>
            </li>
          )}
          {displaySize && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <MdOutlineScreenshot className="inline-flex mr-1 min-w-[15px]" />
              <span>{displaySize}</span>
            </li>
          )}
          {(primaryCamera || secondaryCmera) && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <BsCamera className="inline-flex mr-1 min-w-[15px]" />
              <span>
                Front: ({primaryCamera?.toString()?.replaceAll(",", ", ")}),
                Rear: ({secondaryCmera?.toString()?.replaceAll(",", ", ")})
              </span>
            </li>
          )}
          {dimentions && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <RxDimensions className="inline-flex mr-1 min-w-[15px]" />
              <span>{dimentions}</span>
            </li>
          )}
          {weight && (
            <li className="text-sm md:text-base lg:text-lg truncate hover:text-clip hover:overflow-visible">
              <GiWeight className="inline-flex mr-1 min-w-[15px]" />
              <span>{weight} gr</span>
            </li>
          )}
        </ul>
      </p>
    </>
  );
};

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
