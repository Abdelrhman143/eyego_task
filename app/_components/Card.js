export default function Card({ icon, stats, title }) {
  return (
    <div className="bg-gray-50 shadow-md rounded-sm p-3">
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>
        <span className="text-blue-400">{icon}</span>
      </div>
      <div className="text-4xl font-semibold mt-2">{stats}</div>
    </div>
  );
}
