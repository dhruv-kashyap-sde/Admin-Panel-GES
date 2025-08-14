import { Eye } from "lucide-react";

export default function StudentGrid() {
  // Sample students data based on the image provided
  const students = [
    {
      id: 1,
      name: "Ahan Ku...",
      class: "Class 8",
      accuracy: 96,
      xp: 830,
      image: "https://i.pravatar.cc/100?img=11",
    },
    {
      id: 2,
      name: "Hvrf",
      class: "Class 7",
      accuracy: 94,
      xp: 295,
      image: null, // Will use initials
      initials: "HV",
    },
    {
      id: 3,
      name: "Flower Girl",
      class: "Class 6",
      accuracy: 93,
      xp: 190,
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 4,
      name: "12 June C...",
      class: "Class 5",
      accuracy: 92,
      xp: 165,
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 5,
      name: "Hcdff",
      class: "Class 4",
      accuracy: 91,
      xp: 160,
      image: "https://i.pravatar.cc/100?img=30",
    },
    {
      id: 6,
      name: "Eva",
      class: "Class 3",
      accuracy: 90,
      xp: 145,
      image: "https://i.pravatar.cc/100?img=9",
    },
    {
      id: 7,
      name: "Sophia Kim",
      class: "Class 2",
      accuracy: 89,
      xp: 138,
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      id: 8,
      name: "James Wi...",
      class: "Class 6",
      accuracy: 88,
      xp: 132,
      image: "https://i.pravatar.cc/100?img=15",
    },
    {
      id: 9,
      name: "Olivia Davis",
      class: "Class 5",
      accuracy: 87,
      xp: 128,
      image: "https://i.pravatar.cc/100?img=16",
    },
    {
      id: 10,
      name: "Liam Garcia",
      class: "Class 1",
      accuracy: 86,
      xp: 120,
      image: "https://i.pravatar.cc/100?img=17",
    },
    {
      id: 11,
      name: "Ava Marti...",
      class: "Class 3",
      accuracy: 85,
      xp: 4100,
      image: "https://i.pravatar.cc/100?img=18",
    },
    {
      id: 12,
      name: "Noah Tho...",
      class: "Class 4",
      accuracy: 83,
      xp: 3950,
      image: "https://i.pravatar.cc/100?img=19",
    },
  ];

  // Function to determine badge color based on accuracy
  const getBadgeColor = (accuracy) => {
    if (accuracy >= 90) return "bg-green-100 text-green-500"; // Green for ≥90%
    if (accuracy >= 80) return "bg-blue-100 text-blue-500"; // Blue for 80-89%
    return "bg-orange-500"; // Orange for <80%
  };

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
            />
          </div>

          {/* Class Filter */}
          <div className="relative">
            <button className="rounded-md border border-gray-300 px-4 py-2 flex items-center gap-2">
              <span>All Classes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student) => (
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
                  )} px-2 py-0.5 rounded-full  text-xs font-bold mt-1 w-fit`}
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
