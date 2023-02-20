import { h } from "preact";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ imgUrl, id, wrapperClass, delayTime, effect }) {
  return (
    <LazyLoadImage
      wrapperClassName={wrapperClass}
      delayTime={delayTime}
      effect={effect}
      src={imgUrl}
      alt={id}
    />
  );
}

Image.propTypes = {
  id: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  delayTime: PropTypes.number.isRequired,
  wrapperClass: PropTypes.string.isRequired,
};

export default Image;
