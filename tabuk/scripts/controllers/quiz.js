'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('QuizCtrl', function ($scope, $rootScope) {
    $scope.currentPage = 1;
    $scope.currentPage_S3 = 1;

    $scope.nextPage = function () {
      if ($scope.currentPage == 4) {
        // send data here and goto thanx page
        $rootScope.page = './views/done.html';
      } else {
        $scope.currentPage++;
      }
    }

    $scope.nextPage_S3 = function () {
      if ($scope.currentPage_S3 == 2) {
        // send data here and goto thanx page
        $rootScope.page = './views/done.html';
      } else {
        $scope.currentPage_S3++;
      }
    }
    $scope.nextPage_S2 = function () {
      // send data here and goto thanx page
      $rootScope.page = './views/done.html';

    }
    $scope.Qusetions_Q1 = [{
      page1: [{
        Q: ' <label>TABUVAN </label><span> Valsartan </span>: reduces new onset diabetes by …..compared with amlodipine - ( VALUE trial)',
        AWS: [
          { value: "23%", type: true },
          { value: "18%", type: false },
          { value: "10%", type: false }
        ]
      },
        {
          Q: ' <label>TABUVAN </label><span> Valsartan </span>: higher response rate than perindopril by… ',
          AWS: [
            { value: "10%", type: false },
            { value: "15%", type: false },
            { value: "20%", type: true }
          ]
        }],
      page2: [{
        Q: ' <label>TABUVAN </label><span> Valsartan </span>: causes (…...) reduction in urine albumin excretion rate compared with Amlodipine in T2DM patients with microalbuminuria ( MARVAL trial) ',
        AWS: [
          { value: "15%", type: false },
          { value: "30%", type: false },
          { value: "44%", type: true }
        ]
      },
        {
          Q: ' <label>TABUVAN </label><span> Valsartan is approved for </span> ',
          AWS: [
            { value: "HTN", type: false },
            { value: "Post MI patients", type: false },
            { value: "CHF", type: false },
            { value: "All of the above", type: true }
          ]
        }],
      page3: [{
        Q: ' <label>TABUVAN </label><span> Valsartan </span>: causes ….  risk reduction in all cause mortality in post MI patients - (Valiant trial) - 14,703 patients ',
        AWS: [
          { value: "25%", type: true },
          { value: "10%", type: false },
          { value: "15%", type: false }
        ]
      },
        {
          Q: ' <span> Valsartan </span>is the only ARB approved from FDA for…… ',
          AWS: [
            { value: "post MI patients", type: true },
            { value: "HTN", type: false },
            { value: "HF", type: false }
          ]
        }],
      page4: [{
        Q: ' <label>TABUVAN </label><span> Valsartan </span>: causes …. reduction in the combined end point of all cause mortality and HF morbidity in HF patients - ( Val-HeFT trial) ',
        AWS: [
          { value: "44%", type: true },
          { value: "30%", type: false },
          { value: "20%", type: false }
        ]
      }]
    }];
    $scope.Qusetions_Q2 = [{
      page1: [{
        Q: ' <label>CO-TABUVAN </label><span> Valsartan/hct </span>: can offer up to …. mm Hg systolic & ….. mm Hg diastolic BP depending on initial severity of HTN (MACHT trial) ',
        AWS: [
          { value: "41 mmHg & 20 mmHg", type: true },
          { value: "20 mmHg & 10 mmHg", type: false },
          { value: "30 mmHg & 15 mmHg", type: false }
        ]
      },
        {
          Q: ' For mean ambulatory SBP & DBP, <span>Valsartan/ hct </span>is……….. effective than olmesrtan/hct in reducing BP in moderately hypertensive patient  ',
          AWS: [
            { value: "More", type: true },
            { value: "Equal", type: false },
            { value: "Less", type: false }
          ]
        }]
    }];
    $scope.Qusetions_Q3 = [{
      page1: [{
        Q: ' <label>LOTEVAN </label><span> 5/160 </span>can offer incremental SBP &DBP reduction in diabetic hypertensive patients who are not controlled on mono therapy, up to……. ',
        AWS: [
          { value: "17.5 mmHg & 10.4 mmHg", type: true },
          { value: "10.5 mmHg & 7 mmHg", type: false },
          { value: "12.5mmHg & 8 mmHg", type: false }
        ]
      },
        {
          Q: ' <label>LOTEVAN </label><span> Valsartan/amlodipine </span>has lower incidence of peripheral edema versus perindopril/amlodipine ',
          AWS: [
            { value: "7.8% Vs 23%", type: true },
            { value: "15% Vs 18%", type: false },
            { value: "15% Vs 20 %", type: false }
          ]
        }],
      page2: [{
        Q: ' Reference to VALIANT trial & EUROPA trial outcomes, <label> Valsartan </label>  causes greater risk reduction in CV mortality versus Perindopril as……. ',
        AWS: [
          { value: "15% Vs -14%", type: false },
          { value: "25% Vs -14%", type: true },
          { value: "18% Vs 14%", type: false }
        ]
      }]
    }];
  });
