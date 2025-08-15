import React, { useState } from "react";
import { useStudentContext } from "../../../context/StudentContext";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Header from "../Header";
import Rankings from "./Rankings";

const Leaderboard = () => {
  const { getTopPerformers, students } = useStudentContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  const topPerformers = getTopPerformers(3);

  // Rearrange for podium display: 2nd, 1st, 3rd
  const podiumOrder = [topPerformers[1], topPerformers[0], topPerformers[2]];

  return (
    <div className="flex flex-col space-y-4">
      <Header
        title="School Leaderboard"
        subtitle="Celebrating our top performers and encouraging healthy competition."
        isDashboard={true}
      />
      {/* Podium Section */}
      <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-t-2xl p-6 text-center border-b">
        <h1 className="text-xl font-semibold text-blue-600 mb-2">
          🏅 Champions Podium 🏅
        </h1>
        <p className="text-orange-600 font-medium">
          This month's top 3 achievers
        </p>
      </div>

      <div className="bg-white rounded-b-2xl shadow-lg p-8 mb-8">
        <div className="flex items-end justify-center gap-8">
          {/* 2nd Place - Left */}
          <div className="flex flex-col items-center relative">
            {/* Medal */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-400 rounded-md flex items-center justify-center text-white font-bold text-sm z-10">
              🥈
            </div>
            {/* Profile Circle */}
            <div className="w-20 h-20 rounded-full border-4 border-gray-400 overflow-hidden mb-2">
              <img
                src={podiumOrder[0]?.image}
                alt={podiumOrder[0]?.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Podium Bar */}
            <div className="bg-gradient-to-b from-[#6a717d] to-[#9ba2ae] text-white text-center rounded-t-2xl w-22 sm:w-32 md:w-22 lg:w-32 h-40 flex flex-col justify-center">
              <h3 className="font-semibold text-lg">{podiumOrder[0]?.name}</h3>
              <p className="text-sm opacity-90">
                Class {podiumOrder[0]?.class}
              </p>
              <p className="text-lg font-bold">{podiumOrder[0]?.points} pts</p>
            </div>
          </div>

          {/* 1st Place - Center */}
          <div className="flex flex-col items-center relative">
            {/* Crown/Trophy */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl z-10">
              🏆
            </div>
            {/* Profile Circle */}
            <div className="w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden mb-2">
              <img
                src={podiumOrder[1]?.image}
                alt={podiumOrder[1]?.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Podium Bar */}
            <div className="bg-gradient-to-b from-[#d6a913] to-[#facd11] text-white text-center rounded-t-2xl w-30 sm:w-40 md:w-30 lg:w-40 h-60 flex flex-col justify-center">
              <h3 className="font-semibold text-lg">{podiumOrder[1]?.name}</h3>
              <p className="text-sm opacity-90">
                Class {podiumOrder[1]?.class}
              </p>
              <p className="text-lg font-bold">{podiumOrder[1]?.points} pts</p>
              <div className="flex justify-center gap-1 mt-1">🏆 🔥 ⭐</div>
            </div>
          </div>

          {/* 3rd Place - Right */}
          <div className="flex flex-col items-center relative">
            {/* Medal */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
              🥉
            </div>
            {/* Profile Circle */}
            <div className="w-20 h-20 rounded-full border-4 border-orange-400 overflow-hidden mb-2">
              <img
                src={podiumOrder[2]?.image}
                alt={podiumOrder[2]?.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Podium Bar */}
            <div className="bg-gradient-to-b from-[#f67116] to-[#f29546] text-white text-center rounded-t-2xl w-22 sm:w-32 md:w-22 lg:w-32 h-40 flex flex-col justify-center">
              <h3 className="font-semibold text-lg">{podiumOrder[2]?.name}</h3>
              <p className="text-sm opacity-90">
                Class {podiumOrder[2]?.class}
              </p>
              <p className="text-lg font-bold">{podiumOrder[2]?.points} pts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-surface p-4 shadow-lg rounded-md">
        {/* Search Bar */}
        <div className="flex-1 min-w-[300px]">
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4 items-center">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="overflow-ellipsis min-w-[50px] rounded-md border-gray-300">
              <SelectValue placeholder="All Classes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Classes">All Classes</SelectItem>
              <SelectItem value="Class 1">Class 1</SelectItem>
              <SelectItem value="Class 2">Class 2</SelectItem>
              <SelectItem value="Class 3">Class 3</SelectItem>
              <SelectItem value="Class 4">Class 4</SelectItem>
              <SelectItem value="Class 5">Class 5</SelectItem>
              <SelectItem value="Class 6">Class 6</SelectItem>
              <SelectItem value="Class 7">Class 7</SelectItem>
              <SelectItem value="Class 8">Class 8</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="overflow-ellipsis min-w-[50px] rounded-md border-gray-300">
              <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Month">Last Month</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
              <SelectItem value="All Time">All Time</SelectItem>
            </SelectContent>
          </Select>

          <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm hidden sm:block font-medium">More Filters</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center justify-between bg-surface p-4 shadow-lg rounded-md">
        {/* Rankings Section */}
        <Rankings students={students} />
      </div>
    </div>
  );
};

export default Leaderboard;
