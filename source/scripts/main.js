document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    
    form.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;
        const bmi = (weight / (height * height)).toFixed(2);
        const value = document.querySelector(".value");
        let description = "";

        value.classList.add("attention");

        document.querySelector(".infos").classList.remove("hidden");

        if (bmi < 18.5) {
            description = "Cuidado! Você está abaixo do peso!";
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove("attention");
            value.classList.add("normal");
        } else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        } else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        } else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        } else {
            description = "Cuidado! Você está com obesidade mórbida!";
        }

        value.textContent = bmi.replace(".", ",");

        document.querySelector(".description").textContent = description;
    });

    $("#weight").mask("000.00")
    $("#height").mask("0.00")
});