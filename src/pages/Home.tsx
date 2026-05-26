import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const highlights = [
  {
    title: "ICSE Curriculum",
    description: "Following the Indian Certificate of Secondary Examinations standards for holistic development.",
    icon: (
      <svg className="w-8 h-8 text-school-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
    )
  },
  {
    title: "Experienced Mentors",
    description: "Our diverse faculty brings years of expertise from top Indian institutions.",
    icon: (
      <svg className="w-8 h-8 text-school-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
    )
  },
  {
    title: "Future Ready Campus",
    description: "Equipped with smart labs, digital libraries, and extensive sports facilities.",
    icon: (
      <svg className="w-8 h-8 text-school-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
    )
  }
];

export const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // sessionStorage clears when the browser tab/window is closed.
    // This perfectly matches your requirement.
    const hasSeen = sessionStorage.getItem('hasSeenPamphlet');
    if (!hasSeen) {
      setShowModal(true);
      sessionStorage.setItem('hasSeenPamphlet', 'true');
    }
  }, []);

  return (
    <div className="flex flex-col relative">
      
      {/* --- HIRING PAMPHLET MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 md:p-8">
          <div className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-xl p-2 shadow-2xl flex flex-col animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg transition transform hover:scale-110 z-10"
            >
              &times;
            </button>
            
            {/* Pamphlet Image */}
            <div className="overflow-hidden w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
              {/* Ensure the filename matches what you put in the public/ folder */}
              <img
                src="/hiring-pamphlet.jpg"
                alt="CSR GENxt Hiring Teachers - Contact Us"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
      {/* --- END MODAL --- */}

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden bg-school-blue">
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
                 <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor"></circle>
                 </pattern>
                 <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
             </svg>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-block bg-school-gold text-school-blue font-bold px-4 py-1 rounded-full mb-4 animate-pulse">
            Admissions Open for Session 2026-27
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Welcome to <span className="text-school-gold">CSR GENxt Convent School</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto opacity-90">
            A Premier Institution nurturing the leaders of tomorrow with Indian values and global vision.
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink to="/contact" className="bg-school-gold text-school-blue px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg">
              Apply Now
            </NavLink>
            <NavLink to="/about" className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-school-blue transition transform hover:scale-105">
              Discover More
            </NavLink>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-school-blue mb-4">Why Choose CSR GENxt?</h3>
            <div className="w-24 h-1 bg-school-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/CTA Section */}
      <section className="py-20 bg-school-blue text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif font-bold text-school-gold mb-2">2026</div>
            <div className="text-sm uppercase tracking-widest opacity-80">First Academic Session</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-school-gold mb-2">ICSE</div>
            <div className="text-sm uppercase tracking-widest opacity-80">Curriculum Followed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-school-gold mb-2 whitespace-nowrap">Modern Campus</div>
            <div className="text-sm uppercase tracking-widest opacity-80">For Our Modern Learners</div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-serif font-bold text-school-blue mb-2">Latest Updates</h3>
              <div className="w-16 h-1 bg-school-gold"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-school-blue/50">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-school-gold uppercase tracking-wider">Admissions</span>
                  <h4 className="text-lg font-bold text-gray-800 mt-2 mb-3">Registration Open for 2026-27</h4>
                  <p className="text-gray-600 text-sm mb-4">We are inviting applications for Pre Nursery to Grade 2 for our inaugural session.</p>
                  <NavLink to="/contact" className="text-sm font-bold text-school-blue hover:underline">Apply Now</NavLink>
                </div>
            </div>
             <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-school-blue/50">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-school-gold uppercase tracking-wider">Campus</span>
                  <h4 className="text-lg font-bold text-gray-800 mt-2 mb-3">Campus Tours Available</h4>
                  <p className="text-gray-600 text-sm mb-4">Visit our state-of-the-art campus on the Abohar-Fazilka Highway every Saturday.</p>
                  <NavLink to="/contact" className="text-sm font-bold text-school-blue hover:underline">Schedule Visit</NavLink>
                </div>
            </div>
             <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-school-blue/50">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-school-gold uppercase tracking-wider">Faculty</span>
                  <h4 className="text-lg font-bold text-gray-800 mt-2 mb-3">We Are Hiring!</h4>
                  <p className="text-gray-600 text-sm mb-4">Come, be a part of our journey in shaping young minds.</p>
                  <NavLink to="/contact" className="text-sm font-bold text-school-blue hover:underline">Apply Now</NavLink>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
