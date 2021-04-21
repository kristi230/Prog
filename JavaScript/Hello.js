//! Összegzés tétele!:
var tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var osszeg = 0;
for (i = 0; i < tomb.length; i++)
    osszeg +=  tomb[i];

alert(osszeg);


//! Megszámolás tétele:
/*
var tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var szam = 0;

for (i = 0; i < tomb.length; i++)
    if (tomb[i] >= 5)
        szam++

alert(szam);
*/
//! Eldöntés tétele: 
/*
var tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var keresett = 100;

var i = 0;

while (i < tomb.length && tomb[i] != keresett)
    i++;
if (i < tomb.length)
    alert('van találat!');
else
    alert('nincs találat!');
*/
//! Kiválasztás Tétele!: 
/*
var tomb = [1, 2, 5, 22, 33, 55, 23, 25, 50, 13, 85];
var kiv = 511;

var i = 0;

while (tomb[i] != kiv && i < tomb.length)
    i++

var eredmeny = 1 + 1;

alert(eredmeny);
*/
//! Keresés Tétele!
/*
var tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var keresett = 100;

var i = 0;
while (i < tomb.length && tomb[i] != keresett)
    i++;

if (i < tomb.length)
    alert('Helye: ' + (i + 1));
else
    alert('Nincs ilyen szám!');
*/
//! Kiválogatás Tétele!:
/* 
var tomb = [1, 2, 33, 44, 55, 77, 11, 31, 32, 4, 5, 6, 7];
var tomb2 = [];

var j = 0;

for (i = 0; i < tomb.length; i++)
    if (tomb[i] >= 5)
        tomb2[j++] = tomb[i];

for (i = 0; i < tomb2.length; i++)
    alert(tomb2[i]);

*/
//! Szétválogatás!
/*
var list1 = [1, 2, 3, 4, 5, 66, 22, 23, 24, 54, 12, 42, 13, 56, 6, 7, 8];
var list2 = [];
var list3 = [];

var j = 0;
var k = 0;

for (i = 0; i < list1.length; i++)
    if (list1[i] > 6)
        list2[j++] = list1[i];
    else
        list3[k++] = list1[i];

//*Ellenörzés:

alert(Lista(list1));
alert(Lista(list2));
alert(Lista(list3));

function Lista(list) {
    var toReturn = '';
    for (i = 0; i < list.length; i++)
        toReturn += list[i] + '\n';

    return toReturn;
}
*/
//! Minimum && Maximum :

//*Minumum:
/*
var tomb = [1, 22, 23, 24, 25, 26, 0, 42];
var min = tomb[0];

for (i = 0; i < tomb.length; i++){
    if (tomb[i] < min)
        min = tomb[i];
}

alert(min);
*/
//*Maximum : 
/*
var tomb = [10, 12, 13, 14, 15, 1, 22, 23];
var max = tomb[0];
for (i = 0; i < tomb.length; i++)
    if (tomb[i] > max)
        max = tomb[i];
alert(max);
*/
//! Metszet tétel! :
/*
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var list2 = [10, 11, 12, 13, 14, 15, 16, 7, 9, 18, 19];

var metszet = [];

var j;
var k = 0;

for (i = 0; i < list.length; i++){
    j = 0;

    while (j < list2.length && list2[j] != list[i])
        j++
    
    if (j < list.length)
        metszet[k++] = list[i];
}

alert(Lista(metszet));

function Lista(list) {
    var toReturn = '';
    for (i = 0; i < list.length; i++)
        toReturn += list[i] + '\n';
    
    return toReturn;
}
*/
//! Unio
/*
var list = [1, 2, 3, 4, 5, 6, 7, 8];
var list2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var listUnio = [];

for (i = 0; i < list.length; i++)
    listUnio[i] = list[i];

var k = list.length;

for (i = 0; i < list2.length; i++){
    var j = 0;

    while (j < list.length && list2[i] != list[j])
        j++
    if (j >= list.length)
        listUnio[k++] = list2[i];
}

alert(Lista(listUnio))

function Lista(list) {
    var toReturn = '';
    for (i = 0; i < list.length; i++)
        toReturn += list[i] + '\n';
    
    return toReturn;
}
*/

//! BUBORÉK 
/*

var tomb = [1, 5, 10, 111, 23, 40, 12, 2, 3, 4, 5, 6, 31, 64];

function BubbleSort(List) {
    var arr = List;

    for (i = 0; i < arr.length; i++)
        for (j = 0; j < arr.length; j++)
            if (arr[i] = arr[j]) {
                var tp = arr[i];
                arr[i] = arr[j];
                arr[j] = tp;
            }
    
    return arr;
}
var buble = BubbleSort(tomb);
for (i = 0; i < buble.length; i++)
    console.log(buble[i]);
 
/*
var tomb = [2,5,2,2,2,4,5,6,7,8,9,10,230,20,232,242,101,1231,123,156,2325,2532,2525,232];

function BubbleSort(array1)
{
    var newarr = array1
    for (i = 0; i < newarr.length; i++)
        for (j = 0; j < newarr.length; j++)
            if (newarr[i] < newarr[j])
            {
                var temp = newarr[i];
                newarr[i] = newarr[j];
                newarr[j] = temp;
            }
    return newarr;
}

var bbletest = BubbleSort(tomb);
for (i = 0; i < bbletest.length; i++)
    console.log(bbletest[i]);
*/