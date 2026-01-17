import React from 'react';

export const DirectorMessage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-school-blue text-white py-16 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold mb-2">From The Director's Desk</h2>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex flex-col gap-8 items-center text-center">
            <div>
                <h3 className="text-xl font-bold text-school-blue">Mrs. Suman Bissu Saharan</h3>
                <p className="text-gray-600 text-sm mb-8">Director, CSR GENxt Convent School</p>
            </div>
            <div className="text-left">
                <p className="text-gray-700 leading-relaxed mb-4">
                    Dear Parents and Students,
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    It gives me immense pleasure to introduce CSR GENxt Convent School to the community of Fazilka and surrounding areas. Our dream of creating an institution that bridges the gap between traditional values and modern aspirations is finally coming to fruition with our first academic session in 2026.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We believe that education is not just about filling a bucket, but lighting a fire. At CSR GENxt, we are committed to igniting that spark of curiosity in every child. Our ICSE curriculum is designed to be rigorous yet flexible, encouraging critical thinking and creativity.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    We have invested heavily in infrastructure, from smart classrooms to extensive sports facilities, because we believe that a conducive environment is key to holistic growth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    I invite you to join us on this exciting journey as we shape the next generation of leaders.
                </p>
                <p className="font-serif font-bold text-school-blue text-lg">
                    Warm Regards,
                </p>
                <p className="font-serif text-gray-800">
                    Mrs. Suman Bissu Saharan
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};