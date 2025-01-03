import React from 'react';

interface CurrentTimeProps {
  timestamp: string;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ timestamp }) => {
  const date = new Date(timestamp);
  
  const formatTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Current Time</h2>
      <p className="text-lg text-gray-700">{formatTime(date)}</p>
    </div>
  );
};

export default CurrentTime;
