const RegistrationPage = require('../pageObject/registration');



describe("Registration", function(){
    it("should be successful", function(){
        browser.url('../user/?mode=reg')
        RegistrationPage.fillingRegistationForm();
        if (!$('#f_apruve').isSelected()){
            $('#f_apruve').click();
        }
        $('#button').click();
        browser.pause(5000);
        if($('.informer ').isExisting()){
            browser.url('https://vashmagazin.ua/')
            $('#nologin-state').click();
            $('input[name="login"]').setValue('YuriiTest');
            $('input[name="pass"]').setValue('38_GtfEC5Bt6tAa');
        }
        browser.pause(5000);     
    });
});

it("should be successful", function() {});


















