import { h } from "preact";
import { useContext } from "preact/hooks";
import { Context } from "@/contexts";
import Card from "@/components/card";
import style from "./style.css";

const Plp = () => {
  const { phoneListStorage } = useContext(Context);

  return (
    <div class={style.plp}>
      <section>
        {phoneListStorage?.dataListPhones?.map((phone) => (
          <Card key={phone.id} {...phone} handleOnClickPhoneSelected={(id)=> console.log(id)} />
        ))}
      </section>
    </div>
  );
};

export default Plp;
