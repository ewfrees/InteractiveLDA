

Survey.StylesManager.applyTheme("modern");

var surveyJson26 = {
    title: "Does This Make Sense?",
    showProgressBar: "bottom",
    firstPageIsStarted: true,    
    startSurveyText: "Start Quiz",
    pages: [{
        elements: [{
            type: "html",
            html: "Quiz questions allow for immediate assessment of your understanding of a section. Try them out. Click on <b>'Start Quiz'</b> button when you are ready."
        }]
    },
{questions: [{type: "radiogroup",
name: "<b>Question 1</b>",
choicesOrder: "random",
title: `The distribution function of a mixture distribution is a convex combination of the component distribution functions.  Which of the following can this result not be extended to?`,
cellType: "html",
choices: [
"Density function",
"Survival function",
"Raw moments",
"Expectations",
"Central moments"
],
correctAnswer: "Central moments"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Suppose we have a population of drivers with distribution of claims for an individual driver being Poisson.  The expected number of claims (λ) has a distribution being gamma.  What is the resulting distribution of $N$, the number of claims of a randomly chosen driver?`,
cellType: "html",
choices: [
"Poisson",
"Gamma",
"Binomial",
"Lognormal",
"Negative Binomial"
],
correctAnswer: "Negative Binomial"
}]}
],
completedHtml: "<h6>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h6>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h6>Unfortunately, none of your answers are correct. Please try again.</h6>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h6>Congratulations! You answered all the questions correctly!</h6>"
    }]
};

const survey26 = new Survey.Model(surveyJson26);


$(function() {
    $("#surveyResult26").Survey({ model: survey26 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json26 = Object.assign(surveyJson26, jsonHeader);
let jsonSum26 = jsonSummary2EWF(json26);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz26Soln").innerHTML = jsonSum26.completedHtml; 
window.survey = new Survey.Model(json26);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult26');
    });
markdownConverterEWF();
  
