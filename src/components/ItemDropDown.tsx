import type { FC } from "react";

interface Props {
  label: string;
  link: string;
}

export const ItemDropDown: FC<Props> = (props) => {
  return (
    <>
      <div className="py-1">
        <a
          href={props.link}
          className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
          role="menuitem"
        >
          {props.label}
        </a>
      </div>
    </>
  );
};
