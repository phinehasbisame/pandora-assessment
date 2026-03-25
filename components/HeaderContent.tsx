import { HeaderContenctProps } from "@/interfaces";
import React, { FC } from "react";

const HeaderContent: FC<HeaderContenctProps> = ({ title, content }) => {
  return (
    <h2 className="text-gray-700 text-sm">
      {title}: <span className="text-black font-medium">{content}</span>
    </h2>
  );
};

export default HeaderContent;
