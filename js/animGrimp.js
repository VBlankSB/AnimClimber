$(document).ready(function () {
    
    setTimeout(animation(),100);
    
    function animation() {
        deplaceg1();
        deplaceg2();
        deplaceg3();
        deplaceg4();
        deplaceg5();
        deplaceg6();
    }    
        
    function deplaceg1() {
        $('#grimp1').animate({top: '578px'}, 6000).animate({top: '-578px'}, 5000)
        setTimeout(deplaceg1,1000);
    }
    function deplaceg2() {
        $('#grimp2').animate({top: '-750px'}, 5000).animate({top: '800px'}, 5000)
        setTimeout(deplaceg2,1000);
    }
    function deplaceg3() {
        $('#grimp3').animate({top: '900px'}, 4000).animate({top: '-578px'}, 5000)
        setTimeout(deplaceg3,1000);
    }
    function deplaceg4() {
        $('#grimp4').animate({top: '-750px'}, 7000).animate({top: '800px'}, 5000)
        setTimeout(deplaceg4,1000);
    }
    function deplaceg5() {
        $('#grimp5').animate({top: '900px'}, 6000).animate({top: '-578px'}, 5000)
        setTimeout(deplaceg5,1000);
    }
    function deplaceg6() {
        $('#grimp6').animate({top: '-1050px'}, 5000).animate({top: '800px'}, 5000)
        setTimeout(deplaceg6,1000);
    }
    
});    
    

    
