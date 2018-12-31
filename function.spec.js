describe('threeMinusTwo', function(){
   it('returns the difference of 3 - 2 ', function(){
      expect(threeMinusTwo()).to.equal(1);
      expect(typeof threeMinusTwo()).to.equal('number');
   })
});
describe('returnString', function(){
   it('returns a string', function(){
      expect(typeof returnString()).to.equal('string');
   })
});
describe('returnVar', function(){
   it('returns the variable named returnThisVar', function(){
      expect(returnVar()).to.equal('Var returned!');
   })
});
describe('addVars', function(){
   it('adds the values of valueOne and valueTwo', function(){
      expect(addVars()).to.equal(10);
   })
});
describe('addNums', function(){
   it('adds 34 and firstVal', function(){
      expect(addNums()).to.equal(44);
   })
});
describe('subtractNums', function(){
   it('subtracts firstVal from 34', function(){
      expect(subtractNums()).to.equal(24);
   })
});