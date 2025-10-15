


export const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};


export const shuffleArrayNull = (array: any[]) => {
    const newArray = [...array];
    const partRandomIndex = Math.floor(Math.random() * newArray.length)
    for ( let i = newArray.length ; i >= 0; i--){
        console.log("index lista: "+i+" indexRandom: "+partRandomIndex)
        if ( i == partRandomIndex){
            newArray[i] = null ;
        }
    }
    return newArray;
};