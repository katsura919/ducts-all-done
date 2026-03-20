const stats = [
  { value: "1,000+", label: "Customers Served" },
  { value: "5.0★", label: "Google Rating" },
  { value: "114+", label: "Five-Star Reviews" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm py-5 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-6 py-1">
            <div className="font-heading font-extrabold text-[2rem] text-[#152F45] leading-none mb-1">
              {s.value}
            </div>
            <div className="text-[13px] text-gray-500 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
