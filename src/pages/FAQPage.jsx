import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available at checkout. Free shipping on orders over $100."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes! We ship to most countries worldwide. International shipping times vary by location, typically 10-15 business days."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track your order on our Track Order page."
        },
        {
          q: "Can I change or cancel my order?",
          a: "Orders can be modified or cancelled within 2 hours of placement. After that, the order is processed and cannot be changed."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          q: "Is the hair 100% human hair?",
          a: "Yes! All our hair is 100% virgin human hair, ethically sourced and of the highest quality."
        },
        {
          q: "Can I dye or bleach the hair?",
          a: "Absolutely! Our virgin hair can be dyed, bleached, and heat styled just like your natural hair."
        },
        {
          q: "How long does the hair last?",
          a: "With proper care, our hair bundles can last 1-2 years or longer. We recommend using sulfate-free products and minimal heat."
        },
        {
          q: "How many bundles do I need?",
          a: "For lengths 10-16 inches: 2-3 bundles. For 18-24 inches: 3-4 bundles. For a fuller look, add an extra bundle."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unopened, unused products in original packaging. Hair must be in resalable condition."
        },
        {
          q: "How do I initiate a return?",
          a: "Contact our customer service team with your order number. We'll provide a return authorization and shipping label."
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 5-7 business days after we receive your return. It may take an additional 3-5 days to appear in your account."
        },
        {
          q: "Can I exchange for a different texture or length?",
          a: "Yes! Exchanges are available for unopened products. Contact us within 30 days of delivery to arrange an exchange."
        }
      ]
    },
    {
      category: "Hair Care",
      questions: [
        {
          q: "How do I wash the hair?",
          a: "Use sulfate-free shampoo and conditioner. Wash in lukewarm water, gently massage, and rinse thoroughly. Air dry or use low heat."
        },
        {
          q: "Can I swim with the hair?",
          a: "Yes, but we recommend wearing a swim cap. Chlorine and salt water can dry out the hair. Wash and deep condition after swimming."
        },
        {
          q: "How do I prevent tangling?",
          a: "Brush hair daily with a wide-tooth comb, starting from ends. Sleep with hair in a silk/satin bonnet or on a silk pillowcase."
        },
        {
          q: "What products should I use?",
          a: "Use sulfate-free, alcohol-free products. We recommend moisturizing shampoos, deep conditioners, and leave-in treatments."
        }
      ]
    },
    {
      category: "Installation Classes",
      questions: [
        {
          q: "What does the installation course include?",
          a: "Our 1-month intensive course covers wig installation techniques, styling, maintenance, and business tips. Includes hands-on practice and certification."
        },
        {
          q: "Do I need prior experience?",
          a: "No prior experience needed! Our course is designed for beginners and covers everything from basics to advanced techniques."
        },
        {
          q: "Is the certification recognized?",
          a: "Yes! You'll receive a certificate of completion that demonstrates your skills and can help you start your own wig installation business."
        },
        {
          q: "Are materials included?",
          a: "Yes, all training materials and practice supplies are included in the course fee."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {faqs.map((category, catIdx) => (
          <div key={catIdx} className="mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-6 text-[#4169E1]">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, qIdx) => {
                const index = `${catIdx}-${qIdx}`;
                const isOpen = openIndex === index;
                return (
                  <div key={qIdx} className="bg-white asym-card shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(catIdx, qIdx)}
                      className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-all"
                    >
                      <span className="font-bold text-lg text-left">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-[#4169E1] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-gray-700 leading-relaxed animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still Have Questions */}
        <div className="bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white p-8 asym-card shadow-lg text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6">Our customer support team is here to help!</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#4169E1] px-8 py-3 asym-btn font-semibold hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
