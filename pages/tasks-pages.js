
class TasksPage{
    
    constructor(){
    this.EC =  protractor.ExpectedConditions;
    this.board = $('#task-board');   
    this.newTaskButton = element(by.css("#insert-button"));
    this.inputname = element(by.css("input[name=title]"));
    this.inputTags = element(by.css("div[class*=tagsinput] input"));
    this.addButton = element(by.css("button[id*=submit]"));
    this.alert = element(by.css(".alert-warn"));
    }

    addTask(task){
        this.inputname.clear();
        //this.newTaskButton.click();
        this.inputname.sendKeys(task.title);

        if (task.tags){
            this.addTags(task.tags);
        }
               
        this.addButton.click();
    }

    addTags(tags){
        tags.forEach( tag => {
            this.inputTags.sendKeys(tag);
            this.inputTags.sendKeys(protractor.Key.TAB);
        });
    }

    getItem(name){
        browser.wait(this.EC.presenceOf(this.board), TIMEOUT);
        return element(by.cssContainingText("tr",name));
    }
} 

module.exports = TasksPage;