import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-school-blue text-white py-20 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg width="100%" height="100%">
                 <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor"></circle>
                 </pattern>
                 <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
             </svg>
         </div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">About CSR GENxt Convent School</h2>
            <p className="text-xl opacity-90">Embracing the Future, Starting 2026</p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col gap-12 items-center mb-20 text-center">
            <div className="max-w-4xl">
                <h3 className="text-3xl font-serif font-bold text-school-blue mb-6">A New Beginning</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    CSR GENxt Convent School is set to open its doors for the first academic session in 2026. Located on the Abohar-Fazilka Highway, our sprawling campus is designed to foster a learning environment that is both modern and deeply rooted in Indian values.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We are proud to be an ICSE curriculum following institution, ensuring that our curriculum adheres to the highest standards of education in India.
                </p>
                <p className="text-gray-700 leading-relaxed">
                   Our focus is not just on academic excellence, but on creating 'GENxt' leaders who are compassionate, innovative, and ethically grounded.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-school-blue shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 italic">
                    "To provide a world-class educational experience that blends traditional wisdom with modern technology, empowering students to excel in a rapidly changing world."
                </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-school-gold shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 italic">
                    "To become a benchmark of educational excellence in the region, nurturing students who are intellectually curious, socially responsible, and globally competent."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};