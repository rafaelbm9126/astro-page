import { useState } from "react";
import { LazyLoaderImage } from "./LazyLoaderImage";

interface Props {
  url: string;
}

export const ImageContentList = (props: Props) => {
  const [load, setLoad] = useState(false);
  return (
    <>
      {!load && <LazyLoaderImage />}
      <img
        className={`object-cover w-full h-56 rounded-lg lg:w-64 ${
          !load ? "hidden" : "block"
        }`}
        src={props.url}
        onLoad={() => {
          setLoad(true);
        }}
      />
    </>
  );
};
