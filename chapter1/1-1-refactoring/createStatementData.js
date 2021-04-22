'use strict';
function createStatementData(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    // 공연에 해당하는 연극 반환
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    // 연극 종류(type)에 따른 비용
    function amountFor(aPerformance) {
        // 값이 바뀌지 않는 변수는 매개변수로 전달 (perf, play)
        let result = 0; // 변수를 초기화하는 코드

        switch (aPerformance.play.type) {
            case 'tragedy': // 비극
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case 'comedy': // 희극
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
        }
        return result; // 함수 안에서 값이 바뀌는 변수 반환
    }

    // 포인트 적립
    function volumeCreditsFor(aPerformance) {
        let result = 0;

        // 포인트를 적립한다.
        result += Math.max(aPerformance.audience - 30, 0);

        // 희극 관객 5명마다 추가 포인트를 제공한다.
        if ('comedy' === aPerformance.play.type) {
            result += Math.floor(aPerformance.audience / 5);
        }
        return result;
    }

    // 전체 포인트 적립
    function totalVolumeCredits(data) {
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
    }

    // 전체 가격
    function totalAmount(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }
}

module.exports = createStatementData;
