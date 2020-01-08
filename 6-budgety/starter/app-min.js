//
// ─── Logic ──────────────────────────────────────────────────────────────────
//

let budgetController = (function(){



})();



//
// ─── UI ─────────────────────────────────────────────────────────────────────────
//

let UIController = (function() {

    

})();



//
// ─── APP ────────────────────────────────────────────────────────────────────────
//

let controller = (function(budgetCtrl, UICtrl) {

    document.querySelector(".add__btn").addEventListener("click", function(){
        console.log("button was clicked");
        //1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    });

    document.addEventListener("keypress", function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                console.log("ENTER was pressed");
                
            }
        

    });

})(budgetController,UIController);