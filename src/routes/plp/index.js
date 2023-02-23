import { h } from "preact";
import { useContext, useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import { Context } from "@/contexts";
import { Card, Search, Loader } from "@/components";
import { PREACT_APP_PUBLIC_PATH } from "@/constants";
import style from "./style.css";

const Plp = () => {
  const { phoneListStorage, isLoading } = useContext(Context);
  const [listPhoneFiltered, setListPhoneFiltered] = useState([]);

  const handleLinkToPdpPhone = (id) => {
    route(`${PREACT_APP_PUBLIC_PATH}pdp/${id}/`);
  };

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

  useEffect(() => {
    setListPhoneFiltered(phoneListStorage?.dataListPhones);
  }, [phoneListStorage]);

  return (
    <>
      {!isLoading && (
        <div className={style.plp}>
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
                handleOnClickPhoneSelected={handleLinkToPdpPhone}
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
