// @flow

// TODO: remove unneccessary comments from code
import * as Math from 'mathjs'

export default class CalculatorService{

  static eval(input: string): string {
    let ans;
    try {
      if(input===null || input==='')
        throw null; // throws exception if input is bad
      ans = Math.eval(input); // else evaluate
    }
    catch(err) {
      console.error(err);
      return "Invalid Input";
    }
    console.log(`answer ${ans}`);
    return String(ans);
  }
}
