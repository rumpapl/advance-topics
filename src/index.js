const chatServices = require("./services/chat");

chatServices.joinChat("Alice");
chatServices.sendMessage("hello, guys.");
chatServices.leaveChat("Alice");
