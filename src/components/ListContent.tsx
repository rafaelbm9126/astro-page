import type { FC } from "react";
import { useState, useEffect } from "react";
import _ from "lodash";
import moment from "moment";
import DataHome from "../data/data_home.json";
import { ImageContentList } from "./ImageContentList";

const INITIAL_ITEMS = 6;

interface Props {
  linkLang: string;
}

const Paginate = (to: number) => {
  const categories = [
    "office",
    "work",
    "free",
    "it",
    "app",
    "build",
    "tecnologie",
    "life",
    "computer",
    "internet",
  ];
  let collection = _.orderBy(DataHome, ["date"], ["desc"]).slice(0, to);
  return collection.map((item) => ({
    ...item,
    image: `${item.image}${_.shuffle(categories)[0]}`,
  }));
};

export const ListContent: FC<Props> = (props) => {
  const [paginate, setPaginate] = useState(INITIAL_ITEMS);
  const [data, setData] = useState(Paginate(paginate));

  function changeState() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPaginate(paginate + 6);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", _.debounce(changeState, 500));
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeState);
    };
  });

  useEffect(() => {
    console.log(paginate, data.length);
    setData(Paginate(paginate));
  }, [paginate]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pl-10">
        {data.map((post, index) => (
          <div className="lg:flex max-w-xl" key={index}>
            <ImageContentList url={post.image} />

            <div className="flex flex-col justify-between pb-6 pt-1 max-sm:pt-3 lg:mx-6">
              <a
                href={`${props.linkLang}article/${index + 1}`}
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                {post.title}
              </a>

              <div className="text-xs text-gray-400 max-sm:py-2">
                {post.description.substring(0, 150)}...
              </div>

              <span className="text-xs font-sans text-gray-400 dark:text-gray-300 text-right italic">
                {moment(post.date).format("LL")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
