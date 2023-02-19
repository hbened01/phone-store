import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import { Context } from "@/contexts";
import { Card, Search, Loader } from "@/components";
import style from "./style.css";

const Plp = () => {
  const { phoneListStorage, isLoading } = useContext(Context);
  const [listPhoneFiltered, setListPhoneFiltered] = useState(
    phoneListStorage?.dataListPhones
  );

  const handleDataFiltered = (filter) => {
    const data = phoneListStorage?.dataListPhones?.filter(
      ({ model, brand, price }) => {
        if (filter === "") return true;
        if (
          model?.toLowerCase()?.includes(filter) ||
          brand?.toLowerCase()?.includes(filter) ||
          price?.includes(filter)
        )
          return true;
        return false;
      }
    );
    setListPhoneFiltered(data);
  };

  return (
    <>
      {!isLoading && (
        <div class={style.plp}>
          <section>
            <Search
              placeholder="Search"
              count={listPhoneFiltered?.length}
              onChange={handleDataFiltered}
            />
            {listPhoneFiltered?.map((phone) => (
              <Card
                key={phone.id}
                {...phone}
                handleOnClickPhoneSelected={(txt) => console.log(txt)}
              />
            ))}
          </section>
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Plp;
