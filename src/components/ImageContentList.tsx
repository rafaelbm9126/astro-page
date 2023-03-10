import type { FC } from "react";
import { useState } from "react";
import { LazyLoaderImage } from "./LazyLoaderImage";

interface Props {
  url: string;
}

export const ImageContentList: FC<Props> = (props) => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div className="h-56 lg:w-64">
        {!load && <LazyLoaderImage />}
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
