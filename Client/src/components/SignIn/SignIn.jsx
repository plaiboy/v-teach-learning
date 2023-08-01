
import React from 'react';

const SignInPopup = ({onClose}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-1 z-0">
    <div className="bg-white rounded-lg shadow-lg p-8 w-1/2 h-1/2">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        />
      </div>
      <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold mb-4">
        Sign In
      </button>
      <div className="flex items-center justify-center">
        <span className="mr-2">Or sign in with:</span>
        <button className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
          {/* Replace the following icon with a Google icon or logo */}
          G
        </button>
      </div>
      <p className="mt-4 text-center">
        Don't have an account? <a href="#">Sign Up</a>
      </p>
      <button
          className="w-full py-2 bg-red-500 text-white rounded-lg font-semibold mt-4"
          onClick={onClose}
        >
          X
        </button>
    </div>
    </div>
  
  );
};

export default SignInPopup;

