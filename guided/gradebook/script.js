function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let grade = getGrade(studentScore);
    if (grade === "F") {
        return "Class average: " + getAverage(totalScores) + 
        ". Your grade: " + grade + ". You failed the course."
    } else {
        return "Class average: " + getAverage(totalScores) + 
        ". Your grade: " + grade + ". You passed the course."
    }
}

function gradebook() {
    let totalScores = prompt("Enter the scores of the class as a comma separated list" + 
        "\n" + "Format - 1,2,3,...").split(",").map((x) => +x);
    let studentScore = +prompt("What is your score?")
    alert(studentMsg(totalScores, studentScore))
    
}
  