keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });
const data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
function FindTypes() {
    let t = [];
    for (let i = 0; i < arguments.length; i++) {
        t.push(typeof arguments[i]);
    }
    return t;
}
function ExecuteforEach(array1, function1) {
    for (let i = 0; i < array1.length; i++) {
        function1(array1[i]);
    }
}
function MapArray(array1, function1) {
    const newArray = [];
    ExecuteforEach(array1, function (el) {
        newArray.push(function1(el));
    });
    return newArray;
}
function filterArray(a, func) {
    const ab = [];
    ExecuteforEach(a, (item) => {
        if (func(item)) {
            ab.push(item);
        }
    });
    return ab;
}


function getAmountOfAdultPeople(dataInput) {
    const arr = filterArray(dataInput, x => x.age > 18);
    return arr.length;
}
function keys(x) {
    const arrayOfKeys = [];
    for (let key in x) {
        if (x.hasOwnProperty(key)) {
            arrayOfKeys.push(key);
        }
    }
    return arrayOfKeys;
}

function values(object) {
    const arrayOfValues = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            arrayOfValues.push(object[key]);
        }
    }
    return arrayOfValues;
}


function showFormattedDate(date) {
    const dayOfTheMonth = date.getDate();
    const month = date.toString().substr(4, 3);
    const year = date.getFullYear();
    return `Date: ${dayOfTheMonth} of ${month}, ${year}`;
}


function isEvenYear(x) {
    return !(x.getFullYear() % 2);
}


function isEvenMonth(x) {
    return Boolean(x.getMonth() % 2);
}

alert(FindTypes(null, 5, "hello", undefined));
showFormattedDate(new Date('2019-01-27T01:10:00'));

ExecuteforEach([1, 2, 3], function (el) {
    console.log(el);
});

MapArray([2, 5, 8], function (el) {
    return (el + 3);
});

alert(getAmountOfAdultPeople(data));
alert(isEvenYear(new Date('2019-01-27T01:10:00')));
alert(isEvenMonth(new Date('2019-02-27T01:10:00')));

alert(filterArray([2, 5, 8], (el) => el > 3));

