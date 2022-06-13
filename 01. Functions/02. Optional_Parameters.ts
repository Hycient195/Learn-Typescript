/*=====================================================================*/
/* Functions, Optional Parameters and Default parameters in Typescript */
/*=====================================================================*/
type util = Record<string, number[]>

/** Optional Parameter */
const addString  = (str1: string, str2?: util ):string =>{
  return `${str1} ${str2}`;
}
console.log(addString("hello", {"hello": [23, 34]})) // Using 1 argument is allowed because of specifed optional argument



/** Default Parameter */
const addNumber = (num1: number, num2: number = 0):number =>{
  return num1 + num2;
}





/** Function with rest input parameters */
const restful = (compulsory: string, ...others:string[]):string =>{
  return `${compulsory} ${others.join(" ")}`;
}
console.log(restful("Welcome", "to", "Miami", "Carl"));