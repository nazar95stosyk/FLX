function isBigger(FirstStatement,SecondStatement){
    return FirstStatement>SecondStatement;
}
function isSmaller(FirstStatement,SecondStatement){
    return isBigger(SecondStatement,FirstStatement);
}
isSmaller(5,-1);