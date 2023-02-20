import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getProductByIdPdp } from "@/services";
import { Image, PdpAction, PdpDescription } from "@/components/";
import style from "./style.css";

const Pdp = ({ id }) => {
  const [productDetail, setProducDetail] = useState({});
  useEffect(() => {
    getProductByIdPdp(id)
      .then((data) => {
        setProducDetail(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, [id]);
  return (
    <div className={style.pdp}>
      <section>
        <div className="px-10 py-10 mx-auto">
          <div className="mx-auto flex flex-wrap justify-between">
            <Image
              {...{
                wrapperClass: "!flex flex-col justify-center items-center md:w-1/2 w-full",
                delayTime: 1000,
                effect: "blur",
                imgUrl: productDetail?.imgUrl || "",
                id: productDetail?.id || "",
              }}
            />
            <div className="md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <PdpDescription {...productDetail} />
              <PdpAction {...productDetail} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pdp;
