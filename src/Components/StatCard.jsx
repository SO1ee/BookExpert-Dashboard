export default function StatCard({ label, value, color = "blue" }) {
  const colors = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600"
  };

  return (
    <div className="card">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`text-3xl font-bold ${colors[color]}`}>
        {value}
      </p>
    </div>
  );
}
