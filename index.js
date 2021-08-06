function mapToNegativize(sourceArray) {
    return sourceArray.map(e =>
        e*-1
    );
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(e =>
        e
    );
}

function mapToDouble(sourceArray) {
    return sourceArray.map(e =>
        e*2
    );
}

function mapToSquare(sourceArray) {
    return sourceArray.map(e =>
        e*e
    );
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((accum, current) =>{
        accum = accum + current;
        return accum
    }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((accum, current) =>{
        if(current && accum){
            accum = true
        }
        return !accum;
    }, true)
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((accum, current) =>{
        if(!!current){
            accum = true        
        }
    return accum}, false)
}