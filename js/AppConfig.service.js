(function() {
    var app = angular.module("ContactApp");
    app.service("AppDataServiceSvc", function(AppNameSvc) {
        this.name = AppNameSvc;
        this.Author = "Mody Ghaly"
        this.builtDate = new Date().toDateString();
    });
})();
