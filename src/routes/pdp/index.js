import { h } from "preact";
// import { useEffect } from 'preact/hooks';
import style from "./style.css";

const Pdp = ({id}) => {
  console.log(id)
  return (
    <div class={style.pdp}>
      <section>
        <h1 class="text-3xl font-bold underline">Hello world! {id}</h1>
      </section>
    </div>
  );
};

export default Pdp;
