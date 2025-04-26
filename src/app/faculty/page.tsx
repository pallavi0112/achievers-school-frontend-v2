import React from "react";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import FacultyCard from "@/components/FacultyCard";
import Links from "@/components/Links";

interface FacultyMember {
  name: string;
  title: string;
  image: string;
}

const FacultyMembers : FacultyMember[] = [
    {name : "Mr. Ashok Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Shikha Sinha",
      title : "Head Master",
      image : "/images/faculty.png"
    },
    {name : "Maya Goswami",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Renu Jaiswal",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Savita Toppo",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Pooja Jaiswal",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Krishna Kumar",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Roshni Rana",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Pushpendra Singh",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Shakuntala Dewangan",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Durga Mishra",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Jainab Khatun",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Prakhar Pandey",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Niraj Kumar Singh",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Shashi Nirmalkar",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Nidhi Gupta",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Rohanee Prasad Mahra",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Shivani Das",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Riya Gupta",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : " Vishwanath Ram",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Sujata Singh",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Ranjana Chourasia",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Priyanka Gupta",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
    {name : "Prerna Bharti",
      title : "Teacher",
      image : "/images/teacher.webp"
    },
  ]

const Faculties: React.FC = () => {
  return (
    <>
    <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
    <Links/>
    <SubTitle subTitle={"Meet"} textAlign="left" />
    <Title title={"Our Faculty"} textAlign="left" />
    <p className="text-[#525252] md:text-[20px] text-[16px] my-4">Welcome to Achievers International School. We strive to provide </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {FacultyMembers.map((member: FacultyMember, index: number) => (
        <FacultyCard
        key={index}
        image={member.image}
        index={index}
        name={member.name}
        designation={member.title}
        />
      ))}
    </div>
    </section>
    </>
  );
};

export default Faculties;
