import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // ✅ import toast
import ManWithLaptop from '../../assets/man-with-laptop.svg';
import Logo from '../../assets/Logo.png';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      toast.error("Passwords don't match");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.email === email)) {
      toast.error('Email already exists');
      return;
    }

    const newUser = { email, username, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    toast.success('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-dosis">
      <style>{`
        .custom-gradient {
          background: radial-gradient(circle at 30% 30%, #a87c4c 10%, transparent 40%),
                      radial-gradient(circle at 70% 50%, #3a2d26 20%, transparent 50%),
                      radial-gradient(circle at 50% 80%, #b3906b 10%, transparent 40%),
                      linear-gradient(135deg, #5b4434, #1f1a17);
          background-blend-mode: screen;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
      `}</style>

      <div className="custom-gradient"></div>

      <div className="z-10 w-full max-w-6xl bg-transparent grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] p-4 items-center">
        {/* Left Side Illustration */}
        <div className="flex items-center justify-center">
          <img src={ManWithLaptop} alt="Illustration" className="w-full" />
        </div>

        {/* Vertical White Line */}
        <div className="hidden md:block w-px bg-white mx-6 h-[80%] self-center"></div>

        {/* Right Side Signup Form */}
        <div className="flex flex-col justify-center items-center text-white px-8 py-6">
          <img src={Logo} alt="Logo" className="w-32 h-full" />
          <h2 className="text-4xl font-bold mb-2 text-center">
            Hello! Sign-up to get started...
          </h2>

          <form
            onSubmit={handleSignup}
            className="w-full max-w-sm flex flex-col gap-4 mt-4"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={e => setUsername(e.target.value)}
              className="px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail id"
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={e => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none"
              required
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              onChange={e => setConfirm(e.target.value)}
              className="px-4 py-2 rounded-lg border border-white bg-transparent text-white placeholder-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-300"
            >
              SIGNUP
            </button>
          </form>

          <a href="/login">
            <p className="mt-6 text-white">
              Already have an account?{' '}
              <span className="text-orange-300 cursor-pointer">Login</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
