let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {
   it('addition test', function () {
      //browser.get('https://juliemr.github.io/protractor-demo/');
      homepage.get('https://juliemr.github.io/protractor-demo/');

      //element(by.model('first')).sendKeys('2');
      homepage.enterFirstNumber('4');


      //element(by.model('second')).sendKeys('3');
      homepage.enterSecondNumber('6');

      //element(by.css('[ng-click="doAddition()"]')).click();   

      homepage.clickGo();

      homepage.verifyResult('10');


      //let result=element(by.cssContainingText('.ng-binding','5'));
      //expect(result.getText()).toEqual('5');
      browser.sleep(3000);
   }    

  

    )

    //test screen shot on failure (wrong expected result)

    it('addition failure test', function(){
      //browser.get('https://juliemr.github.io/protractor-demo/');
      homepage.get('https://juliemr.github.io/protractor-demo/');
  
      //element(by.model('first')).sendKeys('2');
      homepage.enterFirstNumber('3');
  
  
      //element(by.model('second')).sendKeys('3');
      homepage.enterSecondNumber('2');
  
      //element(by.css('[ng-click="doAddition()"]')).click();   
  
      homepage.clickGo();  
      
      homepage.verifyResult('7');
    
      //let result=element(by.cssContainingText('.ng-binding','5'));
      //expect(result.getText()).toEqual('5');
      //browser.sleep(1000);
     }    
  
    
  
      )

      it('subtraction test', function(){
         //browser.get('https://juliemr.github.io/protractor-demo/');
         homepage.get('https://juliemr.github.io/protractor-demo/');
     
         //element(by.model('first')).sendKeys('2');
         homepage.enterFirstNumber('5');

         //var select = element(by.css('select[ng-model="operator"]'));
         //select.$('[value="SUBTRACTION"]').click();  
         
         homepage.selectOperator();
     
         //element(by.model('second')).sendKeys('3');
         homepage.enterSecondNumber('3');
     
         //element(by.css('[ng-click="doAddition()"]')).click();   
     
         homepage.clickGo();
     
         homepage.verifyResult('2');
       
         //let result=element(by.cssContainingText('.ng-binding','5'));
         //expect(result.getText()).toEqual('5');
         browser.sleep(3000);
        }    
     
       
     
         )




 });