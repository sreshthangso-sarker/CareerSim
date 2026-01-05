import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      {/* Logout */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-6 right-6 glass-btn px-6 py-2 text-white font-semibold"
      >
        Log out
      </button>

      <div className="glass w-full max-w-5xl p-12 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Career Simulation
        </h1>

        <p className="text-lg font-medium opacity-90 mb-10">
          Experience real-world tasks and discover your career compatibility
        </p>

        <div className="grid grid-cols-2 gap-8">
          {[
            "Software Engineer",
            "Mechanical Engineer",
            "Designer",
            "Doctor",
          ].map((career) => (
            <button
              key={career}
              onClick={() =>
                navigate("/simulation", { state: { career } })
              }
              className="glass-btn py-10 text-xl font-bold"
            >
              {career}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}