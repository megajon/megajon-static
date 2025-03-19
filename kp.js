const blinds = document.getElementById("blinds")
const ante = document.getElementById("ante")
const players = document.getElementById("players")
const cpr = document.getElementById("cpr")
const hugeStack = document.getElementById('hugeStack');
const bigStack = document.getElementById('bigStack');
const mediumStack = document.getElementById('mediumStack');
const smallStack = document.getElementById('smallStack');
const stackSize = document.getElementById('stack_size');
const position = document.getElementById('position');
const raisers = document.getElementById('raisers');
let groupings = document.getElementById('show_groupings');
let strategy = document.getElementById('strategy');
let group1 = document.getElementById('group1');
let limpers = document.getElementById('limpers');
let noLimpers = document.getElementById('no_limpers');
let singleRaiser = document.getElementById('single_raised');
let multipleRaisers = document.getElementById('multiple_raises');
const groupOneThroughTwo = document.
// cpr.innerHTML = calculateCpr();
// hugeStack = calculateCpr() * 30;
// bigStack = calculateCpr() * 10;
// mediumStack = calculateCpr() * 4;
blinds.addEventListener('change', function() {
  // cpr.innerHTML = calculateCpr();
  // calculateStackSize();
  updateCsi()
});

ante.addEventListener('change', function() {
  updateCsi()
  // cpr.innerHTML = calculateCpr();
});

players.addEventListener('change', function() {
  updateCsi()
  // cpr.innerHTML = calculateCpr();
});

stackSize.addEventListener('change', function() {
  updateStrategy()
})

position.addEventListener('change', function() {
  updateStrategy()
})

raisers.addEventListener('change', function() {
  updateStrategy()
})

function calculateCsi() {
  let cprCalc = parseInt(blinds.value) + (parseInt(ante.value) * parseInt(players.value))
  let csi = {
    cprCalc: cprCalc,
    hugeStack: cprCalc * 30,
    bigStack: cprCalc * 10,
    mediumStack: cprCalc * 4,
    smallStack: cprCalc * 4
  };
  cpr.innerHTML = csi.cprCalc;
  return csi;
}

function updateCsi() {
  let newCpr = calculateCsi()
  cpr.innerHTML = newCpr.cprCalc;
  hugeStack.innerHTML = newCpr.hugeStack;
  bigStack.innerHTML = newCpr.bigStack;
  mediumStack.innerHTML = newCpr.mediumStack;
  smallStack.innerHTML = newCpr.smallStack;
}

function calculateStackSize() {
  let stackSizes = {
    hugeStack: calculateCpr() * 30,
    bigStack: calculateCpr() * 10,
    mediumStack: calculateCpr() * 4
  }
  hStack.innerHTML = stackSizes.hugeStack;
}

function updateStrategy() {
  // huge stack
  if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_l') {
    groupings.innerHTML = group1.innerHTML;
    strategy.innerHTML = limpers.innerHTML;
  }

  if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_nl') {
    groupings.innerHTML = group1.innerHTML;
    strategy.innerHTML = noLimpers.innerHTML;
  }

  if (stackSize.value === 'huge_stack' && raisers.value === 'single_raiser') {
    groupings.innerHTML = group1.innerHTML;
    strategy.innerHTML = singelRaiser.innerHTML;
  }

  if (stackSize.value === 'huge_stack' && raisers.value === 'multiple_raisers') {
    groupings.innerHTML = group1.innerHTML;
    strategy.innerHTML = multipleRaisers.innerHTML;
    
  }


  //big stack
  if (stackSize.value === 'big_stack' && position.value === 'early' && raisers.value === 'unraised_l') {
    groupings.innerHTML = group1.innerHTML;
    strategy.innerHTML = limpers.innerHTML;
  }

  if (stackSize.value === 'big_stack' && position.value === 'early' && raisers.value === 'unraised_nl') {
    groupings.innerHTML = group1.innerHTML;
    strategy.innerHTML = noLimpers.innerHTML;
  }

  if (stackSize.value === 'big_stack' && position.value === 'middle') {
    const group1 = document.getElementById('group1');
    const group2 = document.getElementById('group2');
    groupings.innerHTML = group1.innerHTML + `<br></br>` + group2.innerHTML;
  }
}

updateCsi()
updateStrategy()