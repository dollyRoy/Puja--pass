
"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
// Sample data
const coupons = [
  { id: 1, title: "Single Blessings", price: 99, description: "One prasadam coupon.", img: "/single.jpg" },
  { id: 2, title: "Couple’s Compassion", price: 350, description: "Special pack for 2.", img: "/couple.jpg" },
  { id: 3, title: "Family Feast", price: 950, description: "Family pack for 6.", img: "/family.jpg" },
];

const featuredOffers = [
  { id: 1, title: "Limited Edition Blessing", price: 199, img: "/offer1.jpg" },
  { id: 2, title: "Festival Special", price: 499, img: "/offer2.jpg" },
  { id: 3, title: "Mega Family Pack", price: 1200, img: "/offer3.jpg" },
];

const howItWorks = [
  { id: 1, step: "1", title: "Browse Coupons", desc: "Select the prasadam coupon you want." },
  { id: 2, step: "2", title: "Add to Cart", desc: "Add your favorite coupons to the cart." },
  { id: 3, step: "3", title: "Checkout & Pay", desc: "Proceed to payment securely." },
  { id: 4, step: "4", title: "Receive Prasadam", desc: "Get prasadam delivered to you." },
];

const testimonials = [
  { id: 1, name: "Riya Sen", review: "Amazing experience! The prasadam was fresh and timely.", img: "/user1.jpg" },
  { id: 2, name: "Amit Roy", review: "Loved the easy booking process and family pack options.", img: "/user2.jpg" },
  { id: 3, name: "Sonal Mehta", review: "Highly recommend PujaPass for Durga Puja prasadam.", img: "/user3.jpg" },
];

const faqs = [
  { id: 1, question: "How do I get my prasadam?", answer: "After booking, you will receive a token to collect your prasadam at the pandal or delivery." },
  { id: 2, question: "Can I cancel my order?", answer: "Yes, cancellations are allowed up to 24 hours before the event." },
  { id: 3, question: "Are family packs available?", answer: "Yes, we have individual, couple, and family packs." },
  { id: 4, question: "What are the payment options?", answer: "We accept UPI, debit/credit cards, and net banking payments." },
  { id: 5, question: "Is parking available at the venue?", answer: "Yes, there is limited parking available for visitors at the pandal." },
  { id: 6, question: "Can I book for multiple days?", answer: "Yes, you can book prasadam for multiple days or events." },
  { id: 7, question: "Do you deliver prasadam?", answer: "Delivery is available in selected areas. Check the delivery option during booking." },
  { id: 8, question: "Are there vegetarian and non-vegetarian options?", answer: "Currently, we only provide vegetarian prasadam." },
];


// const faqsRow1 = [
//   { id: 1, question: "How do I get my prasadam?", answer: "After booking, you will receive a token to collect your prasadam at the pandal or delivery." },
//   { id: 2, question: "Can I cancel my order?", answer: "Yes, cancellations are allowed up to 24 hours before the event." },
//   { id: 3, question: "Are family packs available?", answer: "Yes, we have individual, couple, and family packs." },
//   { id: 4, question: "What are the payment options?", answer: "We accept UPI, debit/credit cards, and net banking payments." },
// ];

// const faqsRow2 = [
//   { id: 5, question: "Is parking available at the venue?", answer: "Yes, there is limited parking available for visitors at the pandal." },
//   { id: 6, question: "Can I book for multiple days?", answer: "Yes, you can book prasadam for multiple days or events." },
//   { id: 7, question: "Do you deliver prasadam?", answer: "Delivery is available in selected areas. Check the delivery option during booking." },
//   { id: 8, question: "Are there vegetarian and non-vegetarian options?", answer: "Currently, we only provide vegetarian prasadam." },
// ];

const partnerPandals = [
  { id: 1, name: "Laxmi Pandal", location: "Kolkata", img: "/pandal1.jpg" },
  { id: 2, name: "Shiv Mandir Pandal", location: "Salt Lake", img: "/pandal2.jpg" },
  { id: 3, name: "Durga Dham", location: "Howrah", img: "/pandal3.jpg" },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#7b1e24] text-white p-4 text-center text-2xl font-bold">
        PujaPass – Durga Puja Prasadam Coupons
      </header>

      {/* Hero Section */}
      <section className="bg-[#7b1e24] text-white text-center p-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PujaPass</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Book your Durga Puja prasadam coupons online and enjoy authentic blessings.
        </p>
      </section>

      {/* Coupons Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            onClick={() => router.push(`/coupons/${coupon.id}`)}
            className="cursor-pointer bg-white max-w-500px max-h-500px rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image src={coupon.img} alt={coupon.title} width={400} height={350} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-gray-700 text-xl font-semibold">{coupon.title}</h2>
              <p className="text-gray-800">{coupon.description}</p>
              <p className=" text-gray-500 text-lg font-semibold mt-2">₹{coupon.price}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#7b1e24] mb-10">Why Choose PujaPass?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl text-gray-600 font-semibold mb-2">Authentic Blessings</h3>
              <p className="text-gray-600">Get prasadam directly from the Durga Puja pandal, prepared with devotion.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-600">Easy Online Booking</h3>
              <p className="text-gray-600">No more waiting in queues. Book your coupons online in just a few clicks.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-600">Family & Couple Packs</h3>
              <p className="text-gray-600">Affordable options for individuals, couples, and families with special discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offers Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#7b1e24] mb-10 text-center">Featured Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image src={offer.img} alt={offer.title} width={400} height={250} className="w-full h-48 object-cover text-gray-600" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-gray-600">{offer.title}</h3>
                  <p className="text-lg font-semibold mt-2 text-gray-900">₹{offer.price}</p>
                  <button
                    onClick={() => addToCart({ id: offer.id, title: offer.title, price: offer.price })}
                    className="bg-[#7b1e24] text-white px-4 py-2 rounded-lg hover:bg-red-900 transition mt-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#7b1e24] mb-10">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="text-3xl font-bold text-[#7b1e24] mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#7b1e24] mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <Image src={t.img} alt={t.name} width={100} height={80} className="mx-auto rounded-full mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold mb-2 text-gray-600">{t.name}</h3>
                <p className="text-gray-600">{t.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-[#7b1e24] mb-10">
      Frequently Asked Questions
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left animate-fadeInLeft"
          style={{ animationDelay: `${index * 150}ms` }} // stagger animation
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-600">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section> */}

     <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#7b1e24] mb-10">
          Frequently Asked Questions
        </h2>

        {/* Single scrolling row */}
        <motion.div
          className="flex gap-6 justify-center"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {faqs.concat(faqs).map((faq, index) => (
            <div
              key={faq.id + "_" + index}
              className="bg-white p-6 rounded-2xl shadow max-w-[290px] min-h-[150px] flex-shrink-0"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-600">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>


    {/* <section className="h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Container for horizontal scrolling */}
      {/* <motion.div
        className="flex gap-6"
        animate={{ x: ["100%", "-100%"] }}  // move from right to left
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {faqs.concat(faqs).map((faq, index) => (
          <div
            key={faq.id + "_" + index}
            className="bg-white p-6 rounded-2xl shadow min-w-[250px] flex-shrink-0"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-600">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </motion.div> */}
    

      {/* Partner Pandals Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#7b1e24] mb-10">Our Partner Pandals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerPandals.map((pandal) => (
              <div key={pandal.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image src={pandal.img} alt={pandal.name} width={500} height={250} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-600">{pandal.name}</h3>
                  <p className="text-gray-700">{pandal.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
