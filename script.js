//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removehmm(str){
	let arr=[ "the","The","a","A","an","An"];
	return newstr.trim();
}
bands.sort((a,b) => removehmm(a) > removehmm(b) ? 1 : -1);
console.log(bands);