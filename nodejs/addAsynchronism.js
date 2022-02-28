function c() {
	// The next line is to run asynchonously
	setTimeout(() => {console.log('c')}, 1000);
	return;
}

function b() {
	console.log('b');
	return c();
}

function a() {
	b();
	console.log('a');
	return;
}

a();
