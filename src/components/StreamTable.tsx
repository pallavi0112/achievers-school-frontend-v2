import React from "react";

interface Subject {
  id: number;
  name: string;
}

interface StreamTableProps {
  streamName: string;
  subjects: Subject[];
}

const StreamTable: React.FC<StreamTableProps> = ({ streamName, subjects }) => {
  return (
    <div className="rounded-t-lg overflow-hidden w-full my-[20px]">
      {/* Table Header */}
      <div className="bg-[#2F2F80] text-white font-bold text-lg p-3">{streamName}</div>

      {/* Table Body */}
      <table className="w-full border-collapse">
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={subject.id} className={index % 2 === 0 ? "bg-white" : "bg-[#F6F6FF]"}>
              <td className="border p-3 text-center">{subject.id}</td>
              <td className="border p-3">{subject.name}</td>
              {subjects[index + 3] && (
                <>
                  <td className="border p-3 text-center">{subjects[index + 3].id}</td>
                  <td className="border p-3">{subjects[index + 3].name}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default StreamTable;
