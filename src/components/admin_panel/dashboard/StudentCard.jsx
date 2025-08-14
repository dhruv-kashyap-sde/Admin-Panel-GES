// src/components/StudentCard.jsx
import React from "react";
import { Eye, Star } from "lucide-react";

const StudentCard = ({ student, index }) => {
  // Function to get the gradient based on position
  const getPositionGradient = (position) => {
    if (position === 0) return "from-yellow-300 to-yellow-500"; // Gold
    if (position === 1) return "from-zinc-300 to-zinc-500"; // Silver
    if (position === 2) return "from-orange-300 to-orange-500"; // Bronze
    return "from-blue-400 to-blue-500"; // Others
  };

  // Function to get the border color based on position
  const getBorderColor = (position) => {
    if (position === 0) return "border-yellow-500"; // Gold
    if (position === 1) return "border-zinc-400"; // Silver
    if (position === 2) return "border-orange-500"; // Bronze
    return "border-blue-400"; // Others
  };
  
  // Determine if accuracy is below 90%
  const isLowAccuracy = parseInt(student.accuracy) < 90;

  return (
    <div className="relative min-w-[220px] overflow-hidden max-w-[270px] bg-white shadow-md rounded-3xl p-5 flex-1 flex flex-col items-center">
      {/* Position Badge */}
      <div
        className={`absolute -top-1 -right-2 bg-gradient-to-r ${
          getPositionGradient(index)
        } text-white text-sm font-bold p-3 rounded-full shadow`}
      >
        #{student.position}
      </div>

      {/* Profile Image with Circles */}
      <div className="relative">
        <div
          className={`absolute -left-10 w-40 h-20 rounded-full ${
            index < 3 && "bg-yellow-200"
          }`}
        ></div>
        <img
          src={student.image}
          alt={student.name}
          className={`relative z-10 w-20 h-20 rounded-full border-4 bg-accent ${getBorderColor(index)} object-cover`}
        />
      </div>
      {/* Trophy Icon */}
      <div className="absolute top-0 left-0 w-6 h-6">🏆</div>

      {/* Name & Class */}
      <h2 className="mt-2 font-bold ">{student.name}</h2>
      <p className="text-gray-500 text-sm">Class {student.class}</p>

      {/* Points Badge - Apply matching gradient based on position */}
      <div className={`mt-2 bg-gradient-to-r ${getPositionGradient(index)} text-white font-semibold px-3 py-1 rounded-full shadow`}>
        {student.points} pts
      </div>

      {/* Accuracy Badge - Change to blue if less than 90% */}
      <div className={`mt-2 ${isLowAccuracy ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"} font-semibold px-3 py-1 text-sm rounded-full`}>
        {student.accuracy}% Accuracy
      </div>

      {/* Stars & Streak */}
      <div className="mt-2 flex items-center text-gray-600 text-sm gap-2">
        <Star size={16} className="text-yellow-400" />
        <span>{student.stars}</span>
        <span className="text-gray-400">•</span>
        <span>{student.streak} day streak</span>
      </div>

      {/* View Profile Button */}
      <button className="mt-2 flex items-center gap-2 px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
        <Eye size={18} />
        <span className="text-sm font-medium">View Profile</span>
      </button>
    </div>
  );
};

export default StudentCard;
