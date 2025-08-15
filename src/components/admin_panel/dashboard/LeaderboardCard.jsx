import StudentCard from "./StudentCard";
import { useStudentContext } from "../../../context/StudentContext";

export default function LeaderboardCard() {
  const { getTopPerformers, getStats, students } = useStudentContext();
  
  // Get top 10 performers for the leaderboard
  const topStudents = getTopPerformers(10);
  
  // Get statistics for the cards at the bottom
  const { topScorer, topStreak, topLessons } = getStats();

  return (
    <div className="bg-surface rounded-xl shadow-sm p-6 border border-border">
      <h3 className="font-bold text-gradient text-2xl">🏆 School Leaderboard - Top 10 Champions</h3>
      <p className="text-muted text-sm mb-8">Our highest performing students this month with points and achievements.</p>

      <div className="flex flex-wrap justify-center gap-3">
        {topStudents.map((student, index) => (
          <StudentCard key={student.id} student={student} index={index} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 bg-amber-100 border-amber-300 border rounded-md h-40 ">
          🏆
        <h1 className="text-amber-700 font-bold ">Top Scorer</h1>
        <span className="text-sm text-amber-500">{topScorer?.name} - {topScorer?.points} pts</span>
        </div>
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 bg-green-100 border-green-300 border rounded-md h-40 ">
          🔥
        <h1 className="text-green-700 font-bold ">Top Streak</h1>
        <span className="text-sm text-green-500">{topStreak?.name} - {topStreak?.streak} days</span>
        </div>
        <div className="p-2 flex flex-col justify-center items-center gap-1 flex-1 bg-blue-100 border-blue-300 border rounded-md h-40 ">
          ⚡
        <h1 className="text-blue-700 font-bold ">Top Lessons</h1>
        <span className="text-sm text-blue-500">{topLessons?.name} - {topLessons?.stars} Lessons</span>
        </div>
      </div>
    </div>
  )
}
