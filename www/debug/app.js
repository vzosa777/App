

var Constants;
var usuario='';
var bandera=0;
(function (Constants) {
    'use strict';
    
    Constants.Paths = {
        Core: 'core',
        Modules: 'modules/',
        Tabs: 'tabs',
        Side: {
            Base: 'side',
            Left: 'left'
        },
        Home: {
            Base: 'home',
            Scroll: 'scroll',
            Table: 'eventos',
            Password: 'recontra'
        },
        Actions: {
            Base: 'actions'
        },
        Buttons: {
            Base: 'buttons'
        }
    };
})(Constants || (Constants = {}));
;
/// <reference path="constants/paths.ts" />
var App;
(function (App) {
    'use strict';
    statesConfiguration.$inject = ["$urlRouterProvider", "$ionicConfigProvider"];
    angular
        .module('app', [
        'ionic',
        Constants.Paths.Core,
        Constants.Paths.Tabs,
        Constants.Paths.Side.Base,
        Constants.Paths.Home.Base,
        Constants.Paths.Actions.Base,
        Constants.Paths.Buttons.Base
    ])
        .config(statesConfiguration);
    window['ionic'].Platform.ready(function () {
        angular.bootstrap(document.querySelector('body'), ['app']);
    });
    // Configure routes
    function statesConfiguration($urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
        $urlRouterProvider.otherwise('/tabs/home');
    }
})(App || (App = {}));

var Actions;
(function (Actions) {
    'use strict';
    statesConfiguration.$inject = ["$stateProvider"];
    var Paths = Constants.Paths;
    var Page = Paths.Actions;
    angular.module(Page.Base, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Tabs + '.' + Page.Base, {
            url: '/' + Page.Base,
            views: {
                'actions-tab': {
                    controller: 'actionsController as vm',
                    templateUrl: Paths.Modules + 'actions/views/actions.html'
                }
            }
        });
    }
})(Actions || (Actions = {}));

var Buttons;
(function (Buttons) {
    'use strict';
    statesConfiguration.$inject = ["$stateProvider"];
    var Paths = Constants.Paths;
    var Page = Paths.Buttons;
    angular.module(Page.Base, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Tabs + '.' + Page.Base, {
            url: '/' + Page.Base,
            views: {
                'buttons-tab': {
                    templateUrl: Paths.Modules + 'buttons/views/buttons.html'
                }
            }
        });
    }
})(Buttons || (Buttons = {}));

var Core;
(function (Core) {
    'use strict';
    angular.module(Constants.Paths.Core, []);
})(Core || (Core = {}));

var Home;
(function (Home) {
    'use strict';
    statesConfiguration.$inject = ["$stateProvider"];
    var Paths = Constants.Paths;
    var Page = Paths.Home;
    angular.module(Page.Base, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Tabs + '.' + Page.Base, {
               url: '/' + Page.Base,
                views: {
                    'home-tab': {
                        controller: 'homeController as vm',
                        templateUrl: Paths.Modules + 'home/views/home.html'
                    }
                }
            })
            .state(Paths.Tabs + '.' + Page.Scroll, {
                url: '/' + Page.Scroll,
                views: {
                    'home-tab': {
                        controller: 'homeController as vm',
                        templateUrl: Paths.Modules + 'home/views/scroll.html'
                    }
                }
            
            })
            .state(Paths.Tabs + '.' + Page.Table, {
                url: '/' + Page.Table,
                views: {
                    'home-tab': {
                        controller: 'homeController as vm',
                        templateUrl: Paths.Modules + 'home/views/eventos.html'
                    }
                }
            
            })
            .state(Paths.Tabs + '.' + Page.Password, {
                url: '/' + Page.Password,
                views: {
                    'home-tab': {
                        controller: 'homeController as vm',
                        templateUrl: Paths.Modules + 'home/views/recontra.html'
                    }
                }
            
            });
        
    }    
})(Home || (Home = {}));


var Side;
(function (Side) {
    'use strict';
    statesConfiguration.$inject = ["$stateProvider"];
    var Paths = Constants.Paths;
    var Page = Paths.Side;
    angular.module(Page.Base, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Tabs + '.' + Page.Left, {
            url: '/' + Page.Left,
            views: {
                'left-tab': {
                    templateUrl: Paths.Modules + 'side/views/left.html'
                }
            }
        });
    }
})(Side || (Side = {}));


var Tabs;
(function (Tabs) {
    'use strict';
    statesConfiguration.$inject = ["$stateProvider"];
    var Paths = Constants.Paths;
    angular.module(Paths.Tabs, [])
        .config(statesConfiguration);
    function statesConfiguration($stateProvider) {
        $stateProvider
            .state(Paths.Tabs, {
            url: '/' + Paths.Tabs,
            abstract: true,
            templateUrl: Paths.Modules + 'tabs/templates/tabs.html'
        });
    }
})(Tabs || (Tabs = {}));



var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

var Home;
(function (Home) {
    'use strict';
    //$('#siguiente1').hide();
    var HomeController = (function () {
        
        function HomeController() {
            if(bandera==1){
                this.texto = '<h3>Bienvenido '+usuario.obj.nom_usu+'</h3>';            
            }else{
                this.texto = '<h3>Bienvenido</h3>';
            }
            //this.addTextAsync();
        }
        
        
        HomeController.prototype.addLogin = function () {
            function Preregistro(correo,password){
                this.correo=correo;
                this.password=password;
            }
                              
            var preregistroBO = new Preregistro("rnavarro@omicron.com.mx","BEIngram");
            $.ajax({
                //url:'http://192.168.0.4:8080//ingram-web/preregistro/login',
 		url:'http://env-9657173.dal.jelastic.vps-host.net/ingram-web/preregistro/login',
                type: "POST",
 		contentType: "application/json; charset=utf-8",
 		dataType: "json",
 		data: JSON.stringify(preregistroBO)
 		,success:function(data) {
                    usuario=data;
                    $('#siguiente1').click();
                    bandera=1;
                },error: function(msg)  {
                                        
 		}
            });
            bandera=0;
            $('#siguiente1').click();
            
            
            
            
            
            //alert("Success!");
            /*getJSON('http://env-9657173.dal.jelastic.vps-host.net/ingram-web/user/test').then(function(data) {
                var out = "";
                var i;
                var aux=0;
                for(i = 0; i < data.length; i++) {
                    out +=  "Email:"+data[i].email +" Contraseña:"+data[i].password + '<br>';
                    out = data[i].correo;
                    if(out===$('#correo1').val()||$('#correo1').val()==="rainierogd@gmail.com"){
                        aux=1;
                        $('#siguiente1').click();                        
                    }
                }
                if(aux==0){
                    alert('Error: Usuario inexistente');y
                }
            }, function(status) { //error detection....
                alert('No se encuentra conexión activa de internet.');
            });*/
            
        };
        //Lanzar otra aplicación
        /*HomeController.prototype.addApp = function () {
           
            var successCallback = function(data) {
                //alert("Success!");
            };
            var errorCallback = function(errMsg) {
                alert("Error! " + errMsg);
            }  
            
            window.plugins.launcher.canLaunch({packageName:'com.Scale.MultipleproximityChi'}, successCallback, errorCallback);
            window.plugins.launcher.launch({packageName:'com.Scale.MultipleproximityChi'}, successCallback, errorCallback);
        };*/
        
        /*HomeController.prototype.addApp = function () {
            facebookConnectPlugin.login(["public_profile"],function (success) { alert("Conectado con exito") },function (error) { alert(JSON.stringify(error)) });
        };
        
        HomeController.prototype.addComment = function () {
            facebookConnectPlugin.showDialog({
                        method: "share"                        
                    }, function onShareSuccess (result) {
                        alert("Comentario Exitoso");
                    });
        };*/
        
        HomeController.prototype.getNombreUsuario = function () {
            alert('Entre func');
            //this.texto = '<h3>Bienvenido </h3>';
            this.texto='hola';
        };
        
        HomeController.prototype.recoverPassword = function () {
            function Preregistro() {
                this.idEvento = "";
                this.iduUsuario = "";
                this.nombre = "";
                this.preg1 = "";
                this.tipo_pre = "";
                this.reg = "";
                this.correo= "";
                this.razonSocial="";
                this.razonComercial="";
                this.apellidos="";
                this.marca="";
                this.password="";
                this.calle="";
                this.telefonoOficina="";
                this.numero="";
                this.numeroInterior="";
                this.celular="";
                this.colonia="";
                this.numeroClienteIngram="";
                this.codigoPostal="";
                this.genero="";
                this.estado="";
                this.fechaNacimiento="";
                this.pais="";
                this.nombreGafete="";
                this.apoyoVuelos="";
                this.giroNegocio="";
                this.mercadoNegocio="";
                this.carrera5km="";
                this.ciudadOrigenVuelo="";
                this.tallaPlayera="";
                this.vueloPreferencia="";
                this.desayunoAsistr="";
                this.requieresHospedaje="";
                this.actividadIntegracion="";
                this.compartirHabitacion="";
                this.nombrePersonaCompartir="";
                this.empresaPersonaCompartir="";
                this.atencionEspecial="";
                this.rfc = "";
       
            }

            var eventoBO = new Preregistro();
            eventoBO.correo = $("#j_username").val();
		
							
            $.ajax({
	        url:'http://env-9657173.dal.jelastic.vps-host.net/ingram-web/login/enviarCorreoResetPassword',
	        type: "POST",
	        contentType: "application/json; charset=utf-8",
	        dataType: "json",
		data: JSON.stringify(eventoBO)
		,success:function(data) {
                    alert(data.mensaje);
                    $('#atras1').click();
                }
            });	
            
        };
        
        return HomeController;
    }());
    Home.HomeController = HomeController;
    angular.module(Constants.Paths.Home.Base)
        .controller('homeController', HomeController);
})(Home || (Home = {}));



var Actions;
(function (Actions) {
    'use strict';
    var ActionsController = (function () {
        ActionsController.$inject = ["loadingService"];
        function ActionsController(loadingService) {
            this.loadingService = loadingService;
            
            //this.text = '';
            //this.addTextAsync();
        }
        ActionsController.prototype.addTextAsync = function () {
           
            var successCallback = function(data) {
                alert("Success!");
                
            // if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
            };
            var errorCallback = function(errMsg) {
                alert("Error! " + errMsg);
            }
    
            
            window.plugins.launcher.canLaunch({packageName:'com.Scale.MultipleproximityChi'}, successCallback, errorCallback);
            window.plugins.launcher.launch({packageName:'com.Scale.MultipleproximityChi'}, successCallback, errorCallback);
        };
        return ActionsController;
    }());
    Actions.ActionsController = ActionsController;
    angular.module(Constants.Paths.Actions.Base)
        .controller('actionsController', ActionsController);
})(Actions || (Actions = {}));


var Core;
(function (Core) {
    'use strict';
})(Core || (Core = {}));

var Core;
(function (Core) {
    'using strict';
    var LoadingService = (function () {
        LoadingService.$inject = ["$ionicLoading"];
        function LoadingService($ionicLoading) {
            this.$ionicLoading = $ionicLoading;
        }
        LoadingService.prototype.show = function () {
            var options = {
                templateUrl: Constants.Paths.Modules + 'tabs/templates/loading.html'
            };
            this.$ionicLoading.show(options);
        };
        LoadingService.prototype.hide = function () {
            this.$ionicLoading.hide();
        };
        return LoadingService;
    }());
    Core.LoadingService = LoadingService;
    angular.module(Constants.Paths.Core)
        .service('loadingService', LoadingService);
})(Core || (Core = {}));

var Tabs;
(function (Tabs) {
    'use strict';
    var NavigationController = (function () {
        NavigationController.$inject = ["$ionicHistory", "$ionicTabsDelegate", "$ionicPlatform"];
        function NavigationController($ionicHistory, $ionicTabsDelegate, $ionicPlatform) {
            var _this = this;
            this.$ionicHistory = $ionicHistory;
            this.$ionicTabsDelegate = $ionicTabsDelegate;
            this.$ionicPlatform = $ionicPlatform;
            $ionicPlatform.registerBackButtonAction(function (e) { return _this.checkBack(e); }, 100);
        }
        NavigationController.prototype.goBack = function () {
            this.$ionicHistory.goBack();
        };
        NavigationController.prototype.checkBack = function (e) {
            var page = this.$ionicHistory.currentStateName();
            if (page === Constants.Paths.Home.Base) {
                var nav = navigator;
                if (nav.app && nav.app.exitApp) {
                    nav.app.exitApp();
                }
                else {
                    window.close();
                }
            }
            else {
                this.goBack();
            }
        };
        NavigationController.prototype.disableSwipe = function (e) {
            // For example on <ion-list>
            e.stopPropagation();
        };
        NavigationController.prototype.onSwipeLeft = function () {
            this.$ionicTabsDelegate.select(this.$ionicTabsDelegate.selectedIndex() + 1);
        };
        NavigationController.prototype.onSwipeRight = function () {
            var index = this.$ionicTabsDelegate.selectedIndex();
            if (index > 0) {
                this.$ionicTabsDelegate.select(this.$ionicTabsDelegate.selectedIndex() - 1);
            }
        };
        return NavigationController;
    }());
    Tabs.NavigationController = NavigationController;
    angular.module(Constants.Paths.Tabs)
        .controller('navigationController', NavigationController);
})(Tabs || (Tabs = {}));
