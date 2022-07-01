

Survey.StylesManager.applyTheme("modern");

var surveyJson21 = {
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
title: `The generalised price setting can be described as:`,
cellType: "html",
choices: [
"Expected cost + risk margin",
"Frequency of claims times severity of claims ",
"Actual cost + risk margin + profit margin", 
"Frequency of claims times severity of claims + profit margin", 
"Expected cost + risk margin + expenses incurred + profit margin" 
],
correctAnswer: "Expected cost + risk margin + expenses incurred + profit margin" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Aggregate claims (or expected cost of claims) are affected by two components of the insured event.  One is frequency, what is the other component?`,
cellType: "html",
choices: [
"Claims cost",
"Expected claims cost",
"Claim numbers",
"Losses",
"Severity"
],
correctAnswer: "Severity"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `When we model frequency we focus on:`,
cellType: "html",
choices: [
"The average size of claims",
"The deductibles on claims",
"The policy limits on claims",
"The delay in reporting of claims",
"The number of claims"
],
correctAnswer: "The number of claims"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `When we model severity we focus on:`,
cellType: "html",
choices: [
"The number of claims",
"The deductibles on claims",
"The policy limits on claims",
"The delay in reporting of claims",
"The average size of claims"
],
correctAnswer: "The average size of claims"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following is not a reason why insurers and other stakeholders gather and maintain frequency datasets?`,
cellType: "html",
choices: [
"To look at number of claims that fall within certain deductible and policy limit bands",
"To look at prior claim count history of policyholders",
"Insurers collect databases such as a policyholder file and a claims file which naturally leads to analysis by frequency and severity separately",
"Regulators require reporting of claim numbers",
"To look at the size of claims for large claims"
],
correctAnswer: "To look at the size of claims for large claims"
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

const survey21 = new Survey.Model(surveyJson21);


$(function() {
    $("#surveyResult21").Survey({ model: survey21 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json21 = Object.assign(surveyJson21, jsonHeader);
let jsonSum21 = jsonSummary5EWF(json21);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz21Soln").innerHTML = jsonSum21.completedHtml; 
window.survey = new Survey.Model(json21);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult21');
    });
markdownConverterEWF();