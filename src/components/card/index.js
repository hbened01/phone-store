import { h } from "preact";
import PropTypes from "prop-types";
import { FaEuroSign } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from "./style.css";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({
  imgUrl,
  model,
  id,
  brand,
  price,
  handleOnClickPhoneSelected,
}) => {
  return (
    <>
      <div
        className={style.card}
        onClick={() => handleOnClickPhoneSelected(id)}
      >
        <div className="flex flex-col items-stretch">
          <LazyLoadImage wrapperClassName="self-center pt-5" delayTime={500} effect="blur" src={imgUrl} alt={id} />
          <div className={style.body}>
            <div className={style.title}>{model}</div>
            <div className={style.subtitle} data-testid="text-subtitle">
              <span className="font-bold">Brand</span>:{" "}
              {brand}
            </div>
            <div className="flex items-center justify-between">
              <span className={style.price}>
                <CurrencyFormat
                  value={price && price !== "" ? price : 0}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={price => <><FaEuroSign className="inline-flex" />{price}</>}
                />
              </span>
              <button
                className={style['button-detail']}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  handleOnClickPhoneSelected: PropTypes.func.isRequired,
};

export default Card;
