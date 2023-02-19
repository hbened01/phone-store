import { h } from "preact";
import { Router } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { addMinutes, getTime } from "date-fns";
import { Header } from "@/components";
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

  useEffect(() => {
    setIsLoading(true);
    // Get data list:
    if (
      getTime(new Date()) > phoneListStorage?.dateControl ||
      !phoneListStorage?.dataListPhones
    ) {
      getListPlp()
        .then((data) => {
          setIsLoading(true);
          const dateControlApiTime = getTime(addMinutes(new Date(), 15)); // CONTROL API TIME 15 MIN.
          const dataStorage = {
            dateControl: dateControlApiTime,
            dataListPhones: data,
          };
          // SET DATA IN LOCALSTORAGE:
          window.localStorage.setItem(
            "DATA_PHONE_STORE",
            JSON.stringify(dataStorage)
          );
          // SET DATA IN THE STATE:
          setPhoneListStorage(dataStorage);
        })
        .catch((error) => console.log(error))
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
        }}
      >
        <Header />
        <main>
          <Router>
            <Plp path="/" />
				    <Pdp path="/pdp/:id" />
          </Router>
        </main>
      </Context.Provider>
    </div>
  );
};

export default App;
