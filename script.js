// The provided course information.
const CourseInfo = {
  id: 451,
  name: 'Introduction to JavaScript',
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: 'Fundamentals of JavaScript',
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      assignment_id: 1,
      name: 'Declare a Variable',
      due_at: '2024-02-12',
      points_possible: 50,
    },
    {
      assignment_id: 2,
      name: 'Write a Function',
      due_at: '2024-02-17',
      points_possible: 150,
    },
    {
      assignment_id: 3,
      name: 'Code the World',
      due_at: '2024-02-25',
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_date: '2024-02-11',
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_date: '2024-02-15',
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_date: '2024-02-25',
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_date: '2024-02-10',
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_date: '2024-02-18',
      score: 140,
    },
  },
  {
    learner_id: 132,
    assignment_id: 3,
    submission: {
      submitted_date: '2024-02-27',
      score: 140,
    },
  },
];

// collect learner information
const studentsubmission = LearnerSubmissions.map((LearnerSubmissions) => ({
  learner_id: LearnerSubmissions.learner_id,
  assignment_id: LearnerSubmissions.assignment_id,
  submitted_date: LearnerSubmissions.submission.submitted_date,
  score: LearnerSubmissions.submission.score,
}));
//console.log(studentsubmission);

// collect assignments due date and points
const ass = AssignmentGroup.assignments.map((assignments) => ({
  assignment_id: assignments.assignment_id,
  due_at: assignments.due_at,
  points_possible: assignments.points_possible,
}));
//console.log(ass);

//  concatenate and flat the arrays
const info = studentsubmission.concat(ass);
allStudentInformation = info.flat();
//console.log(allStudentInformation);

const scoreresult = [];
const Point = [];

for (let i = 0; i < LearnerSubmissions.length; i++) {
  grade = allStudentInformation[i].score;
  scoreresult.push(grade);
  
  for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
    pointpossible = AssignmentGroup.assignments[i].points_possible;
    Point.push(pointpossible);
    
  if (
      LearnerSubmissions.assignment_id ===
      AssignmentGroup.assignments.assignment_id
    ) {
      let studentgrade = grade / pointpossible;
      console.log(
        `Id:${LearnerSubmissions.learner_id},:${AssignmentGroup.assignments.assignment_id},${studentgrade} `
      );
    }
  }
}
//console.log(scoreresult);
//console.log(Point);

/* function getLearnerData(course, AssignmentGroup, submissions) {
  const results = [];

  const example_result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  // Parse submission data.
  console.log(`Submission Data:`, submissions );
  // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
  // Find existing data for this learner, if any.
  // If the learner already has data, add the new score to the existing data.
  // Calculate the average score for each learner and remove the extra data.

  //==== PUT CODE HERE =====//
  return results;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result); */

// deconstruct element from the array
//console.log(allStudentInfo);
/* CanvasGradient.foreach((allStudentInfo.submission))=> {
  console.log(allStudentInfo.submission.score);
}*/
