const customerData = {
    1920: {
        name: 'millo Lee',
        id: '1920',
        usages: {
            2016: {
                1: 50,
                2: 55,
                // 나머지 달(month)은 생략
            },
            2015: {
                1: 70,
                2: 63,
                // 나머지 달(month)은 생략
            },
        },
    },
    38673: {
        name: 'seungmin Lee',
        id: '38673',
        usages: {
            2016: {
                1: 50,
                2: 55,
                // 나머지 달(month)은 생략
            },
            2015: {
                1: 70,
                2: 63,
                // 나머지 달(month)은 생략
            },
        },
    },
    // 다른 고객 정보도 같은 형식으로 저장된다.
};

customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}
