function view() {
    fetch('play.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            appendData(data);
        })
        .catch(function(err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        var mainContainer = document.getElementById("myData");
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = (i + 1) + '. ' + data[i].question + ' ' +
                "<br />" + data[i].answers.A +
                "<br />" + data[i].answers.B +
                "<br />" + data[i].answers.C +
                "<br />" + data[i].answers.D;
            mainContainer.appendChild(div);
        }
    }
}