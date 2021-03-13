module.exports = function toReadable (number) {
    var numStr = number.toString();
    var onesHundred = +(numStr.substr(1));
    var ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    var tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    var hundred = ' hundred';
    var str = '';    

    if (number == 0) {
        return 'zero';
    }

    if (number < 20) {
      return ones[number].trim(); 
    }

    if (numStr.length == 2) {
    str += tens[+(numStr[0])];
    str += ones[+(numStr[1])];
      return str.trim();
    }
    
    str =  ones[+(numStr[0])] + hundred;
    if (onesHundred<20){
      str += ones[onesHundred];
      return str.trim(); 
    } else {
      str += tens[+(numStr[1])];
      str += ones[+(numStr[2])];
      return str.trim();
    }

}   

