const CustomError = require("../extensions/custom-error");

module.exports = function repeater() {
  let substring = '';

  if(!(opt.addition === undefined)){
    substring += opt.addition;



    for(let i=0; i<opt.additionRepeatTimes-1; i++){
      if(opt.additionSeparator === undefined){
        opt.additionSeparator = '|';
      }



      substring = substring + opt.additionSeparator + opt.addition;
    }
  }


  let resultstring = '' + string;



  if(opt.separator === undefined){
    opt.separator = '+';
  }

  for(let i=0; i<opt.repeatTimes-1; i++){
    resultstring = resultstring + substring + opt.separator + string;
  }

  return resultstring + substring;
};
