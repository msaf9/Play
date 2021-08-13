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
            var a = document.createElement("a");
            var div2 = document.createElement("div");
            div.innerHTML = (i + 1) + '. ' + data[i].question;
            a.innerHTML = data[i].answers.A +
                "<br />" + data[i].answers.B +
                "<br />" + data[i].answers.C +
                "<br />" + data[i].answers.D;
            div2.innerHTML = "<br />"
            mainContainer.appendChild(div);
            mainContainer.appendChild(a);
            mainContainer.appendChild(div2);
            data[i].answers.A.property = "https:www.google.com/";
            if (data[i].answers.A == "A") {
                console.log("True");
            } else {
                console.log("False");
            }
            a.href = "https://www.google.co.in/search?q=" + data[i].answers.A + "&sxsrf=ALeKk0356vxXG3byHp7cygLJA4qXFFcKvw%3A1628871066674&source=hp&ei=mpkWYdX0JfqX4-EP1bSdgAI&iflsig=AINFCbYAAAAAYRanqs1tRxyOjm-7Uz97-rlY7k1ZSmlE&oq=new+delhi&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMgUIABCABDIOCC4QgAQQsQMQxwEQrwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIOCC4QgAQQsQMQxwEQrwEyCwgAEIAEELEDEIMBMgsILhCABBDHARCvATIICAAQgAQQsQMyCAgAEIAEELEDOgQIIxAnOgUIABCRAjoICAAQsQMQgwE6CAguELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoECC4QJzoKCAAQsQMQgwEQQzoQCC4QsQMQgwEQxwEQ0QMQQzoECAAQQzoECC4QQzoHCC4QsQMQQzoQCC4QgAQQhwIQxwEQrwEQFDoKCC4QsQMQQxCTAjoTCC4QgAQQhwIQsQMQxwEQrwEQFDoQCC4QgAQQhwIQsQMQFBCTAlCnDVjPGmCRHmgAcAB4AIABpAGIAbEJkgEDMC45mAEAoAEB&sclient=gws-wiz&ved=0ahUKEwjVqb7Ksa7yAhX6yzgGHVVaByAQ4dUDCAc&uact=5";

        }
    }
}

function myFunction(event) {
    var a = event.target;
    console.log(a);
}