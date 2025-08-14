export default function ChartCard({ title, subtitle, type }) {
  return (
    <div className="bg-surface rounded-xl shadow-sm p-4 border border-border">
      <h1 className="text-gradient text-2xl font-bold ">{title}</h1>
      <p className="text-muted text-sm mb-4">{subtitle}</p>
      <div className="h-56 flex items-center justify-center text-muted text-sm">
        {type === "bar" ? "Bar Chart Placeholder" : "Pie Chart Placeholder"}
      </div>
    </div>
  )
}
