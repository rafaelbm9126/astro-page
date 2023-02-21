import type { FC, ReactNode } from "react";
import { ItemDropDown } from "./ItemDropDown";

interface Props {
  children?: ReactNode;
  collection: Array<{
    label: string;
    link: string;
  }>;
}

export const DropDown: FC<Props> = (props) => {
  return (
    <>
      <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
        <div className="flex items-center justify-center">
          <div className="relative inline-block text-left dropdown">
            <span className="rounded-md shadow-sm">
              <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                {props.children}
              </button>
            </span>
            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1"
                id="headlessui-menu-items-117"
                role="menu"
              >
                {props.collection.map((item, index) => (
                  <ItemDropDown {...item}  key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
