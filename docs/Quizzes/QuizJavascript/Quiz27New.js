Survey.StylesManager.applyTheme("modern");

var surveyJson27 = {
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
title: `What is the purpose of a goodness of fit test?`,
cellType: "html",
choices: [
"To find estimations of the parameters of a distribution",
"To find mixtures of distributions",
"To fit a distribution",
"All choices are correct",
"To test whether the fitted distribution is good representation of the underlying distribution"
],
correctAnswer: "To test whether the fitted distribution is good representation of the underlying distribution" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `When applying Pearson’s chi-square statistic for a goodness of fit test, what is a simple rule of thumb when defining the cells so that the chi-square distribution is a good approximation to the finite sample distribution of the statistic?`,
cellType: "html",
choices: [
"Define all the cells such that at least 80%, if not all, have expected counts greater than 3",
"Define all the cells such that at least 80%, if not all, have expected counts less than 3",
"Define all the cells such that at least 80%, if not all, have expected counts less than 5",
"No choice is correct",
"Define all the cells such that at least 80%, if not all, have expected counts greater than 5"
],
correctAnswer: "Define all the cells such that at least 80%, if not all, have expected counts greater than 5"
}]} 
],
completedHtml: "<h8>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h8>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h8>Unfortunately, none of your answers are correct. Please try again.</h8>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h8>Congratulations! You answered all the questions correctly!</h8>"
    }]
};

const survey27 = new Survey.Model(surveyJson27);


$(function() {
    $("#surveyResult27").Survey({ model: survey27 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json27 = Object.assign(surveyJson27, jsonHeader);
let jsonSum27 = jsonSummary2EWF(json27);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz27Soln").innerHTML = jsonSum27.completedHtml; 
window.survey = new Survey.Model(json27);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult27');
    });
markdownConverterEWF();

  
