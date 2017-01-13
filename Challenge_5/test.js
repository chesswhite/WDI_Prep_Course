function calculate_area(l, w, renren) {
    return l * w * renren;
}

var length = 2;
var width = 3;
var height = 4;

var area = calculate_area(length, width, height);

var length2 = 55;
var width2 = 4;
var height2 = 53;

var area2 = calculate_area(length2, width2, height2);

console.log(area);
console.log(area2);