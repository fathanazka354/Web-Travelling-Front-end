function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!, is anything we can help?";
    } else if (input == "I want to ask, what benefits can be provided?") {
        return "The benefits we provide include 1. money can be returned within 24 hours after the transaction 2. Our website provides various kinds of information about travel"
    } else {
        return "Try asking something else!";
    }
}