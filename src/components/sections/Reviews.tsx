import Image from "next/image";

const reviews = [
  {
    initials: "JS",
    name: "Joe S.",
    location: "Tampa, FL",
    text: '"Excellent and professional service! Pricing is affordable and customer support was 5-stars all the way. Refreshing to get such a personal touch. Highly recommend!"',
    avatar: "https://i.pravatar.cc/150?u=JoeS",
  },
  {
    initials: "MT",
    name: "Mike T.",
    location: "Tampa Bay Area",
    text: '"Ducts All Done was very friendly. They took my call right away and fit me into their busy schedule. Everything met my expectations — I will definitely use them again."',
    avatar: "https://i.pravatar.cc/150?u=MikeT",
  },
  {
    initials: "SO",
    name: "Sagi O.",
    location: "Wesley Chapel, FL",
    text: '"Tom and Martin did a great job! After UV light install we are definitely feeling better. Great price too — truly appreciate it."',
    avatar: "https://i.pravatar.cc/150?u=SagiO",
  },
  {
    initials: "SL",
    name: "Sarah L.",
    location: "Lutz, FL",
    text: '"The team was prompt and very thorough. I could literally see the difference in the air quality. Definitely worth the investment! Professional and friendly technicians."',
    avatar: "https://i.pravatar.cc/150?u=SarahL",
  },
  {
    initials: "DR",
    name: "David R.",
    location: "Brandon, FL",
    text: '"Great communication from start to finish. They showed me before and after photos which was very reassuring. Highly recommend Ducts All Done for any HVAC cleaning."',
    avatar: "https://i.pravatar.cc/150?u=DavidR",
  },
  {
    initials: "AK",
    name: "Amanda K.",
    location: "Riverview, FL",
    text: '"Quick, clean, and professional. They were very careful with my furniture and did a top-notch job on the ducts. My house feels so much fresher now!"',
    avatar: "https://i.pravatar.cc/150?u=AmandaK",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-700 text-[12px] font-bold tracking-[1.2px] uppercase px-3 py-1 rounded mb-3">
            Customer Reviews
          </div>
          <h2 className="font-heading font-bold text-[#152F45] text-3xl md:text-4xl mb-4">
            Tampa Homeowners Trust Us
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[600px] mx-auto">
            Join over 1,000 satisfied customers who breathe cleaner air thanks to our professional duct cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-7 relative shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-7 right-7">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.09H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.91l3.66-2.8z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.09l3.66 2.84c.87-2.6 3.3-4.55 6.16-4.55z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-1 text-yellow-400 mb-4 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-[15px] text-[#3A4A5C] leading-[1.6] mb-6 min-h-[100px]">{r.text}</p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 bg-gray-50">
                   <Image 
                    src={r.avatar} 
                    alt={r.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-[15px] text-[#152F45] flex items-center gap-1.5">
                    {r.name}
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-[12px] text-gray-500 font-medium">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating strip */}
        <div className="mt-12 group flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 text-yellow-400 text-lg">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <strong className="text-[#152F45] text-lg ml-1">5.0 / 5.0</strong>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.09H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.91l3.66-2.8z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.09l3.66 2.84c.87-2.6 3.3-4.55 6.16-4.55z" fill="#EA4335"/>
            </svg>
            <span className="text-gray-600 font-semibold tracking-tight">114+ Verified Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
