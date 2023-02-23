import { h } from "preact";
import { Link } from "preact-router/match";
import { PREACT_APP_PUBLIC_PATH } from "@/constants";
import img from "@/assets/404.jpg";
import style from "./style.css";

const NotFound = () => (
  <div className={style['img-container']}>
    <img className={style['img-container_bg']} src={img} alt="404 not found page" />
    <p className={style['img-container_text']}>
      <Link href={`${PREACT_APP_PUBLIC_PATH}`}>Go to home </Link>
    </p>
  </div>
);

export default NotFound;
