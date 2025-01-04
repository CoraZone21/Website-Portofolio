function saklar(params) {
    console.log(params);

    let lampu1 = document.getElementById("lampu1");
    if(params == "on"){
        // nyala
        lampu1.src = "aset/images/on.gif"

    }
    if(params == "off"){
        lampu1.src = "aset/images/off.gif"
    }

    return lampu1;
}