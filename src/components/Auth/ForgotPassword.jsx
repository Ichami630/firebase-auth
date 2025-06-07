import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, sendPasswordResetEmail } from '../../services/firebase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('password reset email sent');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 font-semibold rounded-md transition ${
              loading
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
}
