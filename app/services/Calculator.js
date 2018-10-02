// @flow

// TODO: remove unneccessary comments from code
import * as Math from 'mathjs'

export default class Calculator{

  static eval(input: string): string {
    let ans;
    try {
      if(input===null || input==='')
        throw null;
      ans = Math.eval(input);
    }
    catch(err) {
      console.error(err);
      return "Invalid Input";
    }
    console.log(`answer ${ans}`);
    return String(ans);
  }


}
