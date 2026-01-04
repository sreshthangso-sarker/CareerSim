import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="center-page">
      <div className="glass w-[90%] max-w-md p-8 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

        <input className="w-full mb-3 p-3 rounded text-black" placeholder="Name" />
        <input className="w-full mb-3 p-3 rounded text-black" placeholder="Email" />
        <input className="w-full mb-6 p-3 rounded text-black" placeholder="Password" type="password" />

        <button className="btn w-full" onClick={() => navigate("/")}>
          Create Account
        </button>
      </div>
    </div>
  );
}
