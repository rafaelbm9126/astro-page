import _ from "lodash";
import moment from "moment";
import DataHome from "../data/data_home.json";
import { ImageContentList } from "./ImageContentList";

export const ListContent = () => {
  return (
    <>
      <div class="grid grid-cols-1 gap-8 mt-8 md:mt-60 md:grid-cols-2">
        {_.orderBy(DataHome, ["date"], ["desc"])
          .slice(0, 6)
          .map((post) => (
            <div class="lg:flex max-w-xl">
              <ImageContentList url={post.image} />

              <div class="flex flex-col justify-between pb-6 pt-1 max-sm:pt-3 lg:mx-6">
                <a
                  href="/"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  {post.title}
                </a>

                <div class="text-xs text-gray-400 max-sm:py-2">
                  {post.description.substring(0, 150)}...
                </div>

                <span class="text-xs font-sans text-gray-400 dark:text-gray-300 text-right italic">
                  {moment(post.date).format("LL")}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
