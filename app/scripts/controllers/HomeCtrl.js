
(function () {
    function HomeCtrl() {
        this.title = "Bloc Chat Application";
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);
})();
