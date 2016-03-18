"use strict";

function numbers(num){
	console.log(num);
  if (num===10) return ;
  numbers(num+1);
}
numbers(1);




let categories  = [
	{ id: 'animals', "parent": null},
	{ id: 'mammals', "parent": 'animals'},
	{ id: 'cats', "parent": "mammals"},
	{ id: 'dogs', "parent": "mammals"},
	{ id: 'collie', "parent": "dogs"},
 	{ id: 'yorkie', "parent": "dogs"},
	{ id: 'persian', "parent": "cats"},
	{ id: 'siamese', "parent": "cats"},
];

let makeTree = (categories, parent) => {
	let node = {};
	//console.log(categories.filter(c => c.parent === parent));
	categories.filter(c => c.parent === parent)
	.forEach(c => node[c.id]= makeTree(categories, c.id));
	return node;

};

console.log(
	JSON.stringify(
			makeTree(categories, null), null, 2
	)
);
