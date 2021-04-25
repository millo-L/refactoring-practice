let defaultOwnerData = {
    firstName: 'millo',
    lastName: 'Lee',
};

function defaultOwner() {
    return Object.assign({}, defaultOwnerData);
}

function setDefaultOwner(arg) {
    defaultOwnerData = arg;
}

module.exports = {
    defaultOwner,
    setDefaultOwner,
};
