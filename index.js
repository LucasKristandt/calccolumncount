var calcColumnCount = function(columnCount, targetCount, minColumns) {
    var lastColumns = columnCount % targetCount;
    var columnCount = targetCount;

    if (
        lastColumns &&
        lastColumns < minColumns &&
        targetCount > 0 &&
        targetCount > minColumns
    ) {
        columnCount = calcColumnCount(columnCount, targetCount - 1, minColumns);
    }

    return columnCount;
};

exports.calcColumnCount = calcColumnCount;

exports.calcColSize = function() {
    return gridBase / calcColumnCount(columnCount, targetCount, minColumns);
}