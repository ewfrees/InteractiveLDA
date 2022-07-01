

Survey.StylesManager.applyTheme("modern");

var surveyJson25 = {
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
title: `A count distribution that is a member of the (a,b,1) class is useful in what kind of scenarios?:`,
cellType: "html",
choices: [
"When we are looking at the number of insurance claims and there are few zero counts e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates", 
"When we are looking at the number of insurance claims and the zero counts are in line with the frequency distributions e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates",
"All choices are correct",
"No choice is correct", 
"When we are looking at the number of insurance claims and there is an excess of zero counts e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates" 
],
correctAnswer: "When we are looking at the number of insurance claims and there is an excess of zero counts e.g. in auto insurance, where policyholders may not want to report the first claim because of fear that it may increase future insurance rates"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The recursive formula for the (a,b,1) class starts with`,
cellType: "html",
choices: [
"$p\\_0$",
"$p\\_1$",
"$p\\_2$",
"$p\\_3$",
"$p\\_4$"
],
correctAnswer: "$p\\_4$"
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

const survey25 = new Survey.Model(surveyJson25);


$(function() {
    $("#surveyResult25").Survey({ model: survey25 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json25 = Object.assign(surveyJson25, jsonHeader);
let jsonSum25 = jsonSummary2EWF(json25);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz25Soln").innerHTML = jsonSum25.completedHtml; 
window.survey = new Survey.Model(json25);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult25');
    });
markdownConverterEWF();

  
