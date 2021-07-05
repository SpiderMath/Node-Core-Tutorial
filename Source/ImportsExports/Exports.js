// Common.js Exports
function something() {
	console.log("Hi");
}

module.exports = {
	hi: something,
};

exports.hi = something;

// ES6 Exports
// Normal Exporting
// export { something };

// Default exporting
// export default something;