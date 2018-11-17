
class LoginPage {
   
    //Page Factory
    constructor(){
       this.EC =  protractor.ExpectedConditions; 
       this.path = '/login';
       this.form = $('#login_form');
       this.input_email = element(by.id('login_email')); 
       //this.password = element(by.id('login_password'));       
       this.input_password = element(by.css('input[name=password]'));
       this.submit = element(by.css('button[id*=btnLogin]'));
       this.alert =  element(by.css('.alert-login'));
              
         //expect(alert.getText()).toEqual('Senha inválida.');
    }

    go(){
        browser.get(this.path);
    }
    //Metodo login
    with(email, pass){
        this.input_email.sendKeys(email);
        this.input_password.sendKeys(pass);
        this.submit.click();
    }

    logout() {
        browser.get('/logout');
        browser.wait(this.EC.presenceOf(this.form), TIMEOUT);
    }
}

module.exports = LoginPage;