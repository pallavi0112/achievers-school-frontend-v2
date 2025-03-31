import React from "react";

interface TagProps {
  label: string;
  textColor?: string;
  backgroundColor?: string;
}

const Tag: React.FC<TagProps> = ({ label, textColor = "text-white", backgroundColor = "bg-blue-500" }) => {
  return (
    <span className={`px-2 py-1 rounded-md text-sm font-[500] uppercase tracking-[1.2] ${textColor} ${backgroundColor}`}>
      {label}
    </span>
  );
};

export default Tag;
