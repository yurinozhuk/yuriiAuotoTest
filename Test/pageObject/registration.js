const Page = require('./page');

class RegistrationPage extends Page{

    get inputUsername () { return $('input[name="f1"]') }

    fillingRegistationForm(){
        this.inputUsername.setValue('YuriiTest');
        $('input[name="f2_1"]').setValue('38_GtfEC5Bt6tAa');
        $('input[name="f2_2"]').setValue('38_GtfEC5Bt6tAa');
        $('input[name="f4"]').setValue('yuriisdb1@gmail.com');
    }
open (){
    super.open('https://vashmagazin.ua/user/?mode=reg')
}
close(){
    super.close
}
}
module.exports = new RegistrationPage();