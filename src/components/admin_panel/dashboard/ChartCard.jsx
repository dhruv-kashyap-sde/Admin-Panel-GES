import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';

export default function  ChartCard({ title, subtitle, type }) {
  // Data for Class-wise Student Enrollment (Bar Chart)
  const classEnrollmentData = [
    { class: 'Class 1', students: 35 },
    { class: 'Class 2', students: 32 },
    { class: 'Class 3', students: 28 },
    { class: 'Class 4', students: 30 },
    { class: 'Class 5', students: 25 },
    { class: 'Class 6', students: 28 },
    { class: 'Class 7', students: 33 },
    { class: 'Class 8', students: 34 }
  ];

  // Data for Performance Distribution (Pie Chart)
  const performanceData = [
    { name: 'Excellent (90-100%)', value: 45, color: '#10b981' },
    { name: 'Good (80-89%)', value: 35, color: '#3b82f6' },
    { name: 'Average (70-79%)', value: 15, color: '#f59e0b' },
    { name: 'Needs Improvement', value: 5, color: '#ef4444' }
  ];

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={classEnrollmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#639cf7" stopOpacity={1} />
            <stop offset="100%" stopColor="#88b6f8" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="class"
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
          domain={[0, 40]}
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
          fill="url(#barGradient)"
          radius={[4, 4, 0, 0]}
          name="Students"
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={performanceData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
        >
          {performanceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderLegend = () => {
    if (type === 'pie') {
      return (
        <div className="mt-4 space-y-2">
          {performanceData.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface rounded-xl shadow-lg p-4 border border-border">
      <h1 className="text-gradient text-2xl font-bold">{title}</h1>
      <p className="text-muted text-sm mb-4">{subtitle}</p>
      <div className="h-56">
        {type === "bar" ? renderBarChart() : renderPieChart()}
      </div>
      {renderLegend()}
    </div>
  );
}
