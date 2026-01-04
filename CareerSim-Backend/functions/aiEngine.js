const careerProfiles = {
  "Software Engineer": {
    logic: 3,
    problemSolving: 3,
    teamwork: 2,
    creativity: 1,
    stress: 2,
  },
  "Mechanical Engineer": {
    logic: 3,
    problemSolving: 2,
    teamwork: 2,
    creativity: 1,
    stress: 3,
  },
  "Designer": {
    creativity: 3,
    empathy: 2,
    problemSolving: 2,
    logic: 1,
    stress: 1,
  },
  "Doctor": {
    empathy: 3,
    stress: 3,
    decisionMaking: 2,
    teamwork: 2,
    logic: 1,
  },
};

const optionSkillMap = {
  A: { logic: 2, problemSolving: 1 },
  B: { stress: 2 },
  C: { teamwork: 2, empathy: 1 },
  D: { creativity: 2 },
};

function evaluateCareer(career, answers) {
  const profile = careerProfiles[career];
  const userSkills = {};

  answers.forEach((choice) => {
    const skills = optionSkillMap[choice];
    for (const skill in skills) {
      userSkills[skill] = (userSkills[skill] || 0) + skills[skill];
    }
  });

  let score = 0;
  let maxScore = 0;

  for (const skill in profile) {
    maxScore += profile[skill] * 3;
    score += (userSkills[skill] || 0) * profile[skill];
  }

  const compatibility = Math.min(
    95,
    Math.max(45, Math.round((score / maxScore) * 100))
  );

  const sortedSkills = Object.entries(userSkills).sort((a, b) => b[1] - a[1]);

  return {
    compatibility,
    strengths: sortedSkills.slice(0, 3).map(([s]) => s),
    weaknesses: sortedSkills.slice(-2).map(([s]) => s),
    roadmap: [
      "Practice real-world scenarios",
      "Strengthen weaker skill areas",
      "Build projects related to this career",
    ],
  };
}

module.exports = { evaluateCareer };
