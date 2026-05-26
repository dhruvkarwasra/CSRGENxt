import React from 'react';

export const PrincipalMessage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-school-blue text-white py-16 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold mb-2">Principal's Message</h2>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex flex-col gap-8 items-center text-center">
            <div>
                <h3 className="text-xl font-bold text-school-blue">Ms. Shreya Singh Saharan</h3>
                <p className="text-gray-600 text-sm mb-8">Principal, CSR GENxt Convent School</p>
            </div>
            <div className="text-left">
                <p className="text-gray-700 leading-relaxed mb-4">
                    Greetings,
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to CSR GENxt Convent School. As we embark on our inaugural session in 2026, I am filled with a sense of responsibility and excitement. Our school stands as a beacon of new-age learning, ensuring a standard of education that is recognized globally.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    My philosophy of education is centered on the child. Every student is unique, with their own set of talents and potential. Our role as educators is to identify and nurture these talents. We aim to create a safe, inclusive, and stimulating environment where students are not afraid to ask questions and make mistakes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Along with academic excellence, we place a strong emphasis on character building, discipline, and empathy. We want our students to be not just successful professionals, but good human beings who contribute positively to society.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    We look forward to welcoming your children and partnering with you in their educational journey.
                </p>
                <p className="font-serif font-bold text-school-blue text-lg">
                    Sincerely,
                </p>
                <p className="font-serif text-gray-800">
                    Mrs. Jyoti Yadav
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
