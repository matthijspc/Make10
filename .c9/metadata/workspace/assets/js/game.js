{"changed":true,"filter":false,"title":"game.js","tooltip":"/assets/js/game.js","value":"var button1;\nvar button2;\nvar button3;\nvar button4;\nvar uitslag;\nvar punten = 0;\n\nfunction randomButtons() {\n    var randomButton = Math.floor(Math.random() * 4) + 2;\n    while (randomButton === 5) {\n        randomButton = Math.floor(Math.random() * 4) + 2;\n    }\n    console.log(randomButton);\n    var randomNumber1;\n    var randomNumber2;\n    var randomNumber3;\n    var randomNumber4;\n    if(randomButton === 2){\n        randomNumber1 = Math.floor(Math.random() * 5) + 1;\n        randomNumber2 = 10-randomNumber1;\n        document.getElementById(\"button1\").value = randomNumber1;\n        document.getElementById(\"button2\").value = randomNumber2;\n        document.getElementById(\"button3\").value = Math.floor(Math.random() * 10) + 1;\n        document.getElementById(\"button4\").value = Math.floor(Math.random() * 10) + 1;\n    }else if(randomButton === 3){\n        randomNumber1 = Math.floor(Math.random() * 4) + 1;\n        randomNumber2 = Math.floor(Math.random() * 4) + 1;\n        randomNumber3 = 10 - (randomNumber1 + randomNumber2);\n        document.getElementById(\"button1\").value = randomNumber1;\n        document.getElementById(\"button2\").value = randomNumber2;\n        document.getElementById(\"button3\").value = randomNumber3;\n        document.getElementById(\"button4\").value = Math.floor(Math.random() * 10) + 1;\n    }else if(randomButton === 4){\n        randomNumber1 = Math.floor(Math.random() * 4) + 1;\n        randomNumber2 = Math.floor(Math.random() * 4) + 1;\n        randomNumber3 = Math.floor(Math.random() * 4) + 1;\n        randomNumber4 = 10 - (randomNumber1 + randomNumber2 + randomNumber3);\n        document.getElementById(\"button1\").value = randomNumber1;\n        document.getElementById(\"button2\").value = randomNumber2;\n        document.getElementById(\"button3\").value = randomNumber3;\n        document.getElementById(\"button4\").value = randomNumber4;\n    }\n}\n\nfunction getButton(clicked_id){\n    if(clicked_id === \"button1\"){\n        button1 = parseInt(document.getElementById(clicked_id).value);\n        if(uitslag == null){\n            uitslag = button1;\n        }else{\n            uitslag = uitslag + button1;\n        }\n    }else if(clicked_id === \"button2\"){\n        button2 = parseInt(document.getElementById(clicked_id).value);\n        if(uitslag == null){\n            uitslag = button2;\n        }else{\n            uitslag = uitslag + button2;\n        }\n    }else if(clicked_id === \"button3\"){\n        button3 = parseInt(document.getElementById(clicked_id).value);\n        if(uitslag == null){\n            uitslag = button3;\n        }else{\n            uitslag = uitslag + button3;\n        }\n    }else if(clicked_id === \"button4\"){\n        button4 = parseInt(document.getElementById(clicked_id).value);\n        if(uitslag == null){\n            uitslag = button4;\n        }else{\n            uitslag = uitslag + button4;;\n        }\n    }\n    console.log(button1, button2, button3, button4);\n    console.log(uitslag);\n    if(uitslag === 10){\n        punten++;\n        uitslag = 0;\n        randomButtons();\n    }else if(uitslag > 10){\n        uitslag = 0;\n        randomButtons();\n    }\n}\n\nvar timeLeft = 30;\nvar elem = document.getElementById(\"timer\");\n\nvar interval = setInterval(function() {\n \n    var timer = document.getElementById(\"timer\");\n \n    if (Number(timeLeft) === 0) {\n        clearInterval(interval);\n        /*document.write(\"<form action='/insert.php' method='post'>\")\n        document.write(\"<h1>Jouw aantal punten was: <span id='points'>\" + punten + \"</span></h1>\");\n        document.write(\"<p>Druk op verzenden om in het scoreboard te komen!</p>\");\n        document.write(\"<input type='submit' id='btn'>\");\n        document.write(\"</form>\");*/\n        window.location.href = '../../end.html';\n        document.cookie = \"points=\" + punten;\n    }\n    else {\n        timer.innerHTML = 'Tijd: ' + timeLeft + \" \" + 'sec';\n        timeLeft--;\n    }\n}, 1000);","undoManager":{"mark":-1,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":77,"column":17},"end":{"row":77,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1508367726801}