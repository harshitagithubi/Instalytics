import React from 'react';

const Pricing = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h3 className="text-xl">Free</h3>
          <p>Limited searches per day, basic metrics</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="text-xl">Premium</h3>
          <p>Unlimited searches, advanced metrics, downloadable reports</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;