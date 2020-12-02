/* This JavaScript need jQuery to run */
$(document).ready(function() { //JavaScriptet nedan körs när HTML-sidan har laddat klart. 

    //Döljer alla sidor när sidan laddas
    function hidePageSections() { 
        $("#Start-Page").hide();
        $("#About-Page").hide();
        $("#Gallery-Page").hide();
        $("#FAQ-Page").hide();
        $("#Contact-Page").hide();
        $("#Originals-Page").hide();
        $("#Prints-Page").hide();
        $("#Commissions-Page").hide();
    }

    hidePageSections(); //Vid första laddning av webbsidan döljs alla sidor med hidePageSections()
    $("#Start-Page").show(); //Visar startsida vid första laddning
    
});