function main() {
    fetch("play.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}