let i = 0;
let arr = [];

function add_element() {
    arr[i] = document.getElementById("txValue").value;
    alert("Element: " + arr[i] + " Added at index " + i);
    i++;
    //Khu vực nhập giá trị sẽ được gán lại giá trị rỗng
    document.getElementById("txValue").value = "";
}

function display_array() {
    let e = "<hr>";
    for (i = 0; i < arr.length; i++) {
        e += "Element at index " + i + " = " + arr[i];
        e += "<br>";
    }
    document.getElementById("result").innerHTML = e;
}