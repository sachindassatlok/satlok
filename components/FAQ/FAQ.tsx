import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is the purpose of human life according to Sant Rampal Ji Maharaj?",
      answer: "According to Sant Rampal Ji Maharaj, the main purpose of human life is to attain salvation (Moksha) through true worship of the Supreme God Kabir Saheb and following the right spiritual path."
    },
    {
      question: "How can one receive Naam Diksha (Initiation)?",
      answer: "To receive Naam Diksha, you can contact our helpline number +91 7496801823. Our representatives will guide you through the process and requirements for initiation. Naam Diksha is given free of cost."
    },
    {
      question: "What are the main teachings of Sant Rampal Ji Maharaj?",
      answer: "Sant Rampal Ji Maharaj's main teachings include: following true spiritual knowledge based on holy scriptures, abstaining from alcohol and meat consumption, treating all humans equally regardless of caste or religion, and performing true worship of Supreme God Kabir Saheb."
    },
    {
      question: "What facilities are available at Satlok Ashram?",
      answer: "Satlok Ashram provides various facilities including: free accommodation, 24/7 langar (community kitchen), meditation halls, satsang venues, library with spiritual literature, and medical assistance. All services are provided free of cost."
    },
    {
      question: "Are there any online spiritual discourses available?",
      answer: "Yes, you can watch live satsang and spiritual discourses on our official YouTube channel 'Sant Rampal Ji Maharaj'. Regular updates are also shared on our social media platforms."
    },
    {
      question: "What are the requirements for staying at the ashram?",
      answer: "Visitors must follow ashram rules including: maintaining discipline, attending morning and evening satsang, following the prescribed daily routine, and adhering to the vegetarian diet. Prior registration is recommended for accommodation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about spiritual knowledge, ashram visits, and teachings of Sant Rampal Ji Maharaj
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 border-t pt-4">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
