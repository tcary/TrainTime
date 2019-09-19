var firebaseConfig = {
    apiKey: "AIzaSyAlAc7dLXuDEIuvYybFVjyUR6wBolM52eM",
    authDomain: "test-46443.firebaseapp.com",
    databaseURL: "https://test-46443.firebaseio.com",
    projectId: "test-46443",
    storageBucket: "",
    messagingSenderId: "229613726860",
    appId: "1:229613726860:web:dc1289a0a05bc4abf71fa9"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// $("#add-train").on("click", function (event) {
//     event.preventDefault();
var trainName = $("train-name-input").val().trim();
var destination = $("dest-input").val().trim();
var firstTrain = $("start-input").val().trim();
var frequency = $("frequency-input").val().trim();

var newTrain = {
    name: trainName,
    dest: destination,
    first: firstTrain,
    often: frequency,
}
database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.dest);
console.log(newTrain.first);
console.log(newTrain.often);

alert("Train successfully added");

$("#train-name-input").val("");
$("#dest-input").val("");
$("#start-input").val("");
$("#frequency-input").val("");



database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    //     var row = $("<tr>");
    //     var column1 = $("<td>").text(childSnapshot.val().name)
    //     var column2 = $("<td>").text(childSnapshot.val().role)
    //     var column3 = $("<td>").text(childSnapshot.val().startDate)
    //     var column4 = $("<td>").text(childSnapshot.val().endDate)
    //     var column5 = $("<td>").text(childSnapshot.val().monthlyRate)
    //     var column6 = $("<td>").text(childSnapshot.val().totalBilled)
    // }), function (errorObj) {
    //     consol.log("Something went wrong....error code: " + errorObj.code);
})