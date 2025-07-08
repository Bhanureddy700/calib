//lexical 
function foo(a) {

	var b = a * 2;

	function bar(a,b,c) {
		console.log( a, b, c );
	}

	bar(a,b,b * 3);
}

foo( 2 );


//dynamicc
function hi(){
    hi1();

}
function hi1(){
    hi2();
}
function hi2(){
    console.log("you are here at h2");
}

hi()


console.log("this one is branching output")