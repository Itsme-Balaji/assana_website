import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-t-orange-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
