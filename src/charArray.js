let input = "Hacker"

function processData(input) {
    //Enter your code here
    let str = input.toString();
    let charArray = str.split("");
    
    let printString = "";
    
    for (let i = 0; i < charArray.length; i++) {
        if (i % 2 == 0) {
            printString += charArray[i];
        }
    }
    
    printString += " ";
    
    for (let j = 0; j < charArray.length; j++) {
        if (j % 2 != 0) {
            printString += charArray[j];
        }
    }
    
    console.log(printString);
    return printString;
}

processData(input);