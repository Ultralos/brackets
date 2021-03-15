module.exports =  function check(str, bracketsConfig) {
    let catchError = 0;
    let emptyBox = [];

    let OpeningBrackets = bracketsConfig.map((each) => {
        return each.join("").substr(0, 1);
    });

    let ClosingBrackets = bracketsConfig.map((each) => {
        return each.join("").substr(1, 2);
    });

    let strSplited = str.split("");

    for (let i = 0; i < strSplited.length; i++) {
        let item = strSplited[i];
        let isOpening = OpeningBrackets.indexOf(item);

        if (isOpening !== -1) {
            if (
                ClosingBrackets.indexOf(item) === isOpening &&
                emptyBox[emptyBox.length - 1] === item
            ) {
                emptyBox.pop();
                continue;
            }
            emptyBox.push(item);
            continue;
        }

        let lastOpened = emptyBox[emptyBox.length - 1];
        if (
            OpeningBrackets.indexOf(lastOpened) ===
            ClosingBrackets.indexOf(item)
        ) {
            emptyBox.pop();
            continue;
        } else {
            catchError += 1;
            break;
        }
    }
    if(catchError === 0 && emptyBox.length === 0){
        return true
    }else{
        return false
    }
}

