import page from "./page";

class registrationPage extends page{
    fillingRegistationForm(){
        $('input[name="f1"]').setValue('YuriiTest');
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