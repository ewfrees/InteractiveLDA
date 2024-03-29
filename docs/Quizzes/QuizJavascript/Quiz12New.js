Survey.StylesManager.applyTheme("modern");

var surveyJson12 = {
    title: "Does This Make Sense?",
    firstPageIsStarted: true,    
    showProgressBar: "bottom",
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
title: "Which of the following is not a major operational area of an insurance company?",
cellType: "html",
choices: [
"Insurance Education",
"Renewing Insurance",
"Claims Management",
"Loss Reserving",
"Solvency and Capital Allocation"
],
correctAnswer: "Insurance Education"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: "Which of the following is true regarding pricing of an insurance product?",
cellType: "html",
choices: [
"Setting the price of an insurance product is typically a straightforward problem",
"In insurance, the cost of a product is (relatively) known and provides a benchmark for assessing a market demand price", 
"In insurance, the cost of a product is certain and market-consistent prices are typically well-known",
"It has been traditional in insurance pricing to use the expected cost as a baseline", 
"Insurers are reluctant to charge more than the expected costs to account for the product’s riskiness, expenses incurred in servicing the product, and an allowance for profit/surplus of the company"
],
correctAnswer: "It has been traditional in insurance pricing to use the expected cost as a baseline"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: "Which of the following is true of insurance renewals?",
cellType: "html",
choices: [
"Short-term insurance contracts are rarely renewed",
"At renewal, insurance companies are not allowed to determine a new premium, they are required to accept all renewal applications",
"For risk classification and rating at renewal, the insurer has available a history of policyholder's loss experience, and this history can provide insights into the policyholder that are not available from rating variables",
"Modifying premiums with claims history, known as experience rating, is only available at contract initiation",
"It is not permitted to base insurance premiums on a policyholder's claims history"
],
correctAnswer: "For risk classification and rating at renewal, the insurer has available a history of policyholder's loss experience, and this history can provide insights into the policyholder that are not available from rating variables"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: "Which of the following is not true of claims and product management?",
cellType: "html",
choices: [
"The process of determining legal liability and settling claims is known as claims adjustment",
"Insurance managers sometimes use the phrase claims leakage to mean dollars lost through claims management inefficiencies", 
"Mitigating fraud is not an important part of claims management process",
"Claims triaging refers to the process of early identification and appropriate handling of high cost claims",
"The insurance industry has high operating costs relative to other portions of the financial services sectors"
],
correctAnswer: "Mitigating fraud is not an important part of claims management process"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: "Which of the following is not true of loss reserving?",
cellType: "html",
choices: [
"Unlike other industries, in insurance money received from a customer occurs in advance of benefits or services; these are rendered at a later date",
"Monies set aside for unpaid claims are known as loss reserves or technical provisions",
"Because loss reserves are not traded on the open market, accurately determining loss reserves is not important to most insurers",
"Loss reserving is required by laws and regulations", 
"Stakeholders such as investors and customers make decisions that depend on company loss reserves"
],
correctAnswer: "Because loss reserves are not traded on the open market, accurately determining loss reserves is not important to most insurers"
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

const survey12 = new Survey.Model(surveyJson12);

$(function() {
    $("#surveyResult12").Survey({ model: survey12 });
});

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json12 = Object.assign(surveyJson12, jsonHeader);
let jsonSum12 = jsonSummary5EWF(json12);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz12Soln").innerHTML = jsonSum12.completedHtml; 
window.survey = new Survey.Model(json12);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult12');
    });
markdownConverterEWF();
  
