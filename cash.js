//select everything
const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

//Available notes put into an array
const availableNotes=[2000,500,200,100,50,20,10,5,2,1];

//once click check button validateBillAndCashAmount function calls
checkButton.addEventListener("click",validateBillAndCashAmount);

//to click check button process is done
function validateBillAndCashAmount(){
    //check the user enter the bill amouunt or not 
    if(billAmount.value){
        hideMessage();//this function for message style none
        if(billAmount.value>0)//The bill amount must be greater than 0
        {
            if(cashGiven.value){
                if(cashGiven.value>=billAmount.value)//cash given must be greater than or equal to bill amount
                {
                    const amountToBeReturned = cashGiven.value - billAmount.value;

                    //to call the calculate change function and print the balance amount
                    calculateChange(amountToBeReturned);
                }
                else
                {
                    //to call the show message and print this message
                    showMessage("The given cash is not less than the bill amount otherwise you will be wash plates in the hotel for whole day");
                }
            }
            else{
                showMessage("Enter the cash given field")
            }
        }
        else
        {
            //to call the show message and print this message
            showMessage("The bill amount should be greater than 0 Please enter the positive value");
        }
    }
    else{
        showMessage("Enter the bill amount field");
    }
}

//logic for balance amount and print the balance inside the table
function calculateChange(returnAmount){
    //Go over all the available notes 
    for(let index=0;index<availableNotes.length;index++)
    {
        //no of notes need for the denomination that is quotient
        const numberOfNotes=Math.trunc(returnAmount/availableNotes[index]);//Math.trunc to give the exact quotient leave the decimal places

        //amount left after calculating the number of notes that is remainder
        returnAmount%=availableNotes[index];

        //updating the number of notes in the table 
        noOfNotes[index].innerText=numberOfNotes;

        

    }
}
//to hide the message when the enter input is correct
function hideMessage(){
    message.style.display = "none";
}
//to show the message when the enter input is wrong
function showMessage(msg){
    message.style.display = "block";
    message.innerText=msg;
}