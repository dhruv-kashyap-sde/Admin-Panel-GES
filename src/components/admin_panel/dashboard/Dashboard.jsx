import { Users, BookOpen, TrendingUp, Award } from "lucide-react";
import Header from "../Header";
import StatCard from "./StatCard";
import ChartCard from "./ChartCard";
import LeaderboardCard from "./LeaderboardCard";
import StudentGrid from "./StudentGrid";

export default function Dashboard() {
  const statCardData = [
    { title: "Total Students",
      value: "245",
      change: "+12%",
      icon: <Users />,
      color: "from-[#205cdf] to-[#234cde]"
    },
    { title: "Total Classes", 
      value: "8", 
      change: "+8%", 
      icon: <BookOpen />,
      color: "from-[#059468] to-[#027d59]"
    },
    {
      title: "Avg. Performance",
      value: "86.2%",
      change: "+5%",
      icon: <TrendingUp />,
      color: "from-[#8d35e1] to-[#8023d1]"
    },
    {
      title: "Top Performer",
      value: "830 pts",
      change: "Ahan K.",
      icon: <Award />,
      color: "from-[#d97201] to-[#b95405]"
    },
  ];
  return (
    <div className="flex flex-col space-y-4">
      <Header
        title="Greenwood Elementary School"
        subtitle="Welcome back, School Admin! Here's your school's overview."
      />

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCardData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Class-wise Student Enrollment" subtitle={"Student distribution accross different grades"} type="bar" />
        <ChartCard title="Performance Distribution" subtitle={"Overall accuracy breakdown accross all students"} type="pie" />
      </div>

      {/* Leaderboard */}
      <LeaderboardCard />

      {/* All Students */}
      <StudentGrid />
    </div>
  );
}
