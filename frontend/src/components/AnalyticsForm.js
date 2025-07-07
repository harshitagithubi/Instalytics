import React, { useState } from 'react';
import axios from 'axios';

function AnalyticsForm() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const response = await axios.post('http://localhost:8000/api/analytics', { username });
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};


<button 
  type="submit" 
  className="bg-blue-500 text-white p-2"
  disabled={loading}
>
  {loading ? 'Analyzing...' : 'Analyze'}
</button>
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Instagram Analytics Input</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Instagram handle"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Analyze</button>
      </form>
      {data && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-bold">Analysis for {data.username}</h3>
          <p>Followers: {data.followers}</p>
          <p>Engagement: {data.engagement}%</p>
        </div>
      )}
    </div>
  );
}

export default AnalyticsForm;