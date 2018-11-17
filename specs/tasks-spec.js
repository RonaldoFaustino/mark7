const LoginPage = require('../pages/login-pages');
const TasksPage = require('../pages/tasks-pages');

const login_page = new LoginPage();
const tasks_page = new TasksPage();
const tasksDb = require('../lib/tasks-db');
const userDb = require('../lib/users-db');

describe('quando eu cadastro uma tarefa', () => {

    var newTask = { title: "sobre NodeJs",tags: ['node','js','v8'] };

    beforeAll(() => {
        tasksDb.deleteByName(newTask.title).then(res => console.log(res));

        login_page.go();
        login_page.with("teste@teste.com.br", "123456")
        tasks_page.newTaskButton.click();

        tasks_page.addTask(newTask);
    });


    it('então vejo esta tarefa com status em andamento', () => {
        expect(tasks_page.getItem(newTask.title).getText()).toContain("Em andamento");
    });

    afterAll(() =>{
        login_page.logout();
    })

    // it('quando cadastro uma tarefa @smoke', () => {
    //     //task.name = "sobre NodeJs";
    //     tasks_page.addTask(newTask);
    //     //var list = element(by.css("table tbody"));
    //     //expect(list.getText()).toContain("Em andamento");
    //     //var item = element.all(by.css("table tbody tr"));
    //     //expect(item[0].getText()).toContain("Em andamento");
    //     //browser.sleep(5000);                
    //     expect(tasks_page.getItem(newTask.name).getText()).toContain("Em andamento");
    // });
});

describe('quando tento cadastrar uma tarefa', () => {

    beforeAll(() => {

        login_page.go();
        login_page.with("teste@teste.com.br", "123456")
        tasks_page.newTaskButton.click();
    });


    it('com nome muito curto', () => {
        tasks_page.addTask({ title: "Estudar" });
        //var task = {name:"estudar"}
        //task.name = "Estudar";
        //tasks_page.addTask(task);
        //tasks_page.addTask({ name: "Estudar" });
        expect(tasks_page.alert.getText()).toEqual("10 caracteres é o mínimo permitido.");
    });

    it('com nome em branco', () => {
        tasks_page.addTask({ title: ""});
        //tasks_page.addTask({ name: "Estudar" });
        //var task = {name:"estudar"}
        //task.name = "Estudar";
        //tasks_page.addTask(task);
        //tasks_page.addTask({ name: "Estudar" });
        expect(tasks_page.alert.getText()).toEqual("Nome é obrigatório.");
    });

    afterAll(() =>{
        login_page.logout();
    })
})

describe('quando eu apago uma tarefa @temp', () => {
    var newTask = { title: "Tarefa para ser removidas", tags: ['apagar', 'temp']}

    beforeAll(async() => {
        await tasksDb.deleteByName(newTask.title).then(res => console.log(res));
        
        await userDb.getByEmail("tasks@teste.com.br").then((user) => {
            newTask.createdBy = user._Id;
        });

        await tasksDb.addTask(newTask);
        login_page.go();
        login_page.with("tasks@teste.com.br", "123456")
        
    });

    it('então está tarefa não deve ser exibida na lista', () => {
        tasks_page.getItem(newTask.title);
        //Exemplo com Jquery
        //$('tr:contains("removida")').find('#delete-button').click
        //Desafio Implementar a remoção com sucesso e verificar se a taks foi removidaS
    });
});
// describe('quando cadastro uma tarefa e não informo o nome', () => {

//     beforeAll(() => {

//         login_page.go();
//         login_page.with("teste@teste.com.br", "123456")
//         tasks_page.newTaskButton.click();

//     });

// })


// describe('dado que estou logado', () => {

//     var newTask = { name: "sobre NodeJs" };

//     beforeAll(() => {
//         const serviceDB = require('../lib/tasks-db')
//         serviceDB.deleteByName(newTask.name).then(res => console.log(res));

//         login_page.go();
//         login_page.with("teste@teste.com.br", "123456")
//         tasks_page.newTaskButton.click();
//     });

//     it('quando o nome é muito curto', () => {
//         //var task = {name:"estudar"}
//         //task.name = "Estudar";
//         //tasks_page.addTask(task);
//         tasks_page.addTask({ name: "Estudar" });
//         expect(tasks_page.alert.getText()).toEqual("10 caracteres é o mínimo permitido.");
//     });

//     it('quando não informo o nome', () => {
//         //var task = {name:""}
//         //task.name= "";
//         tasks_page.addTask({ name: "" });
//         expect(tasks_page.alert.getText()).toEqual("Nome é obrigatório.");
//     });



// });


//Modo de declarar uma função
//var imprime_nome =  function(nome){
    //console.log(nome)
//}

//var imprime_nome = (nome) =>{
   //console.log(nome)
//}

//imprime_nome("Ronaldo")