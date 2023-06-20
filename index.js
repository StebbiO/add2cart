import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-b30bd-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const addBtnEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")
const shoppingListEl = document.getElementById("shopping-list")

addBtn.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)

    clearText() 
})

onValue(shoppingListInDB, function(snapshot) {
    let itemArray = Object.values(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < itemArray.length; i++) {
        let currentItem = itemArray[i]
        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]
        
        createListEl(currentItem)
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearText() {
    inputFieldEl.value = ""
}

function createListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    shoppingListEl.append(newEl)
}