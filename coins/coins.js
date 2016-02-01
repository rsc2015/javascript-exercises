/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

function coinCounter (money) {
    var i, num,
        coinPurse = [],
        coins  = [
            [25,  "quarter", "quarters"],
            [10,  "dime",    "dimes"   ],
            [5,   "nickel",  "nickels" ],
            [1,   "penny",   "pennies" ]
        ];
        console.log("coins",coins);

    money = Math.round(money * 100);
    console.log("money", money);
    for (i = 0; i < coins.length; i++) {
        num = Math.floor(money / coins[i][0]);
        console.log("num", num);
        money -= num * coins[i][0];
        console.log("money inside loop", money);
        
        if (num) {
        	if (num < 2) {
        		coinPurse.push(num + " " + coins[i][1]);
        	} else {
            	coinPurse.push(num + " " + coins[i][2]);	
        	}
            console.log("coinPurse", num);
        }
    }
    return coinPurse.join(", ");
}

console.log("coinCounter", coinCounter(1.13));
