import React from "react";
import { Eye } from "lucide-react";
import { useStudentContext } from "@/context/StudentContext";

const Rankings = ({ students }) => {
  const { getStats } = useStudentContext();

  const { topScorer, topStreak, topLessons, topAccuracy } = getStats();

  return (
    <div className="w-full mx-auto sm:p-2 md:p-4">
      <h2 className="text-lg font-semibold text-gradient">Complete Rankings</h2>
      <p className="text-gray-500 text-sm mb-4">
        All students ranked by points earned this month
      </p>

      <div className="space-y-3">
        {students.map((student, index) => {
          const isTop3 = index < 3;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-2 justify-between p-4 rounded-xl border ${
                isTop3
                  ? "bg-yellow-50 border-yellow-200"
                  : "bg-blue-50 border-blue-200"
              }`}
            >
              {/* Left side */}
              <div className="flex items-center w-full gap-3">
                {/* Rank badge */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm ${
                    isTop3
                      ? index === 0
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500"
                        : index === 1
                        ? "bg-gradient-to-br from-gray-300 to-gray-400"
                        : "bg-gradient-to-br from-orange-400 to-orange-500"
                      : "bg-blue-500"
                  }`}
                >
                  {isTop3
                    ? index === 0
                      ? "🏆"
                      : index === 1
                      ? "🥈"
                      : "🥉"
                    : "#" + student.position}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  {student.image ? (
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-semibold">
                      {student.name[0]}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-gray-900">
                      {student.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Class {student.class}
                    </p>
                    {student.icons && (
                      <p className="text-lg leading-4">
                        {student.icons.join(" ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex   justify-between items-center w-full md:w-auto gap-3">
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-orange-500 font-bold text-lg">
                      {student.points}
                    </p>
                    <p className="text-gray-400 text-xs">points</p>
                  </div>

                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                    {student.accuracy}%
                  </span>

                  <span className="text-gray-500 text-sm"> ⭐ {student.stars}</span>
                </div>
                <button className="flex items-center gap-1 text-sm border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
                  <Eye size={14} /> View
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* stats cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:flex-row justify-center gap-4">
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 shadow-lg border rounded-md h-40 ">
          🏆
          <h1 className="font-bold ">Top Scorer</h1>
          <span className="text-sm ">{topScorer?.name} </span>
          <span className="text-amber-500">{topScorer?.points} pts</span>
        </div>
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 shadow-lg border rounded-md h-40 ">
          🔥
          <h1 className="font-bold ">Top Streak</h1>
          <span className="text-sm ">{topStreak?.name} </span>
          <span className="text-green-500">{topStreak?.streak} days</span>
        </div>
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 shadow-lg border rounded-md h-40 ">
          ⚡<h1 className="font-bold ">Top Lessons</h1>
          <span className="text-sm">{topLessons?.name}</span>
          <span className=" text-blue-500">{topLessons?.stars} Lessons</span>
        </div>
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 shadow-lg border rounded-md h-40 ">
          💯<h1 className="font-bold ">Top Accuracy</h1>
          <span className="text-sm ">{topAccuracy?.name} </span>
          <span className="text-purple-500">{topAccuracy?.accuracy}%</span>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
