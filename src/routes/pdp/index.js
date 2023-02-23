import { h } from "preact";
import { useEffect, useState, useRef, useContext } from "preact/hooks";
import { route } from "preact-router";
import { addHours, getTime } from "date-fns";
import { getProductByIdPdp, postToCart } from "@/services";
import { Image, PdpAction, PdpDescription, Loader } from "@/components/";
import { isObjectEmpty } from "@/utils";
import { Context } from "@/contexts";
import { PREACT_APP_PUBLIC_PATH } from "@/constants";
import style from "./style.css";

const Pdp = ({ id }) => {
  const [productDetail, setProducDetail] = useState({});
  const productsDetailData = useRef(null);
  const { setCartListStorage, setNotify } = useContext(Context);

  // GET DATA FROM LOCAL STORAGE:
  productsDetailData.current = JSON.parse(
    window.localStorage.getItem("DATA_PRODUCTS_DETAIL_STORE")
  );

  // ADD PRODUCT TO CART SERVICE:
  const handleAddProductToCart = (product) => {
    postToCart(product)
      .then(() => {
        // SET AND GET UNIQUE VALUES
        setCartListStorage((prevState) => {
          const newCartListData = Object.values(
            [...prevState, product].reduce((a, p) => {
              a[`${p.id}|${p.colorCode}|${p.storageCode}`] = p;
              return a;
            }, {})
          );
          // SET LIST DATA CART INTO LOCAL STORAGE:
          window.localStorage.setItem(
            "DATA_CART_ITEMS",
            JSON.stringify(newCartListData)
          );
          return newCartListData;
        });
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
      .finally(() => {
        // GO TO HOME:
        route(`${PREACT_APP_PUBLIC_PATH}`);
      });
  };

  useEffect(() => {
    // FIND INDEX OF PRODUCT:
    const isMatchIndex = productsDetailData.current?.findIndex(
      ({ productId }) => productId === id
    );
    if (
      !productsDetailData.current ||
      isMatchIndex === -1 ||
      getTime(new Date()) >
        productsDetailData.current[isMatchIndex]?.timeControl
    ) {
      getProductByIdPdp(id)
        .then((data) => {
          const timeControl = getTime(addHours(new Date(), 1)); // CONTROL EPISODE API TIME 1 HRS.
          const newDataForStorage = [
            ...(productsDetailData.current || []),
            ...[
              {
                timeControl,
                productId: id,
                dataProduct: data,
              },
            ],
          ];
          // SET DATA IN LOCALSTORAGE:
          window.localStorage.setItem(
            "DATA_PRODUCTS_DETAIL_STORE",
            JSON.stringify(newDataForStorage)
          );
          // SET DATA PRODUCT IN STATE:
          setProducDetail(data);
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
        .finally(() => {});
      return;
    }
    setTimeout(() => {
      // SET DATA PRODUCT IN STATE:
      setProducDetail(productsDetailData.current[isMatchIndex]?.dataProduct);
    }, 500);
  }, [id, setNotify]);
  return (
    <>
      {!isObjectEmpty(productDetail) && (
        <div className={style.pdp}>
          <section>
            <div className="px-10 py-10 mx-auto">
              <div className="mx-auto flex flex-wrap justify-between">
                <Image
                  {...{
                    wrapperClass:
                      "!flex flex-col justify-center items-center md:w-1/2 w-full",
                    delayTime: 1000,
                    effect: "blur",
                    imgUrl: productDetail?.imgUrl || "",
                    id: productDetail?.id || "",
                  }}
                />
                <div className="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <PdpDescription {...productDetail} />
                  <PdpAction
                    handleAddProductToCart={handleAddProductToCart}
                    {...productDetail}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {isObjectEmpty(productDetail) && <Loader />}
    </>
  );
};

export default Pdp;
