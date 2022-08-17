export function fieldSize(numberOfRows ,numberOfColumns ){
    let field=document.getElementById("field");
    let RowHeight=500/numberOfRows;
    field.style.height=`500px`;
    let fieldWidth=RowHeight*numberOfColumns;
    field.style.width=`${fieldWidth}px`;

}

export function createExels(numberOfRows ,numberOfColumns){
    let field=document.getElementById("field");
    let numberOfExels=numberOfRows*numberOfColumns;
    for(let i=0; i<numberOfExels; i++){
        let exel=document.createElement('div');
        field.appendChild(exel);
        exel.classList.add("exel");
        let exelSize=`${500/numberOfRows}px`;
        exel.style.height=exelSize();
    exel.style.width=exelSize();
    }

}
