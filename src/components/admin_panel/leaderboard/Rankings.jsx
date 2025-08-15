import React from "react";
import { Eye } from "lucide-react";

const Rankings = ({ students }) => {
  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-lg font-semibold text-sky-500">Complete Rankings</h2>
      <p className="text-gray-500 text-sm mb-4">
        All students ranked by points earned this month
      </p>

      <div className="space-y-3">
        {students.map((student, index) => {
          const isTop3 = index < 3;
          return (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl border ${
                isTop3 ? "bg-yellow-50 border-yellow-200" : "bg-blue-50 border-blue-200"
              }`}
            >
              {/* Left side */}
              <div className="flex items-center gap-3">
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
                  #{student.rank}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  {student.profileImage ? (
                    <img
                      src={student.profileImage}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-semibold">
                      {student.name[0]}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-500">Class {student.class}</p>
                    {student.icons && (
                      <p className="text-lg leading-4">{student.icons.join(" ")}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-orange-500 font-bold text-lg">{student.points}</p>
                  <p className="text-gray-400 text-xs">points</p>
                </div>

                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                  {student.accuracy}%
                </span>

                <span className="text-gray-500 text-sm">{student.stars}</span>

                <button className="flex items-center gap-1 text-sm border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100">
                  <Eye size={14} /> View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rankings;
