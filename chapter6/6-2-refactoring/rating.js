'use strict';

function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    lines.push(['name', aCustomer.name]);
    lines.push(['location', aCustomer.location]);
    return lines;
}
