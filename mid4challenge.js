function filterAnagrams(arr, target) {
    let word = target.split("").sort().join("")
    return arr.filter((item)=> item.split("").sort().join("") === word)
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']

function sortByMultipleCriteria(people) {
    let ageSort = people.sort((a,b)=> a.age - b.age)
    return ageSort.sort((a,b)=>a.name - b.name)
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

// function findSumOfTwo(numbers, target){
//     return numbers.filter((item, prev)=> item + prev === target)
// }
function findSumOfTwo(numbers, target){
    for(let i =0; i<numbers.length; i++){
        for(let j =i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return numbers[i], numbers[j]
            }
        }
    }
}
console.log(findSumOfTwo([5, 12, 3, 9, 1], 8))
console.log(findSumOfTwo([2, 4, 7, 11, 15], 9))