import $ from 'jquery';
import { Character } from './RPG';
$(document).ready(function(){
$("#charcreate").click(function(){
    
    var main = new Character($("#firstname").val(), $("#lastname").val(), $("#altnmae").val(), $("#might").val(), $("#spryness").val(), $("#judgment").val(), $("#echo").val(), $("#magnetism").val(), $("#fortune").val());

});

});