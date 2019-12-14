var createPolitician = function(name, partyColor){

    var politician = {}; // new blank object!
    politician.name = name; // set name property to the value of the name parameter
    politician.partyColor = partyColor;
    politician.electionResults = null;
    politician.totalVotes = 0;

    politician.tallyUpTotalVotes = function()
  {
    this.totalVotes = 0;
    for (var i = 0; i< this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
  };
      return politician;

  }



  // assign winner for each state
  var setStateResults = function(state){

    theStates[state].winner = null;

    if (roxie.electionResults[state] > frida.electionResults[state]) {

        theStates[state].winner = roxie; //set winner to the candidate object, not the candidate's name this time

    } else if (roxie.electionResults[state] < frida.electionResults[state]) {

        theStates[state].winner = frida;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11,32,57];
    }
    var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];

  row.children[0].innerText = roxie.name;
  row.children[1].innerText = roxie.totalVotes;
  row.children[2].innerText = frida.name;
  row.children[3].innerText = frida.totalVotes;
  row.children[5].innerText = winner;

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = roxie.name;
  candidate2Name.innerText = frida.name;

  candidate1Results.innerText = roxie.electionResults[state];
  candidate2Results.innerText = frida.electionResults[state];

  if (theStates[state].winner === null){
      winnersName.innerText = "DRAW";
  } else {
      winnersName.innerText = theStates[state].winner.name;
  }
  };

var roxie = createPolitician("Roxie Roo",[132, 17, 11]);
var frida = createPolitician("Frida Thecat", [245, 141, 136]);

roxie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

frida.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

roxie.electionResults[9] = 1;
frida.electionResults[9] = 28;

roxie.electionResults[4] = 17;
frida.electionResults[4] = 38;

roxie.electionResults[43] = 11;
frida.electionResults[43] = 27;

console.log(roxie.electionResults);
console.log(frida.electionResults);

roxie.tallyUpTotalVotes();
frida.tallyUpTotalVotes();

console.log(roxie.totalVotes);
console.log(frida.totalVotes);

var winner = "???";

if (roxie.totalVotes > frida.totalVotes){
    winner = roxie.name;
}else if (roxie.totalVotes < frida.totalVotes){
    winner = frida.name;
}else{
    winner = "DRAW."
}

console.log("AND THE WINNER IS..." + winner + "!!!");

console.log ("Roxie's color is:" + roxie.partyColor);
console.log ("Frida's color is:" + frida.partyColor);
