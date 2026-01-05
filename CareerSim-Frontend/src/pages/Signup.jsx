import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/20 backdrop-blur-xl p-8 text-white
                      shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-3 rounded-xl bg-white/80 text-black placeholder-gray-600
                     focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-xl bg-white/80 text-black placeholder-gray-600
                     focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl bg-white/80 text-black placeholder-gray-600
                     focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-xl bg-white/30 hover:bg-white/40
                     transition font-semibold
                     shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
