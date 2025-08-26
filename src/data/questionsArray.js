// src/data/questions.js
export const questionArray = [
    {
        id: 'html',
        title: "HTML Basics",
        questions: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Tool Markup Language",
                    "Hyper Text Markup Language",
                    "Hyperlinks and Text Mark Language",
                    "Home Tool Markup Language"
                ],
                correctAnswer: 1

            },
            {
                question: "Which tag is used to create a hyperlink in HTML?",
                options: [
                    "<link>",
                    "<href>",
                    "<a>",
                    "<hyperlink>"
                ],
                correctAnswer: 2

            },
            {
                question: "Which HTML tag is used to insert an image?",
                options: [
                    "<img>",
                    "<src>",
                    "<image>",
                    "<pic>"
                ],
                correctAnswer: 0

            },
            {
                question: "Which attribute is used to provide an alternate text for an image?",
                options: [
                    "alt",
                    "title",
                    "src",
                    "name"
                ],
                correctAnswer: 0
            },
            {
                question: "What is the correct structure of an HTML document?",
                options: [
                    "<html> <head> <title> </title> </head> <body> </body> </html>",
                    "<head> <html> <body> </body> </html> </head>",
                    "<body> <html> <head> </head> </body> </html>",
                    "<title> <html> <head> </head> </title> <body> </body> </html>"
                ],
                correctAnswer: 0
            }

        ]
    },
    {
        id: 'css',
        title: "CSS Fundamentals",
        questions: [
            {
                question: "What does the z-index property in CSS control?",
                options: [
                    "The zoom level of an element",
                    "The stacking order of elements",
                    "The padding inside an element",
                    "The rotation angle of an element"
                ],
                correctAnswer: 1
            },
            {
                question: "Which CSS property is used to change the text color of an element?",
                options: [
                    "font-color",
                    "text-style",
                    "color",
                    "text-color"
                ],
                correctAnswer: 2
            },
            {
                question: "Which CSS unit is relative to the root element's font size?",
                options: [
                    "em",
                    "rem",
                    "%",
                    "vh"
                ],
                correctAnswer: 1
            },
            {
                question: "How do you make a flex container in CSS?",
                options: [
                    "display: flex;",
                    "flex: display;",
                    "container-type: flex;",
                    "flex-box: true;"
                ],
                correctAnswer: 0
            },
            {
                question: "What does the 'position: absolute' property do?",
                options: [
                    "Positions the element relative to its normal position",
                    "Fixes the element to the screen",
                    "Removes the element from the flow and positions it relative to the nearest positioned ancestor",
                    "Makes the element responsive"
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'js',
        title: "JavaScript Advanced",
        questions: [
            {
                question: "Which of the following is a correct way to declare a JavaScript function?",
                options: [
                    "function = myFunction()",
                    "function myFunction() {}",
                    "declare myFunction()",
                    "fn myFunction() {}"
                ],
                correctAnswer: 1
            },
            {
                question: "What is the output of: console.log(typeof null);",
                options: [
                    "\"null\"",
                    "\"object\"",
                    "\"undefined\"",
                    "\"boolean\""
                ],
                correctAnswer: 1
            },
            {
                question: "Which method is used to convert a JSON string into a JavaScript object?",
                options: [
                    "JSON.parse()",
                    "JSON.stringify()",
                    "JSON.convert()",
                    "JSON.objectify()"
                ],
                correctAnswer: 0
            },
            {
                question: "Which keyword declares a block-scoped variable in JavaScript?",
                options: [
                    "var",
                    "const",
                    "let",
                    "static"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the result of '2' + 2 in JavaScript?",
                options: [
                    "4",
                    "22",
                    "NaN",
                    "Error"
                ],
                correctAnswer: 1
            }
        ],
    },

];
