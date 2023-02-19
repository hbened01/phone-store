import { h } from "preact";
import { Router } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { addMinutes, getTime } from "date-fns";
import Header from "./header";
import { Context } from "@/contexts";
import { getListPlp } from "@/services";

// Code-splitting is automated for `routes` directory
import Plp from "@/routes/plp";

const App = () => {
  const [phoneListStorage, setPhoneListStorage] = useState(JSON.parse(
    window.localStorage.getItem("DATA_PHONE_STORE")
  ) || []);

  useEffect(() => {
    // Get data list:
    if (
      getTime(new Date()) > phoneListStorage?.dateControl ||
      !phoneListStorage?.dataListPhones
    ) {
      getListPlp()
        .then((data) => {
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
        .catch((error) => console.log(error));
      return;
    }
    setTimeout(() => {
      setPhoneListStorage(phoneListStorage);
    }, 500);
  }, [phoneListStorage]);

  return (
    <div id="app">
      <Context.Provider
        value={{
          phoneListStorage,
          setPhoneListStorage,
        }}
      >
        <Header />
        <main>
          <Router>
            <Plp path="/" />
          </Router>
        </main>
      </Context.Provider>
    </div>
  );
};

export default App;
