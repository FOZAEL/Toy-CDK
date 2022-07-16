
const myform = document.getElementById('myform');
const url = "http://farga-backe-1rhzktsxby0uf-1417729581.us-east-1.elb.amazonaws.com:5000/hello/"


myform.addEventListener('submit', (e) => {
    e.preventDefault();
    url2 =url+myform.elements["input2"].value
    fetch(url2, {
        method: 'GET',
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        document.getElementById("APImassage").innerHTML = json.massage;
    })
});
