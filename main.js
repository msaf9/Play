function view() {
    fetch("play.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let q in data.questions) {
                document.querySelector("#test").innerHTML = data.questions[q].question + "\n"
            }
        })
}