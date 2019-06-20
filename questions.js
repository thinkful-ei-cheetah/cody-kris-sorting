'use strict';
const sort = require('./sortMethods');
const LL = require('../Kristof-Jonathan-DSA-LinkedList/link')

//Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// What are the first 2 lists to be merged?
// Which two lists would be merged on the 7th merge?

// 1)  21, 1
// 2) 1, 2, 9, 21, 26, 28, 29, 45, 16, 49, 39, 27, 43, 34, 46, 40
// 3) 21, 1, 26, 45
// 4) [ 1, 2, 9, 21, 26, 28, 29, 45 ]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.


// The pivot could have been either 14 or 17 
  //With the current status of the array, everything to left is smaller than 14 or 17 and everything to the right is bigger.

  
// 2) Given the following list of numbers show the resulting list after the second partitioning according to the quicksort algorithm.

//1) 3, 10, 9, 12
//2) 3, 9, 13, 12,  10








const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

//Question 3
const arrData = data.split(' ').map(item => Number(item));
//console.log(sort.quickSort(arrData));

//Question 4
//console.log(sort.mergeSort(arrData));

//Question 5
const ll = new LL();
const ll2 = new LL();

arrData.forEach(item => ll.insertFirst(item));
//starting point

function sortLinkedList(LL){
  const allItems = [];

  let tempNode = ll.head;
  while(tempNode.next !== null){
    allItems.push(tempNode.value);
    tempNode = tempNode.next;
  }
  allItems.push(tempNode.value);
  const newArr = sort.mergeSort(allItems);

  newArr.forEach(item => ll2.insertLast(item));
  console.log(ll2)
}

sortLinkedList(ll);

 3, 1 7, 5, 10

 1,45,7,5,10, 20, 18, 4