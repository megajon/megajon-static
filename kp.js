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
let group2 = document.getElementById('group2');
let group3 = document.getElementById('group3');
let group4 = document.getElementById('group4');
let group5 = document.getElementById('group5');
let group6 = document.getElementById('group6');
let group7 = document.getElementById('group7');
let group8 = document.getElementById('group8');
let group9 = document.getElementById('group9');
let group10 = document.getElementById('group10');
let limpers = document.getElementById('limpers');
let noLimpers = document.getElementById('no_limpers');
let singleRaiser = document.getElementById('single_raised');
let multipleRaisers = document.getElementById('multiple_raises');

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

function addClassToChildren() {
  let parentDiv = document.getElementById("hand_groupings");
  let children = parentDiv.children;
  for (let child of children) {
    child.classList.add("hand_groupings");
  }
}

function updateStrategy() {
  // huge stack
  if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_nl' && (position.value === 'early' || position.value === 'middle')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-2";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
  }


  // if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_nl' && position.value === 'middle') {
  //   addClassToChildren();
  //   strategy.innerHTML = "Move in with groups 1-2";
  //   group1.classList.remove("hand_groupings");
  //   group2.classList.remove("hand_groupings");
  // }

  if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_nl' && position.value === 'late') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-3";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_nl' && position.value === 'blind') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-5";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'huge_stack' && (raisers.value === 'early' || raisers.value === 'middle')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-2";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'huge_stack' && raisers.value === 'late') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-3";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'huge_stack' && (raisers.value === 'small-blind' || raisers.value === 'big-blind')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-4";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'medium_stack' && raisers.value === 'unraised_nl' && position.value === 'early') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-5";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'medium_stack' && raisers.value === 'unraised_nl' && position.value === 'middle') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-7";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group6.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'medium_stack' && raisers.value === 'unraised_nl' && (position.value === 'late' || position.value === 'blind')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-8";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group6.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
    group8.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'medium_stack' && raisers.value === 'early' ) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-3";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'medium_stack' && (raisers.value === 'blind' || raisers.value === 'middle' || raisers.value === 'late')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-5 and 7";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'small_stack' && raisers.value === 'unraised_nl' && position.value === 'early') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-7";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group6.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'small_stack' && raisers.value === 'unraised_nl' && position.value === 'middle') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-8";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group6.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
    group8.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'small_stack' && raisers.value === 'unraised_nl' && (position.value === 'late' || position.value === 'blind')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-10";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group6.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
    group8.classList.remove("hand_groupings");
    group9.classList.remove("hand_groupings");
    group10.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'small_stack' && raisers.value === 'early') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-5";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
  }

  if (stackSize.value === 'small_stack' && raisers.value === 'middle') {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-5 and 7";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
  }

  
  if (stackSize.value === 'small_stack' && (raisers.value === 'late' || raisers.value === 'small-blind' || raisers.value === 'big-blind')) {
    addClassToChildren();
    strategy.innerHTML = "Move in with groups 1-5,7 and 8";
    group1.classList.remove("hand_groupings");
    group2.classList.remove("hand_groupings");
    group3.classList.remove("hand_groupings");
    group4.classList.remove("hand_groupings");
    group5.classList.remove("hand_groupings");
    group7.classList.remove("hand_groupings");
    group8.classList.remove("hand_groupings");
  }

  


  // if (stackSize.value === 'huge_stack' && raisers.value === 'unraised_nl') {
  //   groupings.innerHTML = group1.innerHTML;
  //   strategy.innerHTML = noLimpers.innerHTML;
  // }

  // if (stackSize.value === 'huge_stack' && raisers.value === 'single_raiser') {
  //   groupings.innerHTML = group1.innerHTML;
  //   strategy.innerHTML = singelRaiser.innerHTML;
  // }

  // if (stackSize.value === 'huge_stack' && raisers.value === 'multiple_raisers') {
  //   groupings.innerHTML = group1.innerHTML;
  //   strategy.innerHTML = multipleRaisers.innerHTML;
    
  // }


  //big stack
  // if (stackSize.value === 'big_stack' && position.value === 'early' && raisers.value === 'unraised_l') {
  //   groupings.innerHTML = group1.innerHTML;
  //   strategy.innerHTML = limpers.innerHTML;
  // }

  // if (stackSize.value === 'big_stack' && position.value === 'early' && raisers.value === 'unraised_nl') {
  //   groupings.innerHTML = group1.innerHTML;
  //   strategy.innerHTML = noLimpers.innerHTML;
  // }

  // if (stackSize.value === 'big_stack' && position.value === 'middle') {
  //   const group1 = document.getElementById('group1');
  //   const group2 = document.getElementById('group2');
  //   groupings.innerHTML = group1.innerHTML + `<br></br>` + group2.innerHTML;
  // }
}

updateCsi()
updateStrategy()