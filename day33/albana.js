function validation() {
    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-Za-z]+$/;


    var name = document.getElementById("city").value;
    var valid_city_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

    if (!name.match(valid_name_regex)) {
        document.getElementById("name-error").style.visibility = "visible";
        document.getElementById("name").style.color = "red";
    } else {
        document.getElementById("name-error").style.visibility = "hidden";
        document.getElementById("name").style.color = "black";
    }

     if (!age.match(valid_age_regex)) {
        document.getElementById("age-error").style.visibility = "visible";
        document.getElementById("age").style.color = "red";
    } else {
        document.getElementById("age-error").style.visibility = "hidden";
        document.getElementById("age").style.color = "black";
    }

    if (city === "") {
        document.getElementById("city-error").style.visibility = "visible";
        document.getElementById("city").style.color = "red";
    } else {
        document.getElementById("city-error").style.visibility = "hidden";
        document.getElementById("city").style.color = "black";
    }
}