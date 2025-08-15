import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Header from "../Header";

export default function Analytics() {
  // Data for the pie chart
  const performanceData = [
    { name: "Excellent (85-100%)", value: 45, color: "#22c55e" },
    { name: "Good (70-84%)", value: 35, color: "#eab308" },
    { name: "Needs Improvement (<70%)", value: 20, color: "#ef4444" },
  ];

  // Data for the bar chart
  const skillData = [
    { skill: "Vocabulary", value: 82, color: "#3b82f6" },
    { skill: "Grammar", value: 78, color: "#22c55e" },
    { skill: "Pronunciation", value: 76, color: "#eab308" },
    { skill: "Listening", value: 85, color: "#8b5cf6" },
    { skill: "Speaking", value: 74, color: "#ef4444" },
  ];

  // Data for the engagement trends chart
  const engagementData = [
    { month: 'Jan', students: 45, hours: 30 },
    { month: 'Feb', students: 52, hours: 36 },
    { month: 'Mar', students: 48, hours: 45 },
    { month: 'Apr', students: 56, hours: 50 },
    { month: 'May', students: 58, hours: 56 }
  ];

  return (
    <div className="space-y-4">
      <Header title="Analytics Dashboard" subtitle="" isDashboard={false} />
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Learning Hours"
          value="2,847"
          change="+12% from last month"
        />
        <StatCard
          title="Lessons Completed"
          value="1,892"
          change="+18% from last month"
        />
        <StatCard
          title="Average Session Time"
          value="24 min"
          change="+8% from last month"
        />
        <StatCard
          title="Active Students"
          value="1,156"
          change="+5% from last month"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Student Performance Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">
              Overall accuracy breakdown across all students
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                Excellent (85–100%)
              </p>
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                Good (70–84%)
              </p>
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                Needs Improvement (&lt;70%)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Average Performance by Skill Area */}
        <Card>
          <CardHeader>
            <CardTitle>Average Performance by Skill Area</CardTitle>
            <p className="text-sm text-muted-foreground">
              Individual skill performance metrics and improvements
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { label: "Vocabulary", value: 82, color: "bg-blue-500" },
                { label: "Grammar", value: 78, color: "bg-green-500" },
                { label: "Pronunciation", value: 76, color: "bg-yellow-500" },
                { label: "Listening", value: 85, color: "bg-purple-500" },
                { label: "Speaking", value: 74, color: "bg-red-500" },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-sm">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${skill.color} h-2 rounded-full`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="h-40 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="skill"
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    fontSize={12}
                  />
                  <YAxis domain={[0, 100]} />
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Performance"]}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {skillData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Month-over-Month Improvement */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {[
                { label: "Vocabulary", change: "+5%" },
                { label: "Grammar", change: "+8%" },
                { label: "Pronunciation", change: "+12%" },
                { label: "Listening", change: "+3%" },
                { label: "Speaking", change: "+15%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 border rounded-lg text-center text-sm bg-green-50"
                >
                  <p className="font-medium">{item.label}</p>
                  <p className="text-green-600">{item.change}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Engagements Bar chart  */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Student Engagement Trends</CardTitle>
          <p className="text-sm text-muted-foreground">
            Monthly engagement patterns and learning time
          </p>
        </CardHeader>
        <CardContent>
          {/* Double Bar Chart */}
            <div className="h-80 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={engagementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                    tick={{ fill: '#666' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                    tick={{ fill: '#666' }}
                    domain={[0, 60]}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="students" 
                    fill="#3b82f6" 
                    radius={[4, 4, 0, 0]}
                    name="Active Students"
                  />
                  <Bar 
                    dataKey="hours" 
                    fill="#10b981" 
                    radius={[4, 4, 0, 0]}
                    name="Learning Hours"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ title, value, change }) {
  return (
    <>
      <div className="p-4 bg-surface shadow-lg rounded-md">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-xs text-green-600">{change}</p>
      </div>
    </>
  );
}
