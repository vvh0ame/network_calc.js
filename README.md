# network_calc.js
Web-API for [networkcalc.com](https://networkcalc.com) free online network calculators and APIs for home and corporate networking, presented simple

## Example
```JavaScript
async function main() {
	const { NetworkCalc } = require("./network_calc.js")
	const networkCalc = new NetworkCalc()
	const dnsRecords = await networkCalc.getDnsRecords("hostName")
	console.log(dnsRecords)
}

main()
```
