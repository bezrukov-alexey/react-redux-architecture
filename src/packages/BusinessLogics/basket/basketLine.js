
export function ValidateLine(line, quanity) {

    if (isNaN(quanity)) return false;
    if (isNaN(line.quanity)) return false;

    //Какая-то другая логика, необходимая для валидации.

    return true;
}

export function ChangeQuanity(line, quanity){
    debugger
    if (ValidateLine(line, quanity))
        return { Success: true, Value: {...line, quanity} };
    else 
        return { Success: false, Value: {}, Errors: "Кол-во товара может быть только числом" };
}