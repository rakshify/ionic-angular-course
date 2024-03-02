const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelButton = document.querySelector("#btn-cancel");
const confirmButton = document.querySelector("#btn-confirm");
const expenseList = document.querySelector("#expense-list");
const totalOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("ion-alert");


let total = 0;


const clear = function () {
	reasonInput.value = '';
	amountInput.value = '';
}

const addExpense = function() {
	const reason = reasonInput.value;
	const amount = amountInput.value;

	if (reason.trim().length <= 0 || amount.trim().length <= 0 || amount <= 0) {
		alertCtrl.header = 'Invalid inputs';
		alertCtrl.message = 'Please enter valid values!!!';
		alertCtrl.buttons = ['Okay'];
		alertCtrl.present();
		// alertCtrl.create({
		// 	"message": "Please enter valid values!!!",
		// 	"header": "Invalid inputs",
		// 	"buttons": ["Okay"]
		// }).then(alertElement => {alertElement.present();});
		return;
	}
	const newItem = document.createElement("ion-item");
	newItem.textContent = reason + ": $" + amount;
	expenseList.appendChild(newItem);
	total += +amount;
	totalOutput.textContent = total;
	clear();
}


confirmButton.addEventListener("click", addExpense)

cancelButton.addEventListener("click", clear)