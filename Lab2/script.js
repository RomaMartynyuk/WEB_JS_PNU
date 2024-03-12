let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

console.log("Якщо ім'я починається з літери J, то виводиться Good Bye [SomeName], в іншому випадку Hello [SomeName]");

for (let name of names) {
    if(name.charAt(0).toLowerCase() === 'j') {
        speakGoodBye.speak(name);
    } else {
        speakHello.speak(name);
    }
}

console.log("Якщо в імені більше 5 літер, то виводиться Good Bye [SomeName], в іншому випадку виводиться Hello [SomeName]");

for(let name of names) {
    if(name.length > 5) {
        speakGoodBye.speak(name);
    } else {
        speakHello.speak(name);
    }
}