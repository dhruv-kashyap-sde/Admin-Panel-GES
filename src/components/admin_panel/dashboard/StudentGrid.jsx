import { Eye } from "lucide-react";
import { useStudentContext } from "../../../context/StudentContext";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";

export default function StudentGrid() {
  const { students } = useStudentContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");

  // Format student names to match the display format in the grid
  const formatStudentName = (name) => {
    if (name.length > 10) {
      return `${name.substring(0, 8)}...`;
    }
    return name;
  };

  // Format class to display format
  const formatClass = (classNum) => `Class ${classNum}`;

  // Filter students based on search query and selected class
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesClass =
      selectedClass === "All Classes" ||
      formatClass(student.class) === selectedClass;
    return matchesSearch && matchesClass;
  });

  // Prepare students for display in grid
  const displayStudents = filteredStudents.map((student) => ({
    id: student.id,
    name: formatStudentName(student.name),
    class: formatClass(student.class),
    accuracy: student.accuracy,
    xp: student.xp,
    image: student.image,
    initials: student.initials || student.name.substring(0, 2).toUpperCase(),
  }));

  // Function to determine badge color based on accuracy
  const getBadgeColor = (accuracy) => {
    if (accuracy >= 90) return "bg-green-100 text-green-500"; // Green for ≥90%
    if (accuracy >= 80) return "bg-blue-100 text-blue-500"; // Blue for 80-89%
    return "bg-orange-100 text-orange-500"; // Orange for <80%
  };

  // Generate all class options from student data
  const classOptions = [
    "All Classes",
    ...new Set(students.map((student) => formatClass(student.class))),
  ];

  return (
    <div className="bg-surface rounded-xl shadow-sm p-6 border border-border">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="mb-6 ">
          <h2 className="text-2xl font-bold text-gradient">All Students</h2>
          <p className="text-sm text-gray-500">
            Complete student directory with performance details
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex items-center  mb-6 flex-wrap gap-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search students..."
              className="rounded-md border border-gray-300 px-4 py-2 w-[250px] max-w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
          >
            <div className="flex">
              {/* Column 1: Profile Image or Initials */}
              <div className="mr-3">
                {student.image ? (
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                    {student.initials}
                  </div>
                )}
              </div>

              {/* Column 2: Name, Class, and Percentage */}
              <div className="flex flex-col justify-between flex-1">
                <h3 className="font-semibold text-gray-800 truncate">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-500">{student.class}</p>
                <span
                  className={`${getBadgeColor(
                    student.accuracy
                  )} px-2 py-0.5 rounded-full text-xs font-bold mt-1 w-fit`}
                >
                  {student.accuracy}%
                </span>
              </div>

              {/* Column 3: XP and View Button */}
              <div className="flex flex-col items-end justify-between">
                <button className="bg-gray-100 rounded-full p-2 shadow-sm hover:bg-gray-200 transition">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-sm text-gray-500 mt-auto">
                  {student.xp} XP
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="rounded-md border border-gray-300 px-6 py-2 hover:bg-gray-100 transition font-medium text-gray-700">
          Load More Students (233 remaining)
        </button>
      </div>
    </div>
  );
}
