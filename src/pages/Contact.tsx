import React from 'react';

export const Contact: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = "919814535500";
    const text = encodeURIComponent("Hello, I would like to enquire about CSRGENxt Convent School");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-school-blue mb-4">Contact Us</h2>
          <p className="text-gray-600">Admissions for Session 2026 are open. Reach out to us today.</p>
        </div>

        {/* Centered Contact Info */}
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-school-blue mr-4">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-school-blue hover:underline">
                    CSR GENxt Convent School,<br/>Khui Khera, Abohar-Fazilka Highway,<br/>Fazilka - 152121
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-school-blue mr-4">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <a href="tel:9814535500" className="text-gray-600 text-sm hover:text-school-blue hover:underline">98145 35500</a>
                  <p className="text-gray-600 text-sm">Mon - Sat, 9am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-school-blue mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <a href="mailto:info@csrgenxt.in" className="text-gray-600 text-sm hover:text-school-blue hover:underline">info@csrgenxt.in</a>
                </div>
              </div>

               <div className="pt-4 border-t border-gray-100">
                  <button 
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition transform active:scale-95 shadow-md"
                  >
                    Chat on WhatsApp
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};