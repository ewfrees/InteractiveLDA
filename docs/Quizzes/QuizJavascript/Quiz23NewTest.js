

Survey.StylesManager.applyTheme("modern");

var surveyJson23 = {
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
name: "Question 1",
choicesOrder: "random",
title: `The general recurrence relation, $p_k/p_{k-1} = a + \\frac{b}{k}, k \\ge 1$, ties together the three distributions, the binomial, the Poisson and the negative binomial distributions.  If \\(a<0\\), we get a:`,
cellType: "html",
choices: [
"Poisson distribution \(\\beta\)",
"Negative binomial distribution $\\beta$",
`All choices are correct $$\beta$$`,
'No choice is correct $\beta$',
"Binomial distribution"
],
correctAnswer: "Binomial distribution"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The general recurrence relation, $$p\\_k/p\\_{k-1}  = a + \\frac{b}{k}, k \\ge 1$$, ties together the three distributions, the binomial, the Poisson and the negative binomial distributions. If $$a = 0$$, and \\(b > 0\\), we get a:`,
cellType: "html",
choices: [
"Binomial distribution",
"Negative binomial distribution",
"All choices are correct",
"No choice is correct",
"Poisson distribution"
],
correctAnswer: "Poisson distribution"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: 'The general recurrence relation, $p\\_k/p\\_{k-1}  = a + \\frac{b}{k}, k \\ge 1$, ties together the three distributions, the binomial, the Poisson and the negative binomial distributions. If $a > 0$, and $a+b > 0$ (or equivalently $b=(r−1)a$ with $r>0$), we get a:',
cellType: "html",
choices: [
"Binomial distribution",
"Poisson distribution",
"All choices are correct",
"No choice is correct",
"Negative binomial distribution"
],
correctAnswer: "Negative binomial distribution"
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

const survey23 = new Survey.Model(surveyJson23);

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json23 = Object.assign(surveyJson23, jsonHeader);
let jsonSum23 = jsonSummary3EWF(json23);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz23Soln").innerHTML = jsonSum23.completedHtml; 

window.survey = new Survey.Model(surveyJson23);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult23').textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
var converter = new showdown.Converter();
converter.setOption('ghCompatibleHeaderId', true);
survey
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the markdown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
        mathjaxLoad();
    });
$("#surveyElement23").Survey({model: survey23});


