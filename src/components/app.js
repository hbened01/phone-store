import { h } from "preact";
import { Router } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { addHours, getTime } from "date-fns";
import { Header, Toast } from "@/components";
import { Context } from "@/contexts";
import { getListPlp } from "@/services";

// Code-splitting is automated for `routes` directory
import Plp from "@/routes/plp";
import Pdp from "@/routes/pdp";

const App = () => {
  const [phoneListStorage, setPhoneListStorage] = useState(
    JSON.parse(window.localStorage.getItem("DATA_PHONE_STORE")) || []
  );

  const [isLoading, setIsLoading] = useState(false);

  const [cartListStorage, setCartListStorage] = useState(
    JSON.parse(window.localStorage.getItem("DATA_CART_ITEMS")) || []
  );

  const [notify, setNotify] = useState({
    type: "",
    message: "",
    isNotify: false,
    notifyTimeout() {
      setTimeout(() => {
        setNotify((prevState) => ({
          ...prevState,
          ...{
            type: "",
            message: "",
            isNotify: false,
          },
        }));
      }, 3000);
    },
  });

  useEffect(() => {
    setIsLoading(true);
    // Get data list:
    if (
      getTime(new Date()) > phoneListStorage?.timeControl ||
      !phoneListStorage?.dataListPhones
    ) {
      getListPlp()
        .then((data) => {
          setIsLoading(true);
          const dateControlApiTime = getTime(addHours(new Date(), 1)); // CONTROL API TIME 1 HOUR.
          const dataStorage = {
            timeControl: dateControlApiTime,
            dataListPhones: data,
          };
          // SET DATA IN LOCALSTORAGE:
          window.localStorage.setItem(
            "DATA_PHONE_STORE",
            JSON.stringify(dataStorage)
          );
          // SET DATA IN THE STATE:
          setPhoneListStorage(dataStorage);
          // SET NOTIFY:
          setNotify((prevState) => ({
            ...prevState,
            ...{
              type: "success",
              message: "List phone was successfully updated",
              isNotify: true,
            },
          }));
        })
        .catch((error) => {
          // SET NOTIFY:
          setNotify((prevState) => ({
            ...prevState,
            ...{
              type: "danger",
              message: error.message,
              isNotify: true,
            },
          }));
        })
        .finally(() => setIsLoading(false));
      return;
    }
    setTimeout(() => {
      setPhoneListStorage(phoneListStorage);
      setIsLoading(false);
    }, 1000);
  }, [phoneListStorage]);

  return (
    <div id="app">
      <Context.Provider
        value={{
          phoneListStorage,
          setPhoneListStorage,
          isLoading,
          setIsLoading,
          notify,
          setNotify,
          cartListStorage,
          setCartListStorage,
        }}
      >
        <Header />
        <main>
          <Router>
            <Plp path="phone-store/" />
            <Pdp path="phone-store/pdp/:id" />
          </Router>
        </main>
        {notify?.isNotify && (
          <Toast
            handleClosed={() =>
              setNotify((prevState) => ({
                ...prevState,
                ...{
                  type: "",
                  message: "",
                  isNotify: false,
                },
              }))
            }
            {...notify}
          />
        )}
      </Context.Provider>
    </div>
  );
};

export default App;
