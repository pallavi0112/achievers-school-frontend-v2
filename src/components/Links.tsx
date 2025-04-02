import Image from 'next/image'
import React from 'react'

const Links = () => {
    return (
        <div className='max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] pt-[24px]'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white text-sm py-2">
            {[
                { img: "/images/Google forms.png", text: "ADMISSION FORM (2025-26)" },
                { img: "/images/Family.png", text: "PARENT/STUDENT LOGIN" },
                { img: "/images/Family.png", text: "PARENT/STUDENT LOGIN" },
                { img: "/images/Family.png", text: "PARENT/STUDENT LOGIN" },
            ].map((item, index) => (
                <div key={index} className="flex justify-center items-center border-2 gap-2 border-[#CAC9FF] bg-[#EEF] text-[#3B39B5] rounded-lg p-2">
                <Image src={item.img} width={35} height={35} alt={item.text} />
                <p className="text-center text-[10px]">{item.text}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Links