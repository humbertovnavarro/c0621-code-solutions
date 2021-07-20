/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.getAccount = function(number) {
  var match = null;
  for(var i = 0; i < this.accounts.length; i++) {
    if(this.accounts[i].number === number) {
      match = this.accounts[i];
      break;
    }
  }
  return match;
}

Bank.prototype.openAccount = function(holder, balance){
  if(typeof balance != "number" || balance <= 0 || isNaN(balance) || !Number.isInteger(balance)){
    return null;
  }

  var account = new Account(this.nextAccountNumber, holder);
  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;
  return account.number;
}

Bank.prototype.getTotalAssets = function(){
  var total = 0;
  if(this.accounts.length <= 0 ) {
    return 0;
  }
  for(var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
}
