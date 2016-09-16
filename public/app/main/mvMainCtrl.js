angular.module('app').controller('myMainCtrl', function($scope){
    $scope.courses = [
        {
            name: "C# for Sociopaths",
            featured: true,
            published: new Date('1/1/2016')
        },{
            name: "C# for Normal peopel",
            featured: true,
            published: new Date('1/2/2016')
        },{
            name: "Super Duper C#",
            featured: false,
            published: new Date('1/3/2016')
        },{
            name: "Visual Basic",
            featured: false,
            published: new Date('1/4/2016')
        },{
            name: "C++ pediátrico",
            featured: false,
            published: new Date('1/5/2016')
        },{
            name: "Javascript for people who don't understand",
            featured: true,
            published: new Date('1/6/2016')
        },{
            name: "Código mantido",
            featured: false,
            published: new Date('1/7/2016')
        },{
            name: "Guia de sobrevicencia às análises de código",
            featured: true,
            published: new Date('1/8/2016')
        },{
            name: "C# for Sociopaths",
            featured: true,
            published: new Date('1/9/2016')
        },{
            name: "C# for Sociopaths",
            featured: true,
            published: new Date('1/10/2016')
        },{
            name: "C# for Sociopaths",
            featured: true,
            published: new Date('1/11/2016')
        },{
            name: "C# for Sociopaths",
            featured: true,
            published: new Date('1/12/2016')
        }
    ]


});
