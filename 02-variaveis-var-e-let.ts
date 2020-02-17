function showWithVar() {
    var text = 'Luiz carlos';

    if(true) {
        var text = 'texto';
    }
    console.log(text);
}

function showWithLet() {
    let text = 'Luiz carlos';

    if(true) {
        let text = 'texto';
    }
    console.log(text);
}

showWithLet();