var calcColumnCount = function(anzColumns, targetCount, minColumns) {
    var lastColumns = anzColumns % targetCount;
    var columnCount = targetCount;

    if (
        lastColumns &&
        lastColumns < minColumns &&
        targetCount > 0 &&
        targetCount > minColumns
    ) {
        columnCount = calcColumnCount(anzColumns, targetCount - 1, minColumns);
    }

    return columnCount;
};

exports.calcColumnCount = calcColumnCount;

exports.calcColSize = function() {
    return gridBase / calcColumnCount(anzColumns, targetCount, minColumns);
}