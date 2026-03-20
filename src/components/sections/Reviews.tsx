const reviews = [
  {
    initials: "JS",
    name: "Joe S.",
    location: "Tampa, FL",
    text: "\"Excellent and professional service! Pricing is affordable and customer support was 5-stars all the way. Refreshing to get such a personal touch. Highly recommend!\"",
  },
  {
    initials: "MT",
    name: "Mike T.",
    location: "Tampa Bay Area",
    text: "\"Ducts All Done was very friendly. They took my call right away and fit me into their busy schedule. Everything met my expectations — I will definitely use them again.\"",
  },
  {
    initials: "SO",
    name: "Sagi O.",
    location: "Wesley Chapel, FL",
    text: "\"Tom and Martin did a great job! After UV light install we are definitely feeling better. Great price too — truly appreciate it.\"",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3">
          Customer Reviews
        </div>
        <h2 className="font-heading font-bold text-[#152F45] mb-3">
          Tampa Homeowners Trust Us
        </h2>
        <p className="text-[16px] text-gray-500 max-w-[560px] mb-10">
          114+ five-star reviews on Google from real customers across Tampa Bay.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-gray-200 rounded-[10px] p-6 relative">
              <span className="absolute top-4 right-4 text-[11px] font-bold text-gray-400">Google</span>
              <div className="text-yellow-400 text-[14px] mb-3">★★★★★</div>
              <p className="text-[14px] text-[#3A4A5C] leading-[1.65] mb-4 italic">{r.text}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EBF8FF] flex items-center justify-center font-heading font-bold text-[14px] text-[#2EA3F2] flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[#152F45]">{r.name}</div>
                  <div className="text-[12px] text-gray-500">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating strip */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[14px] text-gray-600">
          <span className="text-yellow-400 text-base">★★★★★</span>
          <strong className="text-[#152F45]">5.0 / 5.0</strong>
          <span>·</span>
          <span>114+ Google Reviews</span>
        </div>
      </div>
    </section>
  );
}
