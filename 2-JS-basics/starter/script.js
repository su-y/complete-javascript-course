let markTip = {
    fullName: `John Smith`,
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calc: function () {
        for (i = 0; i < this.bills.length; i++) {
            switch (true) {
                case this.bills[i] <= 0:
                    console.log(`${this.bills[i]} is not a valid bill `);
                    continue;

                case this.bills[i] < 50:
                    this.tips.push(this.bills[i] * .2);
                    break;

                case this.bills[i] < 200:
                    this.tips.push(this.bills[i] * .15);
                    break;

                default:
                    // >200
                    this.tips.push(this.bills[i] * 0.1);
                    break;
            }
            this.totals.push(this.tips[i] + this.bills[i]);
        }
    }
};

let avrg = function (tips) {
    let sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;

}

console.log(markTip);

markTip.calc();

console.log(markTip);

console.log(avrg(markTip.tips));