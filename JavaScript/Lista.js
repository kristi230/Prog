function lista(aGecik) {
    var toReturn = '';
    for (i = 0; i < aGecik.length; i++){
        toReturn = toReturn + (i + 1) + '. ' + aGecik[i] + '\n';
    }
    return toReturn;
}