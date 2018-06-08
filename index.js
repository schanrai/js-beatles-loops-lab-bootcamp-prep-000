musicians = ['John Lennon','Jimi Hendrix','Madonna'];
instruments = ['Guitar','Tambourine', 'Flute'];

function theBeatlesPlay (musicians,instruments){
  const array = [];
  for (let i=0; i< musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(facts){
  var newFacts = [];
  let i = 0;
  while (i<facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return newFacts;
}


function iLoveTheBeatles(number){
  var newArray = [];
  let i = 0;
  do {
    console.log("I love the Beatles!")
    i++
  }
  while (i < number);
  return newArray;
}
