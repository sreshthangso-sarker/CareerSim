import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.career || !state.answers) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass p-10 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">No Result Found</h2>
          <p className="mb-6">Please take the simulation first.</p>
          <button
            onClick={() => navigate("/home")}
            className="glass-btn px-8 py-4 font-bold"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { career, answers } = state;

  // Demo AI-style evaluation
  const compatibility =
    55 + answers.length * 6 + Math.floor(Math.random() * 10);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass w-[70%] p-14 text-white text-center shadow-xl">
        <h2 className="text-4xl font-extrabold mb-4">
          Career Evaluation
        </h2>

        <h3 className="text-2xl font-bold mb-8">
          {career}
        </h3>

        <p className="text-6xl font-extrabold mb-12">
          {compatibility}%
        </p>

        <div className="grid grid-cols-2 gap-14 mb-14 text-center">
          <div>
            <h4 className="text-xl font-extrabold mb-6">
              Strengths
            </h4>
            <div className="space-y-3 text-lg font-medium">
              <p>Strong decision-making ability</p>
              <p>Adaptive thinking style</p>
              <p>Good career alignment</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-extrabold mb-6">
              Weaknesses
            </h4>
            <div className="space-y-3 text-lg font-medium">
              <p>Needs deeper specialization</p>
              <p>Limited real-world exposure</p>
              <p>Confidence under pressure</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="glass-btn px-12 py-4 text-lg font-bold"
        >
          Test Another Career
        </button>
      </div>
    </div>
  );
}
