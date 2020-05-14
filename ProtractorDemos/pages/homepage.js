let homepage=function(){

   
    let firstnumber_input=element(by.model('first'));
    let secondnumber_input=element(by.model('second'));    
    let goButton=element(by.css('[ng-click="doAddition()"]'));
    let operator = element(by.css('select[ng-model="operator"]')).$('[value="SUBTRACTION"]');


    this.get = function (url) {
        browser.get(url);

    }

    this.enterFirstNumber = function (firstNo) {
        firstnumber_input.sendKeys(firstNo);

    }

    this.enterSecondNumber = function (secondNo) {
        secondnumber_input.sendKeys(secondNo);

    }

    this.clickGo = function () {
        goButton.click();

    }

    

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);

    }



    this.selectOperator = function () {
        operator.click();
    }
     
}

module.exports= new homepage();
