function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const res = string.toUpperCase();
    console.log(res);
}

function logWhisper(string) {
    const res = string.toLowerCase();
    console.log(res);
}

function sayHiToGrandma(string) {
    let message;
    const Lower = string.toLowerCase();
    const Upper = string.toUpperCase();
    const Love = "I love you, Grandma.";

    if (`${string}` === Lower) {
        message = "I can't hear you!";
    } 
    else if (string === Upper) {
        message = "YES INDEED!";
    } 
    else if (string === Love) {
        message = "I love you, too.";
    }
   
    return message;
}