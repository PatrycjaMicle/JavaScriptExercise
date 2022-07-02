//Frage 1.
function answer1(operator) {
    let msg;
    switch (operator) {
        case'an1':
            msg = "Die Antwort ist leider falsch!";
            break;
        case 'an2':
            msg = "Die Antwort ist richtig!";
            break;
        case 'an3':
            msg = "Die Antwort ist leider falsch!";
            break;

    }
    document.getElementById("result1").innerHTML = '<div class="message">' + msg + "</div>";
}


//Frage 2.
function submit() {
    let msg2;
    let input = document.querySelector('input:checked');

    if (input !== null) {
        input = input.value;
        if (input === "xenon") {
            msg2 = "Die Antwort ist richtig!";
        } else {
            msg2 = "Die Antwort ist leider falsch!";
        }
    } else {
        msg2 = "Bitte waehlen Sie eine Antwort aus!"
    }

    document.getElementById('result2').innerHTML = '<div class="message">' + msg2 + "</div>";

}


//Frage 3.
function berechnen() {
    let msg3;
    let teiler1 = [];
    let teiler2 = [];
    let zahl1 = zahl('zahl1');
    let zahl2 = zahl('zahl2');
    let gt = [];
    let ggt;

    teiler1 = find_durch(zahl1);
    teiler2 = find_durch(zahl2);

    gt = gemeinsameTeiler(teiler1, teiler2);

    ggt = groessteGemeinsameTeiler(gt);

    msg3 = `Der groesste gemeinsame Teiler von ${zahl1} und ${zahl2} ist ${ggt}.`;
    document.getElementById('result3').innerHTML = '<div class="message">' + msg3 + "</div>";
}

function zahl(id) {
    let zahl;
    zahl = document.getElementById(id).value;
    return zahl;
}

function find_durch(zahl) {
    let teiler = [];
    for (let i = 1; i <= zahl; i++) {
        if (zahl % i === 0) {
            teiler.push(i);
        }
    }
    return teiler;
}

function gemeinsameTeiler(teiler1, teiler2) {
    let result = [];
    for (let i = 0; i < teiler1.length; i++) {
        for (let j = 0; j < teiler2.length; j++) {
            if (teiler1[i] === teiler2[j]) {
                result[i] = teiler1[i];
            }
        }
    }
    return result;
}

function groessteGemeinsameTeiler(gt) {
    let max = 0;
    let i;
    for (i = 0; i < gt.length; i++) {
        if (max <= gt[i]) {
            max = gt[i];
        }
    }
    return max;
}


// Frage 4.
function dezimzahl() {
    let elementenAnzahl = 8;
    let elementBinar = '';
    let binarzahl = [];
    for (let i = 0; i < elementenAnzahl; i++) {
        let element = document.getElementById('stelle' + i); // stelle0,stelle1,stelle2...
        elementBinar = element.checked;

        if (elementBinar === true) {
            elementBinar = 1;
        } else {
            elementBinar = 0;
        }
        binarzahl[i] = elementBinar
    }

    // Umwandlung in Dezimzahl = 10101= (1*(2^5))+(0*(2^4))+(1*(2^3))...

    let dezimzahl = 0;

    for (let i = 0; i < binarzahl.length; i++) {
        dezimzahl += binarzahl[i] * Math.pow(2, binarzahl.length - i - 1);
    }

    binarzahl = binarzahl.join('');

    let msg4 = `Binärzahl: ${binarzahl}`;
    document.getElementById('result4').innerHTML = '<div class="message">' + msg4 + "</div>";

    let msg5 = `Dezimzahl: ${dezimzahl}`;
    document.getElementById('result5').innerHTML = '<div class="message">' + msg5 + "</div>";
}


//Message background
function changeBackground() {

    const messages = document.getElementsByClassName("message");

    for (let i = 0; i < messages.length; i++) {
        let element = messages[i];

        let style = element.style;
        style.backgroundColor = "bisque";
        style.marginLeft = "300px";
        style.marginRight = "300px";
        style.marginTop = "15px";
        style.padding = "15px";
    }
}

let buttons = document.getElementsByClassName("but");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeBackground);
}



