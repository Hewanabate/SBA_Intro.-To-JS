//Provided data
const courseInfo = {
  id: 101,
  name: "Introduction to Programming",
};

const assignmentGroup = [
  {
    id: 201,
    name: "Programming Assignments",
    course_id: 101,
    group_weight: 50,
    assignments: [
      {
        id: 1,
        name: "Assignment 1",
        due_at: "2024-02-11",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Assignment 2",
        due_at: "2024-02-17",
        points_possible: 100,
      },
      {
        id: 3,
        name: "Assignment 3",
        due_at: "2024-02-22",
        points_possible: 100,
      },
    ],
  },
];

const learnerSubmissions = [
  {
    learner_id: 120,
    assignment_id:1,
    submission: {
      submitted_at: "2024-02-12",
      score: 45,
    },
  },
  {
    learner_id: 120,
    assignment_id:2,
    submission: {
      submitted_at: "2024-02-16",
      score: 70,
    },
  },
  {
    learner_id: 222,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-4-30",
      score: 80,
    },
  },
];



//validate learner submition typeof 
function isValidLearnerSubmission(submission, assignment) {
  const score = submission.submission.score;
  const pointsPossible = assignment.points_possible;

  if (isNaN(score)||pointsPossible === 0 || typeof score !== "number" ) {
    return false;
  } else { 
    return true;
  }
}

function getLearnerData(courseInfo, assignmentGroups, learnerSubmissions) {
  try {
    const results = [];

    learnerSubmissions.forEach((submission) => {
      assignmentGroups.forEach((ass_group) => {
        //validate assignment groups
        if (ass_group.course_id !== courseInfo.id) {
          throw new Error("Course ID mismatch.");
        }

        const assignment = ass_group.assignments.find(
          (ass_id) => ass_id.id === submission.assignment_id
        );
          
        if (!assignment) return;
        if (!isValidLearnerSubmission(submission, assignment)) return;

        const dueDate = new Date(assignment.due_at);
        if (new Date() < dueDate) return;

        let totalScore =
          (submission.submission.score / assignment.points_possible);
        if (new Date(submission.submission.submitted_at) > dueDate) {
          totalScore -= totalScore * 0.1; // Deduct 10% for late submission
        }

        let learnerResult = results.find((reslt) => reslt.id === submission.learner_id);
        if (!learnerResult) {
          learnerResult = { id: submission.learner_id, avg: 0 };
          results.push(learnerResult);
        }

        learnerResult[submission.assignment_id] = totalScore;
      });
    });

    results.forEach((result) => {
      let totalScore = 0,
        totalWeight = 0;
      assignmentGroups.forEach((group) => {
        group.assignments.forEach((assignment) => {
          if (assignment.id in result) {
            totalScore += result[assignment.id] * group.group_weight;
            totalWeight += group.group_weight;
          }
        });
      });
      result.avg = totalWeight > 0 ? totalScore / totalWeight : 0;
    });

    return results;
  } catch (error) {
    console.error(error);// Handle error 
  }
}

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));
