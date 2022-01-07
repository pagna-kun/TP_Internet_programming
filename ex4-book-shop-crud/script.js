// // $(()=>{
// //     $('[id=submit]').click(()=>{
// //         const name = $('[id=name]').val()
// //         const catagory= $('[id=catagory]').val()
// //         const price= $('[id=price]').val()
// //         const grid = $('div[class=grid]')

// //         var grid_list= `<div class="grid-list">`
// //         grid_list += `<p>${name}</p>`
// //         grid_list += `<p>${catagory}</p>`
// //         grid_list += `<p>${price}</p>`
// //         grid_list += `</div>`
// //         $('div[class="grid"]').append(grid_list)

// //     })
// // })

// function clickSubmit() {
//     let name = document.getElementById("name").value;
//     let catagory = document.getElementById("catagory").value;
//     let price = document.getElementById("price").value;

//     console.log('Click name', name, catagory, price);
//     var form = `<div class="item">`
//     form += `<p>Name: ${name}</p>`
//     form += `<p>Price: ${price}</p>`
//     form += `<p>Category: ${catagory}</p>`
//     form += `</div>`
//     $('div[class="grid"]').append(form);
// }





var books = [
    {
        'id'        :   0,
        'name'      :   'C programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'id'        :   1,
        'name'      :   'C++ programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'id'        :   2,
        'name'      :   'C# programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'id'        :   3,
        'name'      :   'Java programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'id'        :   4,
        'name'      :   'JavaScript programming',
        'category'  :   'programming',
        'price'     :   '50000'
    }

];
// var counter = books.length;
// console.log(books,counter);

//listing
function listing(){
    for (i=0; i<books.length; i++){
        document.getElementById('book').
    }
}
//add book
function addBook(){
    let id = books.length;
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let book = {
        'id'        :   id,
        'name'      :   name,
        'category'  :   category,
        'price'     :   price
    };
    // console.log(book);
    // console.log(books);
    books.push(book);
    // console.log(books);

}
function deleteBook(){

}