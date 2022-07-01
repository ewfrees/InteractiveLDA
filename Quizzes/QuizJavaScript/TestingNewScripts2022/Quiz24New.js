

Survey.StylesManager.applyTheme("modern");

var surveyJson24 = {
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
title: `The maximum likelihood estimator (MLE) for θ is any maximizer of the likelihood; in a sense the MLE chooses the set of parameter values that best explains the observed observations.  It is customary to equivalently maximise the logarithm of the likelihood L(⋅), denoted by l(⋅), and look at the set of zeros of its first derivative l′(⋅). To find the maximum likelihood estimate, we require:`,
cellType: "html",
choices: [
"l'(·) = 0 and l''(·) = 0", 
"l'(·) = 0 and l''(·) > 0", 
"l'(·) < 0 and l''(·) = 0", 
"l'(·) > 0 and l''(·) = 0",
"l'(·) = 0 and l''(·) < 0" 
],
correctAnswer: "l'(·) = 0 and l''(·) < 0"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Assume that the estimate mean is less than the estimated variance. Of the binomial, Poisson and negative binomial distributions, which distribution of will result in a higher maximum likelihood value and therefore better fit?`,
cellType: "html",
choices: [
"Binomial",
"Poisson",
"Negative binomial"
],
correctAnswer: "Negative binomial"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Assume that the estimate mean equals the estimated variance. Of the binomial, Poisson and negative binomial distributions, which distribution of will result in a higher maximum likelihood value and therefore better fit?`,
cellType: "html",
choices: [
"Binomial",
"Poisson",
"Negative binomial"
],
correctAnswer: "Poisson"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Assume that the estimate mean is greater than the estimated variance. Of the binomial, Poisson and negative binomial distributions, which distribution of will result in a higher maximum likelihood value and therefore better fit?`,
cellType: "html",
choices: [
"Binomial",
"Poisson",
"Negative binomial"
],
correctAnswer: "Binomial"
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

const survey24 = new Survey.Model(surveyJson24);


$(function() {
    $("#surveyResult24").Survey({ model: survey24 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json24 = Object.assign(surveyJson24, jsonHeader);
let jsonSum24 = jsonSummary4EWF(json24);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz24Soln").innerHTML = jsonSum24.completedHtml; 
window.survey = new Survey.Model(json24);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult24');
    });
markdownConverterEWF();