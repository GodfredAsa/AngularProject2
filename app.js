let app = angular.module("RembrandtApp", []);
app.controller("PaintingController",function($scope){
    $scope.paintingCount = 0;
    $scope.paintings = [
        "images/snake1.jpg",
        "images/snake2.jpg",
        "images/snake3.jpg",
        "images/snake4.jpg",
        "images/snake5.jpg",
        "images/snake6.jpg",
        "images/snake7.jpg",
    ];

    $scope.previous=function(){
        if($scope.paintingCount <= 0){
            alert('You are at the beginning');
            return;
        }
        $scope.paintingCount = $scope.paintingCount -1;
    };

    $scope.next=function(){
        if($scope.paintingCount >= $scope.paintings.length -1){
            alert('You are at the end');
            return;
        }
        $scope.paintingCount = $scope.paintingCount +1;
    };
});


const previousButton = document.querySelector('.btn-danger');
const nextButton = document.querySelector('.btn-success');
const imageElement = document.querySelector('.big');
console.log(imageElement);


previousButton.addEventListener('click', function(){
    imageElement.className = "event";
    imageElement.classList.add('sweetlandia');
});

nextButton.addEventListener('click', function(){
    imageElement.className = "swing";
    imageElement.classList.add('sweetlandia');
});