function userCard(number){
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number;

    const logging = {        
        date: new Date().toLocaleString(),
        regLog: function (t, c, tm) {
          this.historyLogs.push({
            operationType: t,
            credits: c,
            operationTime: tm
          });
        }
      };
    return {
         getCardOptions : function() {
            return {
              balance,
              transactionLimit,
              historyLogs,
              key              
            }
          },
          putCredits : function(amount){
              let operationType = 'Received amount of credits';
              balance += amount
              logging.regLog(operationType,amount, logging.date);
          },
          takeCredits : function(amount){
              if(amount<=transactionLimit && amount<=balance){
                  let operationType = 'Withdrawal of credits';
                  balance-=amount;
                  logging.regLog(operationType,amount, logging.date);
              } else {
                  console.error('Error! Make sure that your transaction limit and balance'+
                  'is greater than aomunt of credits you want to get');
              }
          },
          setTransactionLimit : function(currLimit){
              let operationType = 'Limit change';
              transactionLimit = currLimit;
              logging.regLog(operationType,currLimit, logging.date);
          },
          transferCredits : function(value,card){
              const tax = 0.005;
              const trans = value*tax+value;
              if (trans<=transactionLimit && trans<=balance){
                  card.takeCredits(trans);
                  card.putCredits(value);
              } else {
                console.error(
                  'Error! Make sure that your transaction limit and balance'
                  +' is greater than amount of credits you want to get'
                );
              }
          }

    }
}
class UserAccount{
    constructor(name){
        this.name = name;
        this.cards = [];
        this.cardsAmount = 3;
    }
    addCard(){
        if(this.cards.length<=this.cardsAmount){
            this.cards.push(userCard(this.cards.length+1))
        } else {
            console.error('Not allowed. Limit of your cards is bigger than 3!');
        }
    }
    getCardByKey(index){
        if(index<=this.cardsAmount){
            this.cards[index-1];
        } else{
            console.error('Invalid input');
        }
    } 
}