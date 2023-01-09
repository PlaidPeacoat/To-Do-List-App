

//let li = $('<li></li>');
let i = 0;
function newItem() {

    console.log('add');


    let inputValue = $('#input').val();
    //li.append(inputValue);


    if (inputValue === '') {
        alert("You must write something!");
    } else {
        // $('#list').append(li);

        let elem = "li" + i
        $('#list').append('<li ondblclick="crossOut(\'' + elem + '\')" id="' + elem + '">' + inputValue + ' <button  onclick="deleteListItem(\'' + elem + '\')" class="trashBtn"><i class = "fa fa-trash"></i></button></li>')
        i = i + 1;
    }





    // 4. Reordering the items: 
    $('#list').sortable();

}

function deleteListItem(element) {

    $('#' + element).addClass("delete");

}

function crossOut(element) {
    $('#' + element).toggleClass("strike");
}


/*
li.on("dblclick", function crossOut() {
    // li.toggleClass("strike");
});*/




