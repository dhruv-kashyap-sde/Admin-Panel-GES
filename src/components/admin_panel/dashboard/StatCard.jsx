export default function StatCard({ title, value, change, icon, color }) {

  return (
    <div className="bg-surface rounded-xl shadow-sm p-6 border border-border">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-sm tracking-wider font-bold text-neutral-600">{title.toUpperCase()}</h5>
          <h2 className="text-3xl mt-1 font-bold text-text">{value}</h2>
          {change && (
            <p className={`text-sm mt-1 "}`}>
              <span className="text-success text-[16px]">{change} </span> <span className="text-neutral-700">{change.startsWith('+') ? "from last month" : "Class 8"}</span>
            </p>
          )}
        </div>
        {icon && <div className={`bg-gradient-to-r ${color} text-white p-2 rounded-md`}>{icon}</div>}
      </div>
    </div>
  )
}
