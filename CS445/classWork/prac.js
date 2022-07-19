//enumeration
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 0] = "Brown";
    EyeColor[EyeColor["Black"] = 1] = "Black";
    EyeColor[EyeColor["Blue"] = 2] = "Blue";
})(EyeColor || (EyeColor = {}));
;
var myEyeColor = EyeColor.Black;
console.log(typeof myEyeColor);
console.log(EyeColor[2]);
var myTuples = ["hi", 10];
console.log(myTuples[0]);
console.log(myTuples[1]);
myTuples.push(2);
myTuples.push("3");
console.log(typeof myTuples);
