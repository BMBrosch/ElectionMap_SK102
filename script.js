Working javascript

var callOutPolitician = function(Name, partyColor)
  {
    var politician = {};

    politician.name = Name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    politician.tallyUpTotalVotes = function()
      {
        this.totalVotes = 0;
        for (var i = 0; i < this.electionResults.length; i++)
        {
          this.totalVotes = this.totalVotes + this.electionResults[i];
        }

      };
    return politician;
  };

//state results

  var setStateResults = function(state) {
      theStates[state].winner = null;

  if (jennifer.electionResults[state] > paige.electionResults[state]) {
      theStates[state].winner = jennifer;

    } else {
      theStates[state].winner = paige;
      }

    var stateWinner = theStates[state].winner;
    if (stateWinner !=null) {
      theStates[state].rgbColor = stateWinner.partyColor;
     }
      else {
        theStates[state].rgbColor = [11, 32, 57];
      }
    // state table information
    var stateInfoTable = document.getElementById('stateResults');

    // variables for the table information
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName= header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var results1 = body.children[0].children[1];
    var name2= body.children[1].children[0];
    var results2 = body.children[1].children[1];
    var winnername= body.children[2].children[1];

    // populating the table information
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText= theStates[state].nameAbbrev;

    name1.innerText= jennifer.name;
    results1.innerText = jennifer.electionResults[state];

    name2.innerText = paige.name;
    results2.innerText = paige.electionResults[state];

    if (theStates[state].winner === null){
      winnerName.innerText=winner;
    } else {
          winnername.innerText = theStates[state].winner.name;
    }
};

var paige = callOutPolitician("Paige Ross", [245, 141, 136]);
var jennifer = callOutPolitician("Jennifer Wilhite", [132, 17, 11]);


jennifer.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

paige.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jennifer.electionResults[9] = 1;
paige.electionResults[9] = 28;

jennifer.electionResults[4] = 17;
paige.electionResults[4] = 38;

jennifer.electionResults[43] = 11;
paige.electionResults[43] = 27;

// update election results
console.log(jennifer.electionResults);
console.log(paige.electionResults);


//console log total votes
jennifer.tallyUpTotalVotes();
paige.tallyUpTotalVotes();

console.log(jennifer.totalVotes);
console.log(paige.totalVotes);

var winner = "???";

  if (jennifer.totalVotes > paige.totalVotes){
    winner = jennifer.name;
  }
  else if (jennifer.totalVotes < paige.totalVotes){
    winner = paige.name;
  }
  else{
    winner = "DRAW!"
  }

console.log("AND THE WINNER IS..." + winner + "!!!");
console.log("Jennifer's color is: " + jennifer.partyColor);
console.log("Paige's color is: " + paige.partyColor);

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

//Static Top Table
row.children[0].innerText = jennifer.name;
row.children[1].innerText = jennifer.totalVotes;
row.children[2].innerText = paige.name;
row.children[3].innerText = paige.totalVotes;
row.children[5].innerText = winner;

