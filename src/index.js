module.exports = function toReadable (number) {
    var numStr = number.toString();
    var onesHundred = parseInt(numStr.substr(1));
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
    str += tens[parseInt(numStr.charAt(0))];
    str += ones[parseInt(numStr.charAt(1))];
      return str.trim();
    }
    
    str =  ones[parseInt(numStr.charAt(0))] + hundred;
    if (onesHundred<20){
      str += ones[onesHundred];
      return str.trim(); 
    } else {
      str += tens[parseInt(numStr.charAt(1))];
      str += ones[parseInt(numStr.charAt(2))];
      return str.trim();
    }

}   

