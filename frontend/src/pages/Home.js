import React, { useState } from 'react';

// Doodles
import Doodle1 from '../assets/images/undraw_email_b5yu.svg';
import Doodle2 from '../assets/images/undraw_github-profile_abde.svg';
import Doodle3 from '../assets/images/undraw_instant-analysis_vm8x.svg';
import Doodle4 from '../assets/images/undraw_report_k55w.svg';
import Doodle5 from '../assets/images/undraw_screen-time_f7ev.svg';
import Doodle6 from '../assets/images/undraw_social-notifications_zahe.svg';
import Doodle7 from '../assets/images/undraw_work-in-progress_m95a.svg';

const Home = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Analyzing:', username);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-orange-500 p-6 overflow-hidden font-sans">
      
      
      <nav className="flex items-center justify-between px-8 py-4 bg-white text-gray-800 shadow-lg border-b border-gray-200 text-white rounded-xl shadow-md mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <button className="font-medium hover:underline flex items-center">
              Top Influencer
              <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>
          </div>
          <a href="#" className="hover:underline">Subscriptions</a>
          <a href="#" className="hover:underline">Our team</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="hover:underline flex items-center">
              EN
              <svg className="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>
          </div>
          <button className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform">
            Sign In
          </button>
        </div>
      </nav>

      {/* 🎨 Floating Doodles */}
      <img src={Doodle1} className="absolute top-10 left-8 w-48 opacity-30 z-0 pointer-events-none animate-float-slow" alt="Doodle1" />
      <img src={Doodle2} className="absolute top-20 right-10 w-52 opacity-25 z-0 pointer-events-none animate-float" alt="Doodle2" />
      <img src={Doodle3} className="absolute bottom-20 left-16 w-56 opacity-20 z-0 pointer-events-none animate-float-fast" alt="Doodle3" />
      <img src={Doodle4} className="absolute top-[48%] right-[2%] w-48 opacity-20 z-0 pointer-events-none animate-float-slow transform -translate-y-1/2" alt="Doodle4" />
      <img src={Doodle5} className="absolute top-16 right-1/4 w-36 opacity-30 z-0 pointer-events-none animate-float" alt="Doodle5" />
      <img src={Doodle6} className="absolute bottom-[15%] right-[8%] w-44 opacity-25 z-0 pointer-events-none animate-float-fast" alt="Doodle6" />
      <img src={Doodle7} className="absolute bottom-6 left-[28%] w-40 opacity-30 z-0 pointer-events-none animate-float" alt="Doodle7" />
      <img src={Doodle3} className="absolute top-[70%] left-[5%] w-36 opacity-25 z-0 pointer-events-none animate-float-slow" alt="Doodle3-repeat" />
      <img src={Doodle6} className="absolute top-[12%] left-[40%] w-40 opacity-20 z-0 pointer-events-none animate-float" alt="Doodle6-repeat" />
      <img src={Doodle2} className="absolute top-[58%] right-[18%] w-44 opacity-20 z-0 pointer-events-none animate-float-fast" alt="Doodle2-repeat" />
      <img src={Doodle5} className="absolute top-[32%] left-[60%] w-36 opacity-20 z-0 pointer-events-none animate-float-slow" alt="Doodle5-repeat" />
      <img src={Doodle1} className="absolute bottom-[4%] right-[6%] w-44 opacity-25 z-0 pointer-events-none animate-float" alt="Doodle1-repeat" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* 🔍 Analyze Box */}
        <div className="max-w-2xl mx-auto mb-12 bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 text-center hover:scale-[1.02] transition-transform duration-300 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Analyze Instagram Likes
          </h2>
          <p className="text-lg text-white opacity-90 mb-6">
            Perfect data for Nerds. Explained boomer-proofing!
          </p>

          <div className="flex justify-center space-x-8 mb-8">
            <div className="bg-white bg-opacity-30 p-4 rounded-lg">
              <div className="text-4xl font-bold text-white">25M+</div>
              <div className="text-white opacity-80">Profiles Analyzed</div>
            </div>
            <div className="bg-white bg-opacity-30 p-4 rounded-lg">
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="text-white opacity-80">Accuracy Rate</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., instagram"
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-l-lg focus:ring-4 focus:ring-purple-300 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-8 py-4 rounded-r-lg hover:shadow-lg transition-all"
              >
                ANALYZE NOW
              </button>
            </div>
          </form>
        </div>

        {/* 🌟 INSTALYTICS Title */}
        <div className="text-center mt-20 mb-10">
          <h1 className="text-7xl font-alfa text-yellow-300 tracking-wider leading-tight drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
              INSTALYTICS
            </span>
          </h1>
          <p className="text-xl text-white opacity-90 mt-4">
            INSTALYTICS - <span className="font-semibold">Smarter Insights. Better Growth.</span>
          </p>
        </div>

        {/* 👤 Recently Analyzed Users */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recently Analyzed</h3>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {['@topcreator', '@bordermarketing', '@krawlskine', '@influencer', '@socialmedia'].map((profile) => (
                <div key={profile} className="flex-shrink-0 bg-gradient-to-br from-purple-100 to-pink-50 p-4 rounded-lg shadow">
                  <div className="font-medium text-purple-800">{profile}</div>
                  <div className="text-sm text-pink-600">Analyzed just now</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
