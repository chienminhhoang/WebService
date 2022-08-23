function getAllProduct() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/products",
        success: function (data) {
            let table = document.getElementById("list")
            if (table.style.display === "none") {
                table.style.display = "block"
                document.getElementById("form").style.display = "none"
            }
            document.getElementById("list").innerHTML = displayTable(data)
        }
    })
}

function displayTable(data) {
    let result = ""
    result += "<table border='1' width='300px'>"
    result += "<tr>"
    result += "<th>ID</th>"
    result += "<th>Name</th>"
    result += "<th>Price</th>"
    result += "<th>Amount</th>"
    result += "<th>Category</th>"
    result += "<th colspan='2'>Action</th>"
    result += "</tr>"
    for (let i = 0; i < data.length; i++) {
        result += "<tr>"
        result += "<th>" + data[i].id + "</th>"
        result += "<th>" + data[i].name + "</th>"
        result += "<th>" + data[i].price + "</th>"
        result += "<th>" + data[i].amount + "</th>"
        result += "<th>" + data[i].category + "</th>"
        result += "<th><button onclick='update(" + data[i].id + ")'>Update</button></th>"
        result += "<th><button onclick='deleteProduct(" + data[i].id + ")'>Delete</button></th>"
        result += "</tr>"

    }

    result += "</table>"
    return result
}

function formCreate() {
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("amount").value = ""
    document.getElementById("category").value = ""
    document.getElementById("button").innerHTML = "Create"
    document.getElementById("form").style.display = "block"
    document.getElementById("list").style.display = "none"
    document.getElementById("button").setAttribute("onclick", "createProduct()")

}

let idProduct;

function update(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/products/" + id,
        success: function (data) {
            idProduct = data.id
            document.getElementById("name").value = data.name
            document.getElementById("price").value = data.price
            document.getElementById("amount").value = data.amount
            document.getElementById("category").value = data.category
            document.getElementById("button").innerHTML = "Update"
            document.getElementById("button").setAttribute("onclick", "updateProduct()")
            document.getElementById("form").style.display = "block"
        }
    })
}

function deleteProduct(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/products/" + id,
        success: getAllProduct
    })
}
function updateProduct(){
let name=$('#name').val()
let price=$('#price').val()
let amount=$('#amount').val()
let category=$('#category').val()

    let product= {
        id: idProduct,
        name: name,
        price: price,
        amount: amount,
        category: category,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/products",
        data: JSON.stringify(product),
        success: function () {
            getAllProduct()
            document.getElementById("form").style.display = "none"
        }
    })
    event.preventDefault()
}
function createProduct(){
    let name=$('#name').val()
    let price=$('#price').val()
    let amount=$('#amount').val()
    // let category=$('#category').val()

    let product= {
        name: name,
        price: price,
        amount: amount,
        category: {
            id: 1
        },
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/products",
        data: JSON.stringify(product),
        success: getAllProduct
    })
    event.preventDefault()
}