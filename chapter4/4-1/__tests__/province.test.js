const assert = require('assert');
const { Province, sampleProvinceData } = require('../province');

describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData());
    });

    it('shortfall', function () {
        assert.strictEqual(asia.shortfall, 5);
    });

    it('profit', function () {
        assert.strictEqual(asia.profit, 230);
    });

    it('change production', function () {
        asia.producers[0].production = 20;
        assert.strictEqual(asia.shortfall, -6);
        assert.strictEqual(asia.profit, 292);
    });

    it('zero demand', function () {
        asia.demand = 0;
        assert.strictEqual(asia.shortfall, -25);
        assert.strictEqual(asia.profit, 0);
    });

    it('negative demand', function () {
        asia.demand = -1;
        assert.strictEqual(asia.shortfall, -26);
        assert.strictEqual(asia.profit, -10);
    });

    it('empty string demand', function () {
        asia.demand = '';
        assert.strictEqual(asia.shortfall, NaN);
        assert.strictEqual(asia.profit, NaN);
    });
});

describe('no producers', function () {
    let noProducers;
    beforeEach(function () {
        const data = {
            name: 'No producers',
            producers: [],
            demand: 30,
            price: 20,
        };
        noProducers = new Province(data);
    });

    it('shortfall', function () {
        assert.strictEqual(noProducers.shortfall, 30);
    });

    it('profit', function () {
        assert.strictEqual(noProducers.profit, 0);
    });
});

describe('string for producers', function () {
    it('', function () {
        const data = {
            name: 'String producers',
            producers: '',
            demand: 30,
            price: 20,
        };
        const prov = new Province(data);
        assert.strictEqual(prov.shortfall, 0);
    });
});
