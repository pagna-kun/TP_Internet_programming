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
        'name'      :   'C programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'C++ programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'C# programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'Java programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'JavaScript programming',
        'category'  :   'programming',
        'price'     :   '50000'
    }

];
// var counter = books.length;
// console.log(books,counter);

//listing
function listing(){
    //list all objects that exist in json array 
    books.forEach(book => {
        console.log(book);
        document.getElementById('list_book').innerHTML += 
            `<div class="item">
                <div class="button">
                    <button>Delete</button>
                    <button>Change name</button>
                </div>
                <div class="image">
                    <img src="./book.png" alt="Book-logo" width="50%">
                </div>
                <div class="book_info">
                    <span>Name: ${book?.name}</span><br>
                    <span>Price: ${book?.price} riels</span><br>
                    <span>Category: ${book?.category}</span>
                </div>
            </div>`;
    })
    
}

//add book
function addBook(){
    //add new object to json array
    let id = books.length;
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let book = {
        'name'      :   name,
        'category'  :   category,
        'price'     :   price
    };
    // console.log(book);
    // console.log(books);
    books.push(book);
    //add to json array then list that one object to innerHTML 
    document.getElementById('list_book').innerHTML += 
        `<div class="item">
            <div class="button">
                <button>Delete</button>
                <button>Change name</button>
            </div>
            <div class="image">
                <img src="./book.png" alt="Book-logo" width="50%">
            </div>
            <div class="book_info">
                <span>Name: ${book?.name}</span><br>
                <span>Price: ${book?.price}</span><br>
                <span>Category: ${book?.category}</span>
            </div>
        </div>`;
    // console.log(books);
}

//update book
function updateBook(){

}

//delete book
function deleteBook(){

}