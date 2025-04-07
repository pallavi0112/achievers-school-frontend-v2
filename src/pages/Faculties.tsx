import React from "react";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import FacultyCard from "@/components/FacultyCard";

interface FacultyMember {
  name: string;
  title: string;
  image: string;
}

const FacultyMembers : FacultyMember[] = [
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    },
    {name : "Dipankar Tiwari",
      title : "Principal",
      image : "/images/faculty.png"
    }
]

const Faculties: React.FC = () => {
  return (
    <>
    <section className="max-sm:px-[10px] sm:px-[30px] lg:px-[50px] xl:px-[100px] md:py-[50px] py-[24px] bg-[#F6F6FF]">
    <SubTitle subTitle={"Meet"} textAlign="left" />
    <Title title={"Our Faculty"} textAlign="left" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {FacultyMembers.map((member: FacultyMember, index: number) => (
        <FacultyCard
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
