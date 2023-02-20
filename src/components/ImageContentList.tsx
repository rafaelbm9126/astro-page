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
      <div className="h-56 lg:w-64">
        <img
          className={`object-cover w-full h-full rounded-lg ${
            !load ? "hidden" : "block"
          }`}
          src={props.url}
          onLoad={() => {
            setLoad(true);
          }}
        />
      </div>
    </>
  );
};
