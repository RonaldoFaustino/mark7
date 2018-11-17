
// ^ => começa com
// * => Contein
// $ => termina

const LoginPage = require('../pages/login-pages');

describe('dado que acessei a página login',function() {

    const login_page = new LoginPage();
    
    beforeEach(function(){
        browser.get(login_page.path);
    });
        

    it('quando a senha é inválida', function(){
        //element(by.id('login_email')).sendKeys('teste@teste.com.br'); 
        //element(by.id('login_password')).sendKeys('teste1');
        //element(by.css('input[name=password]')).sendKeys('123456');
        //element(by.css('button[id*=btnLogin]')).click();
        
         //var alert = element(by.css('.alert-login'));
         //expect(alert.getText()).toEqual('Senha inválida.');
        //login_page.email.sendKeys('teste@teste.com.br.br');
        //login_page.password.sendKeys('123455');
        //login_page.submit.click();

        login_page.with('teste@teste.com.br.br', '123455')
        
        expect(login_page.alert.getText()).toEqual('Usuário não cadastrado.');
        browser.sleep(1000)
    });

    it('quando usuário não está cadastrado', function(){
        login_page.with('teste@teste.com.br.br', '123456')
        expect(login_page.alert.getText()).toEqual('Usuário não cadastrado.');

    });

    it('quando o email é incorreto', function(){
        login_page.with('teste@teste.', 'teste')
        expect(login_page.alert.getText()).toEqual('Email incorreto ou ausente.');
            
    });

    it('quando o email é branco', function(){
        login_page.with('', 'teste1')
        expect(login_page.alert.getText()).toEqual('Email incorreto ou ausente.');
            
    });

    it('quando a senha é branco', function(){
        login_page.with('teste@teste.com.br', '')
        expect(login_page.alert.getText()).toEqual('Senha ausente.');
    });

    it('quando a senha é muito curta', function(){
        login_page.with('teste@teste.com.br', '1234')
        expect(login_page.alert.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
           
    });

});

