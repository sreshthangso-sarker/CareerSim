import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TASKS = {
  "Software Engineer": [
    { q: "How do you approach a complex bug?", o: ["Debug step-by-step", "Search online", "Ask teammate"] },
    { q: "Preferred work style?", o: ["Independent coding", "Team collaboration", "Planning first"] },
    { q: "Deadline pressure?", o: ["Enjoy it", "Manage calmly", "Feel stressed"] },
  ],
  "Mechanical Engineer": [
    { q: "Design approach?", o: ["Simulation first", "Prototype first", "Theory-based"] },
    { q: "Tool preference?", o: ["CAD software", "Physical tools", "Both"] },
    { q: "Problem-solving style?", o: ["Analytical", "Hands-on", "Hybrid"] },
  ],
  Designer: [
    { q: "Design priority?", o: ["User needs", "Visual appeal", "Innovation"] },
    { q: "Handling feedback?", o: ["Iterate fast", "Defend design", "Analyze deeply"] },
    { q: "Creative block?", o: ["Take break", "Research", "Sketch freely"] },
  ],
  Doctor: [
    { q: "Decision making?", o: ["Data-driven", "Experience-based", "Consult seniors"] },
    { q: "Patient pressure?", o: ["Stay calm", "Feel anxious", "Delegate"] },
    { q: "Learning preference?", o: ["Case studies", "Textbooks", "Practice"] },
  ],
};

export default function Simulation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const career = state?.career;
  const tasks = TASKS[career];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (!career || !tasks) {
      navigate("/");
    }
  }, [career, tasks, navigate]);

  if (!career || !tasks) return null;

  const handleSelect = (option) => {
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);

    // auto move to next task or result
    if (current < tasks.length - 1) {
      setTimeout(() => setCurrent(current + 1), 300);
    } else {
      setTimeout(() => {
        navigate("/result", {
          state: { career, answers: updated },
        });
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass w-[70%] p-14 text-white text-center shadow-xl">
        <h2 className="text-4xl font-extrabold mb-6">
          {career} Simulation
        </h2>

        <p className="text-lg font-semibold mb-6">
          Task {current + 1} of {tasks.length}
        </p>

        <p className="text-2xl font-bold mb-10">
          {tasks[current].q}
        </p>

        <div className="flex flex-col gap-5">
          {tasks[current].o.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className="glass-btn py-5 text-lg font-semibold hover:scale-[1.02] transition"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
