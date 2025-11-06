import React from 'react';

const Svg = () => {
  const handleSendMoney = () => {
    alert('Redirecting to money transfer...');
  };

  const handleLogin = () => {
    alert('Redirecting to login...');
  };

  const handleSignUp = () => {
    alert('Redirecting to sign up...');
  };

  return (
    <div className="min-h-screen gradient-bg text-white flex items-center justify-center p-4">
      <div className="container mx-auto max-w-md">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Enhance <span className="text-emerald-400 block">your</span>
          </h1>
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <h2 className="text-2xl md:text-3xl font-bold">Financial with Wishpay</h2>
        </header>

        {/* Description */}
        <p className="text-gray-300 text-center mb-10 text-lg">
          Moving money should never take more than a few taps. Transfers are always free between friends.
        </p>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <button 
            onClick={handleSendMoney}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30 w-full max-w-xs"
          >
            Send Money Now
          </button>
        </div>

        {/* Partners Section */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {['OpenAI', 'Raycast', 'Famp'].map((partner, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-4 text-center font-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {partner}
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4 mb-10">
          <button 
            onClick={handleLogin}
            className="flex-1 border-2 border-emerald-500 text-emerald-500 font-bold py-3 rounded-full transition-all duration-300 hover:bg-emerald-500/10"
          >
            Login
          </button>
          <button 
            onClick={handleSignUp}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
          >
            Sign Up
          </button>
        </div>

        {/* Cashback Section */}
        <div className="bg-gray-900 rounded-xl p-5 text-center font-bold">
          Beneficial User <span className="text-emerald-400">Cashback</span>
        </div>

        {/* Additional Features Section */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          <FeatureCard 
            icon="⚡"
            title="Fast Transfers"
            description="Instant money movement"
          />
          <FeatureCard 
            icon="🛡️"
            title="Secure"
            description="Bank-level security"
          />
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 rounded-xl p-4 text-center">
    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">
      {icon}
    </div>
    <h3 className="font-bold">{title}</h3>
    <p className="text-xs text-gray-400 mt-1">{description}</p>
  </div>
);

export default Svg;