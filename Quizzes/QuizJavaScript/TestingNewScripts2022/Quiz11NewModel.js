Survey.StylesManager.applyTheme("modern");

const surveyJson = {
    title: "Does This Make Sense?",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [{
        elements: [{
            type: "html",
            html: "Quiz questions allow for immediate assessment of your understanding of a section. Try them out. Click on <b>'Start Quiz'</b> button when you are ready."
        }]
    }, {
    	elements: [{
    		type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: "Which of the following insurer decisions does not primarily involve the use of data?",
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
{
        elements: [{
            type: "radiogroup",
            name: "libertyordeath",
            title: "Whose quote is this: \"Give me liberty, or give me death\"?",
            choicesOrder: "random",
            choices: [
                "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
            ],
            correctAnswer: "Patrick Henry"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "magnacarta",
            title: "What is Magna Carta?",
            choicesOrder: "random",
            choices: [
                "The foundation of the British parliamentary system",
                "The Great Seal of the monarchs of England",
                "The French Declaration of the Rights of Man",
                "The charter signed by the Pilgrims on the Mayflower"
            ],
            correctAnswer: "The foundation of the British parliamentary system"
        }]
    }],
    completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }]
};

const survey = new Survey.Model(surveyJson);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});