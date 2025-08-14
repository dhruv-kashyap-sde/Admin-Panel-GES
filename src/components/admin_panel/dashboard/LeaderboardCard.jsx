import StudentCard from "./StudentCard";

export default function LeaderboardCard() {
//   const students = [
//     { name: "Ahan Kumar", points: 830, accuracy: "96%", streak: "15 days" },
//     { name: "Hvf", points: 295, accuracy: "94%", streak: "6 days" },
//     { name: "Flower Girl", points: 100, accuracy: "93%", streak: "4 days" },
//     { name: "12 June Child Test", points: 160, accuracy: "92%", streak: "5 days" },
//     { name: "Hcdff", points: 140, accuracy: "91%", streak: "3 days" },
//     { name: "Eva", points: 145, accuracy: "90%", streak: "6 days" },
//     { name: "Sophia Kim", points: 138, accuracy: "89%", streak: "5 days" },
//     { name: "James Wilson", points: 132, accuracy: "88%", streak: "4 days" },
//     { name: "Olivia Davis", points: 128, accuracy: "87%", streak: "3 days" },
//     { name: "Liam Garcia", points: 120, accuracy: "86%", streak: "2 days" },
//   ]

//   const studentData = {
//   position: 1,
//   name: "Ahan Kumar",
//   class: 8,
//   points: 830,
//   accuracy: 96,
//   stars: 68,
//   streak: 15,
//   image: "https://via.placeholder.com/150", // replace with actual
// };
const studentData = [
  {
    position: 1,
    name: "Ahan Kumar",
    class: 8,
    points: 830,
    accuracy: 96,
    stars: Math.floor(830 / 12.2),       // → 68
    streak: 15,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 2,
    name: "Hvf",
    class: 8,
    points: 295,
    accuracy: 94,
    stars: Math.floor(295 / 12.2),       // → 24
    streak: 6,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 3,
    name: "12 June Child Test",
    class: 8,
    points: 160,
    accuracy: 92,
    stars: Math.floor(160 / 12.2),       // → 13
    streak: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 4,
    name: "Flower Girl",
    class: 8,
    points: 100,
    accuracy: 93,
    stars: Math.floor(100 / 12.2),       // → 8
    streak: 4,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 5,
    name: "Eva",
    class: 8,
    points: 145,
    accuracy: 90,
    stars: Math.floor(145 / 12.2),       // → 11
    streak: 6,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 6,
    name: "Hcdff",
    class: 8,
    points: 140,
    accuracy: 91,
    stars: Math.floor(140 / 12.2),       // → 11
    streak: 3,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 7,
    name: "Sophia Kim",
    class: 8,
    points: 138,
    accuracy: 89,
    stars: Math.floor(138 / 12.2),       // → 11
    streak: 5,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 8,
    name: "James Wilson",
    class: 8,
    points: 132,
    accuracy: 88,
    stars: Math.floor(132 / 12.2),       // → 10
    streak: 4,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 9,
    name: "Olivia Davis",
    class: 8,
    points: 128,
    accuracy: 87,
    stars: Math.floor(128 / 12.2),       // → 10
    streak: 3,
    image: "https://via.placeholder.com/150"
  },
  {
    position: 10,
    name: "Liam Garcia",
    class: 8,
    points: 120,
    accuracy: 86,
    stars: Math.floor(120 / 12.2),       // → 9
    streak: 2,
    image: "https://via.placeholder.com/150"
  }
];

  const getTop = (data) => {
    const topStudent = studentData.find(student => student.points === data);
    return topStudent ? topStudent.name : "Unknown";
  };

  return (
    <div className="bg-surface rounded-xl shadow-sm p-6 border border-border">
      <h3 className="font-bold text-gradient text-2xl">🏆 School Leaderboard - Top 10 Champions</h3>
      <p className="text-muted text-sm mb-8">Our highest performing students this month with points and achievements.</p>

      <div className="flex flex-wrap justify-center gap-3">
        {studentData.map((student, index) => (
          <StudentCard key={index} student={student} index={index} />
        ))}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
        <div className="flex flex-col justify-center items-center gap-1 flex-1 bg-amber-100 border-amber-300 border rounded-md h-40 ">
          🏆
        <h1 className="text-amber-700 font-bold ">Top Scorer</h1>
        <span className="text-sm text-amber-500">{studentData[0]?.name} - {studentData[0]?.points} pts</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 flex-1 bg-green-100 border-green-300 border rounded-md h-40 ">
          🔥
        <h1 className="text-green-700 font-bold ">Top Streak</h1>
        <span className="text-sm text-green-500">{studentData[0]?.name} - {studentData[0]?.streak} days</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 flex-1 bg-blue-100 border-blue-300 border rounded-md h-40 ">
          ⚡
        <h1 className="text-blue-700 font-bold ">Top Lessons</h1>
        <span className="text-sm text-blue-500">{studentData[0]?.name} - {studentData[0]?.stars} Lessons</span>
        </div>
      </div>
    </div>
  )
}
