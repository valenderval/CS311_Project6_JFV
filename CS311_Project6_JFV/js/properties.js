
function assetButtonClick() {

    document.getElementById('inputContainer').style.display = 'block';

    document.getElementById("addAssetBtn").style.display = "none";

}

function updateAssetSum(){
        // Get the values from the input boxes
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let inventory = parseFloat(document.getElementById('inventory').value) || 0;
    let supplies = parseFloat(document.getElementById('supplies').value) || 0;
    let temporaryInvestments = parseFloat(document.getElementById('temporaryInvestments').value) || 0;

        // Calculate the sum
    let sum = cash + inventory + supplies + temporaryInvestments;

        // Update the sum display
    document.getElementById('totalAssets').textContent = sum.toFixed(2);
    }


function liabilityButtonClick () {

document.getElementById('inputLiabilityContainer').style.display = 'block';

document.getElementById("addLiabilityBtn").style.display = "none";


}

function updateLiabilitySum() {

let accountsPayable = parseFloat(document.getElementById('accountsPayable').value) || 0;
let notesPayable = parseFloat(document.getElementById('notesPayable').value) || 0;
let interestPayable =  parseFloat(document.getElementById('interestPayable').value) || 0;
let wagesPayable =  parseFloat(document.getElementById('wagesPayable').value) || 0;
let accruedExpenses =  parseFloat(document.getElementById('accruedExpenses').value) || 0;

let sum = accountsPayable + notesPayable + interestPayable + wagesPayable + accruedExpenses;

document.getElementById('totalLiabilities').textContent = sum.toFixed(2);
}


function investmentButtonClick() {

document.getElementById('inputInvestmentContainer').style.display = 'block';

document.getElementById("addInvestmentBtn").style.display = "none";
}

function updateInvestmentSum() {

    let land = parseFloat(document.getElementById('land').value) || 0;
    let buildingAndImprovements =  parseFloat(document.getElementById('buildingAndImprovements').value) || 0;
    let equipment = parseFloat(document.getElementById('equipment').value) || 0;
    let temporaryInvestments = parseFloat(document.getElementById('temporaryInvestments').value) || 0;

    let sum = land + buildingAndImprovements + equipment + temporaryInvestments;

    document.getElementById('totalInvestment').textContent = sum.toFixed(2);

}



function longTermButtonClick() {

document.getElementById('inputLongTermContainer').style.display = 'block';

document.getElementById("addLongTermBtn").style.display = "none";
}


function updateLongTermSum() {

let longTermNotesPayable = parseFloat(document.getElementById('longTermNotesPayable').value) || 0;
let bondsPayable = parseFloat(document.getElementById('bondsPayable').value) || 0;

let sum = longTermNotesPayable + bondsPayable;

document.getElementById('totalLongTerm').textContent = sum.toFixed(2);

}


function intangibleButtonClick() {

document.getElementById('inputIntangibleContainer').style.display = 'block';

document.getElementById("addIntangibleBtn").style.display = "none";

}

function updateIntangibleSum() {

let tradeNames = parseFloat(document.getElementById('tradeNames').value) || 0;
let goodWill = parseFloat(document.getElementById('goodWill').value) || 0;

let sum = tradeNames + goodWill;

document.getElementById('totalIntangible').textContent = sum.toFixed(2);

}

function positionButtonClick() {

let completeAssets = 0;
let completeLiabilities = 0;

// Calculate total assets
document.querySelectorAll('.asset').forEach(input => {
    completeAssets += parseFloat(input.value) || 0;
});

// Calculate total liabilities
document.querySelectorAll('.liability').forEach(input => {
    completeLiabilities += parseFloat(input.value) || 0;
});

// Calculate total position
let totalPosition = completeAssets - completeLiabilities;

// Update the HTML with the calculated values
document.getElementById('completeAssets').textContent = completeAssets.toFixed(2);
document.getElementById('completeLiabilities').textContent = completeLiabilities.toFixed(2);
document.getElementById('totalPosition').textContent = totalPosition.toFixed(2);
}