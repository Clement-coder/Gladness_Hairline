const ShippingPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Shipping & Returns</h1>
        <div className="bg-white p-8 md:p-12 asym-card shadow-lg space-y-8 text-gray-700 leading-relaxed">
          
          {/* Shipping Policy */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#4169E1]">Shipping Policy</h2>
            
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Shipping Methods & Times</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-[#4169E1] pl-4">
                  <p className="font-bold">Standard Shipping (FREE over $100)</p>
                  <p>5-7 business days - $15 flat rate</p>
                </div>
                <div className="border-l-4 border-[#4169E1] pl-4">
                  <p className="font-bold">Express Shipping</p>
                  <p>2-3 business days - $25</p>
                </div>
                <div className="border-l-4 border-[#4169E1] pl-4">
                  <p className="font-bold">Overnight Shipping</p>
                  <p>1 business day - $45</p>
                </div>
                <div className="border-l-4 border-[#4169E1] pl-4">
                  <p className="font-bold">International Shipping</p>
                  <p>10-15 business days - Calculated at checkout</p>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Processing Time</h3>
              <p>Orders are processed within 1-2 business days (Monday-Friday, excluding holidays). You will receive a confirmation email with tracking information once your order ships.</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Tracking Your Order</h3>
              <p>Once shipped, you'll receive a tracking number via email. You can also track your order on our <a href="/track-order" className="text-[#4169E1] hover:underline">Track Order page</a>.</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Shipping Restrictions</h3>
              <p>We currently ship to most countries worldwide. Some remote areas may have limited shipping options. Contact us if you're unsure about shipping to your location.</p>
            </section>
          </div>

          {/* Returns Policy */}
          <div className="border-t-2 pt-8">
            <h2 className="text-3xl font-bold mb-6 text-[#4169E1]">Returns & Exchanges</h2>
            
            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">30-Day Return Policy</h3>
              <p className="mb-3">We want you to be completely satisfied with your purchase. If you're not happy, you can return unopened, unused products within 30 days of delivery for a full refund.</p>
              <div className="bg-blue-50 border-2 border-[#4169E1] asym-card p-4">
                <p className="font-bold mb-2">Return Requirements:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Product must be unopened and unused</li>
                  <li>Original packaging intact</li>
                  <li>All tags and labels attached</li>
                  <li>Hair must be in resalable condition</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">How to Return</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our customer service at support@gladnesshairline.com with your order number</li>
                <li>We'll provide a Return Authorization (RA) number and return shipping label</li>
                <li>Pack the item securely in original packaging</li>
                <li>Attach the return label and ship within 7 days</li>
                <li>Refund processed within 5-7 business days after we receive your return</li>
              </ol>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Exchanges</h3>
              <p>Want a different texture or length? We offer free exchanges for unopened products. Contact us within 30 days to arrange an exchange.</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Non-Returnable Items</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Opened or used hair products</li>
                <li>Custom or personalized items</li>
                <li>Sale or clearance items (unless defective)</li>
                <li>Gift cards</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-3">Damaged or Defective Items</h3>
              <p className="mb-3">If you receive a damaged or defective product, contact us immediately with photos. We'll arrange a replacement or full refund at no cost to you.</p>
              <p className="font-bold">Email: support@gladnesshairline.com</p>
              <p className="font-bold">Phone: +1 (234) 567-8900</p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-3">Return Shipping Costs</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>We provide free return shipping labels for defective items</li>
                <li>Customer is responsible for return shipping on non-defective returns</li>
                <li>Exchanges ship free of charge</li>
              </ul>
            </section>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#4169E1] to-[#5a7fd6] text-white p-6 asym-card">
            <h3 className="text-2xl font-bold mb-3">Questions?</h3>
            <p className="mb-4">Our customer service team is here to help with any shipping or return questions.</p>
            <a href="/contact" className="inline-block bg-white text-[#4169E1] px-6 py-2 asym-btn font-semibold hover:shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
