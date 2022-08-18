/* Regex validate PIN code 7kyu

https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript

DESCRIPTION:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
        return /^[0-9]+$/.test(pin);
    } else {
        return false
    }
}