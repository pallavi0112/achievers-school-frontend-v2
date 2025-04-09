// import React from "react";
// import AwardCard from "./AwardCard";

// const data = [
//     {
//         "image" : "/images/one logo.png",
//         "description" : "Pioneering Excellence in Education"
//     },
//     {
//         "image" : "/images/two.png",
//         "description" : "Recognized for Outstanding Growth & Innovation"
//     },
//     {
//         "image" : "/images/third.png",
//         "description" : "Transforming Learning with Cutting-Edge Technology"
//     }
// ]

// const Award: React.FC = () => {
//     return (
//         <section
//             className="px-[100px] py-[50px] relative bg-[#1A1B3D] min-h-screen w-full flex"
//             style={{
//                 background: "linear-gradient(0deg, rgba(26, 27, 61, 0.60) 0%, rgba(26, 27, 61, 0.60) 100%), url('/images/award section.png') lightgray 50% / cover no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 backgroundAttachment: "fixed"
//             }}
//         > 
//             {/* Inner Div */}
//             <div className="w-full h-full flex flex-col flex-grow">
//                 <div className="text-center mb-6">
//                     <h1 
//                         className="text-center text-3xl font-[500] relative mb-2 inline-block"
//                         style={{
//                             background: "linear-gradient(90deg, #FFF 0%, #E1BB1C 100%)",
//                             backgroundClip: "text",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent"
//                         }}
//                     >
//                         Awards & Achievements
//                         <div className="w-full h-[2px] flex justify-center mt-2 absolute relative"
//                             style={{
//                                 background: "linear-gradient(90deg, #FFF 0%, #E1BB1C 100%)",
//                             }}
//                         >
//                             <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#fff] rounded-full"></span>
//                             <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#E1BB1C] rounded-full"></span>
//                         </div>
//                     </h1>
//                 </div>

//                 {/* Award Cards */}
//                 <div className="flex flex-col justify-end items-center p-6 flex-grow w-full h-full mt-[200px]">
//                     <div className="flex justify-between gap-6 w-full">
//                         {data?.map((item, index) => (
//                             <AwardCard key={index} image={item?.image} description={item?.description} index={index} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Award;


import React from "react";
import AwardCard from "./AwardCard";

const data = [
    {
        "image": "/images/1st aw.png",
        "description": "Pioneering Excellence in Education"
    },
    {
        "image": "/images/2nd aw.png",
        "description": "Recognized for Outstanding Growth & Innovation"
    },
    {
        "image": "/images/3rd aw.png",
        "description": "Transforming Learning with Cutting-Edge Technology"
    }
];

const Award: React.FC = () => {
    return (
        <section
            className="relative bg-[#1A1B3D] h-auto lg:h-[85vh] flex flex-col justify-end items-center px-6 sm:px-12 lg:px-24 py-[24px] md:py-[50px]"
            style={{
                background: "linear-gradient(0deg, rgba(26, 27, 61, 0.60) 0%, rgba(26, 27, 61, 0.60) 100%), url('/images/award section.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Title */}
            <div className="text-center mb-6">
                <h1
                    className="text-3xl font-[500] relative mb-2 inline-block"
                    style={{
                        background: "linear-gradient(90deg, #FFF 0%, #E1BB1C 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Awards & Achievements
                    <div className="w-full h-[2px] flex justify-center mt-2 absolute relative"
                        style={{
                            background: "linear-gradient(90deg, #FFF 0%, #E1BB1C 100%)",
                        }}
                    >
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#fff] rounded-full"></span>
                        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#E1BB1C] rounded-full"></span>
                    </div>
                </h1>
            </div>

            {/* Awards Section at the End */}
            <div className="w-full flex-grow flex flex-col justify-end items-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {data.map((item, index) => (
                        <AwardCard key={index} image={item.image} description={item.description} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Award;
