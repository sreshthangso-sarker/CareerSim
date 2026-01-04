import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Careers() {
  const navigate = useNavigate();

  const careers = [
    {
      name: "Software Engineer",
      description: "Build and maintain software systems",
    },
    {
      name: "Doctor",
      description: "Diagnose and treat patients",
    },
    {
      name: "Mechanical Engineer",
      description: "Design and build mechanical systems",
    },
    {
      name: "Designer",
      description: "Create visual and user-friendly designs",
    },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Logout button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Career</h1>

      <div className="grid gap-4 max-w-xl mx-auto">
        {careers.map((career, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{career.name}</h2>
            <p className="mb-3">{career.description}</p>
            <button
              onClick={() =>
                navigate("/simulation", {
                  state: { career: career.name },
                })
              }
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Start Simulation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
