import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface Props {
  active: boolean;
  icon: IconDefinition;
  label: string;
}

const isActive = (active: boolean) => {
  return active
    ? {
        classLink:
          "text-gray-600 bg-gradient-to-r from-sky-600 to-cyan-400 text-white",
        classIcon: "",
      }
    : {
        classLink: "text-gray-600 hover:bg-gray-100",
        classIcon: "",
      };
};

export const ItemMenu: FC<Props> = (props) => {
  const { classLink, classIcon } = isActive(props.active);

  return (
    <>
      <a
        href="/"
        aria-label={props.label}
        className={`relative flex items-center space-x-4 px-4 py-3 ${classLink}`}
      >
        <FontAwesomeIcon
          className={`mr-1 h-6 w-6 ${classIcon}`}
          icon={props.icon}
        />
        <span className="-mr-1 font-normal">{props.label}</span>
      </a>
    </>
  );
};
