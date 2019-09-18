import $ from 'jquery';
import 'bootstrap';
import { Character } from './RPG';
import './styles.css';
$(document).ready(function(){
var charbank = [];
$("#charsheet").hide();
charbank.push(new Character($("#firstName").val(), $("#lastName").val(), $("#altname").val(), $("#might").val(), $("#spryness").val(), $("#judgment").val(), $("#echo").val(), $("#magnetism").val(), $("#fortune").val()));
$("#createsend").submit(function(){
    event.preventDefault();
    var main = new Character($("#firstName").val(), $("#lastName").val(), $("#altname").val(), $("#might").val(), $("#spryness").val(), $("#judgment").val(), $("#echo").val(), $("#magnetism").val(), $("#fortune").val());
    console.log(main);
    $("#createsend").hide();
    $("#charsheet").show();
    main.SheetPrint();
});
 
});