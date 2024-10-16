var items;

$(document).ready(function() {
//Clicking on "Item Description" on the first card leads to information sliding up into place
// $("#cartbutton").hide();
$.getJSON("data.json", handleDataItem1);

function handleDataItem1(data) {
  console.log(data);
  items = data;
  $("#number").html(data[0].number);
  $("#textLine").html(data[0].textLine);
  $("#number2").html(data[0].number2);
  $("#textLine2").html(data[0].textLine2);
  $("#number3").html(data[0].number3);
  $("#textLine3").html(data[0].textLine3);
  $("#number4").html(data[0].number4);
  $("#textLine4").html(data[0].textLine4);
  $("#number5").html(data[0].number5);
  $("#textLine5").html(data[0].textLine5);
  $("#number6").html(data[0].number6);
  $("#textLine6").html(data[0].textLine6);
  $("#number7").html(data[0].number7);
  $("#textLine7").html(data[0].textLine7);
  $("#number8").html(data[0].number8);
  $("#textLine8").html(data[0].textLine8);
  $("#number9").html(data[0].number9);
  $("#textLine9").html(data[0].textLine9);
  $("#number10").html(data[0].number10);
  $("#textLine10").html(data[0].textLine10);
  $("#number11").html(data[0].number11);
  $("#textLine11").html(data[0].textLine11);
  $("#number12").html(data[0].number12);
  $("#textLine12").html(data[0].textLine12);
  $("#number13").html(data[0].number13);
  $("#textLine13").html(data[0].textLine13);
  $("#number14").html(data[0].number14);
  $("#textLine14").html(data[0].textLine14);
  $("#number15").html(data[0].number15);
  $("#textLine15").html(data[0].textLine15);
  $("#number16").html(data[0].number16);
  $("#textLine16").html(data[0].textLine16);
  $("#number17").html(data[0].number17);
  $("#textLine17").html(data[0].textLine17);
  $("#number18").html(data[0].number18);
  $("#textLine18").html(data[0].textLine18);
  $("#number19").html(data[0].number19);
  $("#textLine19").html(data[0].textLine19);
}

});