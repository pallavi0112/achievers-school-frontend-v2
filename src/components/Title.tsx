import React from 'react'

interface TitleProps {
    title : string;
    textAlign : string;
}
const Title:React.FC<TitleProps> = ({title,textAlign}) => {
  return (
    <h2 className={`relative text-[#3F4092] text-2xl font-bold my-1 pb-2 before:absolute  before:w-[40%] before:h-[4px] before:rounded-xs before:bg-[#3F4092] ${
        textAlign === "left"
          ? "text-left before:left-0 before:bottom-0"
          : textAlign === "center"
          ? "text-center"
          : "text-right before:right-0 before:bottom-0"
      }`}>
    {title}
    </h2>
  )
}

export default Title