const inputElements = document.querySelectorAll(".form-class[name]");
const dateBlock = document.getElementById("dateBlock");
const salaryBlock = document.getElementById("salaryBlock");


function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee);
}
function onChange(event) {
    const { value, name } = event.target;

    if (name == "Salary") {
        if (+value < 1000 || +value > 40000) {
            if (!document.getElementById("salaryError")) {
                salaryBlock.innerHTML += errorMessage("salaryError");
                setTimeout(() => {
                    document.getElementById("salaryError").remove();
                }, 5000)
            }
            event.target.value = ''
        }
    }

    if (name == "birth_date") {
        const selectedYear = new Date(value).getFullYear();
        if (selectedYear < 1950 || selectedYear > new Date().getFullYear()) {
            if (!document.getElementById("dateError")) {
                dateBlock.innerHTML += errorMessage("dateError");
                setTimeout(() => {
                    document.getElementById("dateError").remove();
                }, 5000)
            }
            event.target.value = ''
        }
    }
}

function errorMessage(idError) {
    return `<label id=${idError} style = 'color:red; display: block'> Please enter a valid number </label>`
}