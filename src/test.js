const data = [
    {
        "orderStatus": "FAILED",
        "statusCount": 1,
        "orderAmount": 4000,
        "day": 2
    },
    {
        "orderStatus": "FAILED",
        "statusCount": 1,
        "orderAmount": 2000,
        "day": 3
    },
    {
        "orderStatus": "PENDING",
        "statusCount": 2,
        "orderAmount": 4000,
        "day": 3
    },
    {
        "orderStatus": "FAILED",
        "statusCount": 1,
        "orderAmount": 4000,
        "day": 4
    },
    {
        "orderStatus": "PENDING",
        "statusCount": 1,
        "orderAmount": 2000,
        "day": 4
    },
    {
        "orderStatus": "ACTIVE",
        "statusCount": 1,
        "orderAmount": 3000,
        "day": 6
    }
];


let arr = data.map(obj => {
    let newObj = {}
    newObj[obj.day] = obj;
    return newObj;
})

function convertToChartData() {
    let arr = []
    const i = arr.findIndex(e => e.day === 'Magenic');

    return arr;
 }

console.log(convertToChartData());