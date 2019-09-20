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

$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#dest-input").val().trim();
    var firstTrain = $("#start-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

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
})



database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTrain = childSnapshot.val().first;
    var frequency = childSnapshot.val().often;

    var convertedTime = moment(firstTrain, "HH:mm").subtract(1, "year");
    var diffTime = moment().diff(moment(convertedTime), "minutes");
    var remainder = diffTime % frequency;
    var away = frequency - remainder;
    var next = moment().add(away, "minutes").format("HH:mm");

    console.log(convertedTime, diffTime, remainder, away, next)

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(next),
        $("<td>").text(away),
    )
    $("#train-table").append(newRow);





})