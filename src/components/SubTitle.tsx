import React from 'react'

interface SubTitleProps {
    subTitle : string;
    textAlign : string;
}
const SubTitle:React.FC<SubTitleProps> = ({subTitle, textAlign}) => {
  return (
    <p className={`text-[#6566A8] text-[20px] font-[500] ${
        textAlign === "left"
          ? "text-left"
          : textAlign === "center"
          ? "text-center"
          : "text-right"
      }`}>{subTitle}</p>
  )
}

export default SubTitle