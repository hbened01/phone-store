import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style.css";
import { getListPlp } from "../../services"

const Pdp = () => {

  useEffect(() => {
    getListPdp().then((data) => {console.log(data)});
  }, []);

  return (
    <div class={style.pdp}>
      <section>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </section>
    </div>
  );
};

export default Pdp;
