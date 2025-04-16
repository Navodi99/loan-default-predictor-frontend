import React from 'react'
import { Link } from 'react-router-dom'
import { LockIcon, MailIcon, GithubIcon, LinkedinIcon } from 'lucide-react'


const Login = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
          <form  className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 bg-gray-800 border-gray-700 rounded focus:ring-teal-500 text-teal-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-teal-400 hover:text-teal-300"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md font-medium transition-colors"
            >
              Sign In
            </button>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors"
              >
                <div className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
