import React, { useState, useEffect } from 'react';
import { Leaf, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const bannerImages = [
  {
    title: 'Premium Mango Processing',
    subtitle: 'The King of Mangoes - Pure, Natural & Export Quality',
    image: '/banner images/mango banner 1.png',
  },
  {
    title: 'Fresh Guava Excellence',
    subtitle: 'Nutrient-rich, handpicked guavas for global markets',
    image: '/banner images/guava banner 2.png',
  },
  {
    title: 'Tomato Pulp Perfection',
    subtitle: 'Vibrant, sun-ripened tomatoes processed to international standards',
    image: '/banner images/tomato banner 3.png',
  },
  {
    title: 'State-of-the-Art Factory',
    subtitle: 'Modern facilities ensuring quality and safety at every step',
    image: '/banner images/factory banner 4.png',
  },
];

// Animated Counter component
function AnimatedCounter({ end, duration = 1500, className = '', ...props }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <span className={className} {...props}>{count}</span>;
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Floating Leaves - scattered, animated, light green (#A6E97A) */}
      <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-10">
        {/* Leaves around logo area (visually close to logo, top left) */}
        <svg className="absolute animate-float-leaf" style={{left: '2.2rem', top: '1.1rem', width: 32, height: 32, opacity: 0.22, animationDelay: '0.1s', zIndex: 30}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '5.5rem', top: '0.5rem', width: 28, height: 28, opacity: 0.19, animationDelay: '0.3s', transform: 'rotate(-18deg)', zIndex: 30}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '8.5rem', top: '2.2rem', width: 24, height: 24, opacity: 0.17, animationDelay: '0.5s', transform: 'rotate(12deg)', zIndex: 30}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        {/* Leaves 1-2: Near logo/top */}
        <svg className="absolute animate-float-leaf" style={{left: '8%', top: '2%', width: 60, height: 60, opacity: 0.25, animationDelay: '0.2s'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '10%', top: '3%', width: 54, height: 54, opacity: 0.22, animationDelay: '0.5s', transform: 'rotate(-10deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        {/* Leaves 3-30: Evenly spaced grid, top to bottom, left to right */}
        <svg className="absolute animate-float-leaf" style={{left: '2%', top: '8%', width: 68, height: 68, opacity: 0.28, animationDelay: '0s'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '20%', top: '7%', width: 54, height: 54, opacity: 0.25, animationDelay: '0.8s', transform: 'rotate(20deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '38%', top: '10%', width: 60, height: 60, opacity: 0.32, animationDelay: '1.2s', transform: 'rotate(-15deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '60%', top: '8%', width: 50, height: 50, opacity: 0.27, animationDelay: '0.5s', transform: 'rotate(10deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '2%', top: '12%', width: 80, height: 80, opacity: 0.22, animationDelay: '1.7s', transform: 'rotate(-30deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '15%', top: '15%', width: 62, height: 62, opacity: 0.30, animationDelay: '2.2s', transform: 'rotate(25deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '30%', top: '18%', width: 58, height: 58, opacity: 0.23, animationDelay: '1.1s', transform: 'rotate(12deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '5%', top: '22%', width: 66, height: 66, opacity: 0.26, animationDelay: '1.5s', transform: 'rotate(-18deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '18%', top: '28%', width: 52, height: 52, opacity: 0.21, animationDelay: '2.5s', transform: 'rotate(8deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '35%', top: '25%', width: 70, height: 70, opacity: 0.24, animationDelay: '2.9s', transform: 'rotate(-22deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '8%', top: '30%', width: 60, height: 60, opacity: 0.29, animationDelay: '0.6s', transform: 'rotate(15deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '20%', top: '35%', width: 56, height: 56, opacity: 0.22, animationDelay: '1.3s', transform: 'rotate(-10deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '10%', top: '38%', width: 62, height: 62, opacity: 0.25, animationDelay: '2.1s', transform: 'rotate(18deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '28%', top: '42%', width: 58, height: 58, opacity: 0.23, animationDelay: '1.8s', transform: 'rotate(-12deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '12%', top: '45%', width: 64, height: 64, opacity: 0.27, animationDelay: '2.7s', transform: 'rotate(20deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '3%', bottom: '38%', width: 66, height: 66, opacity: 0.26, animationDelay: '3.5s', transform: 'rotate(-18deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '18%', bottom: '32%', width: 52, height: 52, opacity: 0.21, animationDelay: '4.1s', transform: 'rotate(8deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '35%', bottom: '28%', width: 70, height: 70, opacity: 0.24, animationDelay: '4.9s', transform: 'rotate(-22deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '8%', bottom: '25%', width: 60, height: 60, opacity: 0.29, animationDelay: '5.2s', transform: 'rotate(15deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '20%', bottom: '22%', width: 56, height: 56, opacity: 0.22, animationDelay: '5.7s', transform: 'rotate(-10deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '10%', bottom: '18%', width: 68, height: 68, opacity: 0.28, animationDelay: '0.3s'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '28%', bottom: '12%', width: 54, height: 54, opacity: 0.25, animationDelay: '1.2s', transform: 'rotate(20deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{left: '45%', bottom: '8%', width: 60, height: 60, opacity: 0.32, animationDelay: '2.1s', transform: 'rotate(-15deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '2%', bottom: '10%', width: 50, height: 50, opacity: 0.27, animationDelay: '1.5s', transform: 'rotate(10deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '15%', bottom: '5%', width: 80, height: 80, opacity: 0.22, animationDelay: '2.7s', transform: 'rotate(-30deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
        <svg className="absolute animate-float-leaf" style={{right: '30%', bottom: '2%', width: 62, height: 62, opacity: 0.30, animationDelay: '3.2s', transform: 'rotate(25deg)'}} viewBox="0 0 64 64" fill="none"><path d="M32 4C32 4 8 32 8 44C8 56 20 60 32 60C44 60 56 56 56 44C56 32 32 4 32 4Z" fill="#A6E97A"/></svg>
      </div>
      {/* Hero Banner Carousel */}
      <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden bg-black">
        {bannerImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10 text-center text-white px-4 flex flex-col items-center justify-center h-full">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">View Products</Link>
                <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">Contact Us</Link>
              </div>
            </div>
          </div>
        ))}
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Fruit Processing & Export
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LUQI HARVEST is a Bangalore and Krishnagiri-based company that produces, trades and exports high-quality, natural fruit pulp worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/products/AS2-Totapuri Mango.jpg"
                alt="Mango Processing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pure & Natural</h3>
                  <p className="text-gray-600">Made from fully ripened, handpicked fruits with no preservatives</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Varieties include premium Alphonso, Totapuri, and Kesar Mango Pulp</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Export</h3>
                  <p className="text-gray-600">Exporting to USA, UAE, Canada, Germany, UK and other international markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Strengths
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 scale-90 mx-auto">
            {/* Card 1 */}
            <div className="relative flex flex-col items-center bg-white border border-green-200 rounded-xl shadow-2xl p-10 min-h-[300px] transition-transform hover:scale-105">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Manufacturing" className="w-24 h-24 mb-4 z-10" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-0 z-10 text-center leading-tight">Manufacturing<br/>Process</h3>
            </div>
            {/* Card 2 */}
            <div className="relative flex flex-col items-center bg-white border border-green-200 rounded-xl shadow-2xl p-10 min-h-[300px] transition-transform hover:scale-105">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Global Reach" className="w-24 h-24 mb-4 z-10" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-0 z-10 text-center leading-tight">Global Reach</h3>
            </div>
            {/* Card 3 */}
            <div className="relative flex flex-col items-center bg-white border border-green-200 rounded-xl shadow-2xl p-10 min-h-[300px] transition-transform hover:scale-105">
              <img src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png" alt="Sustainability" className="w-24 h-24 mb-4 z-10" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-0 z-10 text-center leading-tight">Sustainability</h3>
            </div>
            {/* Card 4 */}
            <div className="relative flex flex-col items-center bg-white border border-green-200 rounded-xl shadow-2xl p-10 min-h-[300px] transition-transform hover:scale-105">
              <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="Supply Chain" className="w-24 h-24 mb-4 z-10" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-0 z-10 text-center leading-tight">Supply chain<br/>Efficiency</h3>
            </div>
          </div>
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center items-stretch gap-0 divide-x divide-gray-200 bg-white rounded-xl shadow mt-8 max-w-5xl mx-auto scale-90">
            <div className="flex flex-col items-center flex-1 py-8 px-10">
              <svg className="w-16 h-16 text-green-500 mb-3" fill="none" viewBox="0 0 48 48"><g stroke="currentColor" strokeWidth="2"><circle cx="24" cy="24" r="22"/><path d="M24 32c-4 0-8-2-8-6v-2c0-2 2-4 4-4h8c2 0 4 2 4 4v2c0 4-4 6-8 6z"/><circle cx="24" cy="20" r="4"/><path d="M16 36l2-4m14 4l-2-4"/></g></svg>
              <span className="text-5xl font-extrabold text-gray-900 flex items-baseline"><AnimatedCounter end={25} className="mr-1" /><span className="text-green-500 text-3xl">+</span></span>
              <span className="text-xl text-gray-700 font-semibold mt-2">Years of experience</span>
            </div>
            <div className="flex flex-col items-center flex-1 py-8 px-10">
              <svg className="w-16 h-16 text-green-500 mb-3" fill="none" viewBox="0 0 48 48"><g stroke="currentColor" strokeWidth="2"><circle cx="24" cy="24" r="22"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="2"/><path d="M24 16v-6M24 32v6M16 24h-6M32 24h6M18.93 18.93l-4.24-4.24M29.07 29.07l4.24 4.24M18.93 29.07l-4.24 4.24M29.07 18.93l4.24-4.24"/></g></svg>
              <span className="text-5xl font-extrabold text-gray-900 flex items-baseline"><AnimatedCounter end={500} className="mr-1" /><span className="text-green-500 text-3xl">+</span></span>
              <span className="text-xl text-gray-700 font-semibold mt-2">Employees</span>
            </div>
            <div className="flex flex-col items-center flex-1 py-8 px-10">
              <svg className="w-16 h-16 text-green-500 mb-3" fill="none" viewBox="0 0 48 48"><g stroke="currentColor" strokeWidth="2"><rect x="8" y="16" width="32" height="20" rx="4"/><rect x="16" y="8" width="16" height="8" rx="2"/><path d="M24 16v20"/></g></svg>
              <span className="text-5xl font-extrabold text-gray-900 flex items-baseline"><AnimatedCounter end={10} className="mr-1" /><span className="text-green-500 text-3xl">+</span></span>
              <span className="text-xl text-gray-700 font-semibold mt-2">Processing Lines</span>
            </div>
            <div className="flex flex-col items-center flex-1 py-8 px-10">
              <svg className="w-16 h-16 text-green-500 mb-3" fill="none" viewBox="0 0 48 48"><g stroke="currentColor" strokeWidth="2"><rect x="8" y="16" width="32" height="20" rx="4"/><path d="M24 16v20"/><path d="M16 24h16"/><path d="M12 36l24-24"/></g></svg>
              <span className="text-5xl font-extrabold text-gray-900 flex items-baseline"><AnimatedCounter end={75} className="mr-1" /><span className="text-green-500 text-3xl">+</span></span>
              <span className="text-xl text-gray-700 font-semibold mt-2">Exporting countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600">
              Quality & Flavor in Every Bite
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Alphonso Mango Pulp",
                description: "The King of Mangoes with rich creamy texture",
                image: "/images/products/AS1-Alphanso Mango.jpg",
                link: "/products/fruit-pulp"
              },
              {
                title: "Totapuri Mango Pulp",
                description: "Vibrant yellow color with distinct tangy taste",
                image: "/images/products/AS2-Totapuri Mango.jpg",
                link: "/products/fruit-pulp"
              },
              {
                title: "Guava Pulp",
                description: "Pink & White varieties packed with nutrients",
                image: "/images/products/AS4-White Guava.jpg",
                link: "/products/fruit-pulp"
              },
              {
                title: "Premium Vegetables",
                description: "Fresh gherkins, baby corn, and more",
                image: "/images/products/AS15-Gharkins.jpg",
                link: "/products/vegetables"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link to={product.link} className="text-orange-600 hover:text-orange-700 font-semibold flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Meeting International Standards
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['FSSAI', 'HALAL', 'COA', 'IEC'].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
                <p className="text-sm text-gray-600 mt-2">Certified</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section (at the very bottom) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">ABOUT US</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              A premium fruit pulp producer and exporter dedicated to bringing the authentic taste of Indian fruits to global markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start">
              <div className="bg-green-400 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="8" y="3" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-500 text-lg">Our products are made from fully ripened, handpicked fruits with no artificial colors or preservatives, ensuring premium quality and authentic taste.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start">
              <div className="bg-green-400 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M2 12h20" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-500 text-lg">We export our products to various countries worldwide, ensuring that people across the globe can enjoy the authentic taste of Indian fruits.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-start">
              <div className="bg-green-400 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainable Practices</h3>
              <p className="text-gray-500 text-lg">We partner with local farmers and manufacturers to promote eco-friendly practices and support sustainable agriculture across our supply chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section (below About Us) */}
      <section className="w-full bg-gradient-to-r from-[#6fc13e] to-[#7ed957] py-24 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 w-60 h-60 bg-white bg-opacity-10 rounded-full" style={{zIndex:1}}></div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-96 h-96 bg-white bg-opacity-10 rounded-full" style={{zIndex:1}}></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">Ready to Experience Our Premium Fruit Pulp?</h2>
          <p className="text-2xl text-white text-center mb-10 max-w-2xl">Contact us today to discuss your requirements or to request samples of our premium fruit pulp products.</p>
          <Link to="/contact" className="bg-white text-green-600 hover:bg-green-50 font-semibold px-10 py-4 rounded-lg text-xl shadow transition-all">Get in Touch</Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-leaf {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-30px) scale(1.05) rotate(8deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
        .animate-float-leaf {
          animation: float-leaf 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 