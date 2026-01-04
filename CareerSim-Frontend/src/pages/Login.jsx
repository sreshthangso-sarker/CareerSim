import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="center-page">
      <div className="glass w-[90%] max-w-md p-8 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input className="w-full mb-4 p-3 rounded text-black" placeholder="Email" />
        <input className="w-full mb-6 p-3 rounded text-black" placeholder="Password" type="password" />

        <button className="btn w-full mb-3" onClick={() => navigate("/home")}>
          Login
        </button>

        <p className="text-center text-sm opacity-80">
          New user?{" "}
          <span className="underline cursor-pointer" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
