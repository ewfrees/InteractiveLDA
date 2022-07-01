Survey.StylesManager.applyTheme("modern");

var surveyJson11 = {
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
title: "Which of the following is not a reason that insurance is an important economic activity?",
cellType: "html",
choices: [
"Insurance premiums comprised about 6.3% of world GDP in 2013",
"Insurance premiums comprised about 7.5% of US GDP in 2013",
"Almost everyone owning a home has insurance to protect their property",
"Almost every country requires insurance for those driving a car",
"Insurance is just as entertaining as the sports industry"
],
correctAnswer: "Insurance is just as entertaining as the sports industry"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: "Which of the following insurer decisions does not primarily involve the use of data?",
cellType: "html",
choices: [
"Deciding how much to pay employees",
"Deciding how many employees to retain",
"Deciding how to price their insurance",
"Deciding how to forecast financial trends",
"Deciding whether to allow employees to wear casual clothing on a Friday"
],
correctAnswer: "Deciding whether to allow employees to wear casual clothing on a Friday"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: "Which of the following is not associated with losses from insurance contracts?",
cellType: "html",
choices: [
"An insurance loss could be the amount of damage to one’s apartment under a renter’s insurance agreement",
"An insurance loss could be the amount needed to compensate someone that you hurt in a driving accident",
"An insurance loss is sometimes called an insurance claim",
"An insurance loss is sometimes called simply a loss amount",
"An insurance loss is the amount of loss under a put option"
],
correctAnswer: "An insurance loss is the amount of loss under a put option"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: "Which of the following describes the term “analytics”?",
cellType: "html",
choices: [
"Losses that potentially arise from obligations in insurance contracts",
"When each claim has its own level and there are an uncertain, or random, number of claims for each individual",
"A collection of random variables",
"A variable that is constrained to fall within certain boundaries; for example, realizations that cannot be below zero.",
"The process of using data to make decisions"
],
correctAnswer: "The process of using data to make decisions"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: "Which of the following does not describe a process for making data-driven business decisions?",
cellType: "html",
choices: [
"Business analytics",
"Business intelligence",
"Data science",
"Analytics",
"Insurance processes"
],
correctAnswer: "Insurance processes"
}]}
],
    completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }]
};

const survey11 = new Survey.Model(surveyJson11);


$(function() {
    $("#surveyResult11").Survey({ model: survey11 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json11 = Object.assign(surveyJson11, jsonHeader);
let jsonSum11 = jsonSummary5EWF(json11);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz11Soln").innerHTML = jsonSum11.completedHtml; 
window.survey = new Survey.Model(json11);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult11');
    });
markdownConverterEWF();
  
