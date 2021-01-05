'use strict';

/**
 * @ngdoc overview
 * @name searchApp
 * @description
 * # searchApp
 *
 * Main module of the application.
 */
angular
    .module('searchApp', [
        'angular-gestures',
        'ui.bootstrap',
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ngMessages'

    ])
    .config(function(hammerDefaultOptsProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
        hammerDefaultOptsProvider.set({
            recognizers: [
                [Hammer.SwipeLeft]
            ]

        });
    });
angular.module('searchApp').controller("master", function($scope, $rootScope) {

    var pages = ["H2B_Anatomy_EGY_001_Slide", "H2B_Anatomy_EGY_002_Slide", "H2B_Anatomy_EGY_003_Slide",
        "H2B_Anatomy_EGY_004_Slide", "H2B_Anatomy_EGY_005_Slide", "H2B_Anatomy_EGY_006_Slide", "H2B_Anatomy_EGY_009_Slide",
        "H2B_Anatomy_EGY_010_Slide", "H2B_Anatomy_EGY_011_Slide", "H2B_Anatomy_EGY_013_Slide"
    ];

    var n = 0;
    $rootScope.url = "./H2B/H2B_Anatomy_EGY_001_Slide/H2B_Anatomy_EGY_001_Slide.html";

    $scope.onSwipeRight = function(ev) {
        if (n > 0) {
            $rootScope.url = "./H2B/" + pages[n] + "/" + pages[n] + ".html";
            n--;
        }
    }

    $scope.onSwipeLeft = function(ev) {
        if (n < pages.length) {
            $rootScope.url = "./H2B/" + pages[n] + "/" + pages[n] + ".html";
            n++;
        }
    }

}).directive('swipeLeft', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            // $(element).toolbar(scope.$eval(attrs.toolbarTip));
            $(element).hammer({}).bind("swipeleft", function() {
                scope.$apply(attrs.swipeLeft);
            });
        }
    };
}).directive('swipeRight', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            // $(element).toolbar(scope.$eval(attrs.toolbarTip));
            $(element).hammer({}).bind("swiperight", function() {
                scope.$apply(attrs.swipeRight);
            });
        }
    };
});
angular.module('searchApp').controller("sideController", function($uibModal, $log, $document) {
    var $ctrl = this;
    $ctrl.animationsEnabled = true;


    $ctrl.open = function(size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
        });
    };
});

angular.module('searchApp').controller('ModalInstanceCtrl', function($uibModalInstance, $timeout, $q, $http, $rootScope) {
    var $ctrl = this;

    var localData = {
        "Slides": [{
                "Name": "H2B_Anatomy_EGY_001_Slide",
                "keyWords": "",
                "Content": "Breast anatomy The breast is a glandular organ located on the chest. The breast is made up of: Connective tissue Fat tissue Breast tissue"
            },
            {
                "Name": "H2B_Anatomy_EGY_002_Slide",
                "Content": "Anatomy of the female breast Lymph nodes are small, bean-shaped collections of immune system cells (cells that are important in fighting infections) that are connected by lymphatic vessels. On the outside of the breast Lymph nodes nipple Areola"
            },
            {
                "Name": "H2B_Anatomy_EGY_003_Slide",
                "keyWords": "",
                "Content": "On the inside of the breast Chest wall Ribs Muscle Fatty Tissue Lobe Ducts Areola Nipple Lobules The breast is made up of lobes and ducts. Each breast has 15 to 20 sections called lobes which are epithelial structures within the breast that produce milk during lactation. They are also the primary anatomical source of most breast cancer precursors and cancers. Tiny tubes that carry the milk from the lobules to the nipple The area of dark-colored skin on the breast that surrounds the nipple  The small raised area in the center of the breast A subdivision of a lobe, lobules end in dozens of tiny bulbs that can make milk"
            },
            {
                "Name": "H2B_Anatomy_EGY_004_Slide",
                "keyWords": "",
                "Content": "An acinus (circled in black) is an epithelial substructure found in lobules"
            },
            {
                "Name": "H2B_Anatomy_EGY_005_Slide",
                "keyWords": "",
                "Content": "Lymphatic system The lymphatic system is made up of a network of lymph glands, connected throughout the body by tiny tubes (vessels) called lymph vessels. The lymph glands are part of the natural drainage system of the body called the lymphatic system."
            },
            {
                "Name": "H2B_Anatomy_EGY_006_Slide",
                "keyWords": "",
                "Content": "Lymphatic system Lymph nodes Lymph vessels A rounded mass of lymphatic tissue that is surrounded by a capsule of connective tissue Lymph nodes filter lymph (lymphatic fluid) and they store lymphocytes (white blood cells). They are located along lymphatic vessels and are called lymph glands. Thin tubes that carry lymph (lymphatic fluid) and white blood cells through the lymphatic system and are called lymph vessels."
            },
            {
                "Name": "H2B_Anatomy_EGY_009_Slide",
                "keyWords": "",
                "Content": "Lymphatic system Breast tissue is drained by lymphatic vessels that lead to axillary nodes (which lie in the axilla) and internal mammary nodes (which lie along each side of the sternum)."
            },
            {
                "Name": "H2B_Anatomy_EGY_010_Slide",
                "keyWords": "",
                "Content": "Lymphatic system Lymph is a yellow fluid that flows through the lymphatic system and eventually drains into the veins. This system helps get rid of waste products from the body. Tissue fluid bathes the body's cells, drains into the lymphatic system and then circulates again."
            },
            {
                "Name": "H2B_Anatomy_EGY_011_Slide",
                "keyWords": "",
                "Content": "Breast lymph nodes Supraclavicular nodes Collarbone Infraclavicular (or subclavicular) nodes Axillary nodes Internal mammary nodes Lymph vessels"
            },
            {
                "Name": "H2B_Anatomy_EGY_013_Slide",
                "keyWords": "",
                "Content": "Axillary lymph nodes 30-50 lymph nodes in the axilla The number varies from one woman to another. Level I (low axilla) Level II (mid axilla) Level III (high axilla) Armpit (axilla) When breast cancer spreads, it usually goes to Level I lymph nodes first, to Level II next and then to Level III."
            }
        ]
    }

    String.prototype.replaceAll = function(s, r) { return this.split(s).join(r) }

    $ctrl.goToSlide = function(page) {
        $rootScope.url = "./H2B/" + page + "/" + page + ".html";
    }

    $ctrl.searchWords = "";
    $ctrl.search = function(sw) {
        $ctrl.searchResult = [];
        var t = localData.Slides;
        for (var i = 0; i < t.length; i++) {
            if (t[i].Content.toLowerCase().indexOf(sw.toLowerCase()) > -1) {
                $ctrl.searchResult.push({
                    slide: t[i].Name,
                    content: t[i].Content.toLowerCase().replaceAll(sw.toLowerCase(), "<b class='searchWord'>" + sw.toLowerCase() + "</b>")
                });
            }
        }

    };

    $ctrl.cancel = function() {
        $uibModalInstance.close();
    };
    $ctrl.ok = function() {

    }
});