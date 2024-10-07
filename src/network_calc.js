class NetworkCalc {
	constructor() {
		this.api = "https://networkcalc.com/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	}

	async calculateSubnet(ipAddress, binary = true, fields = "network_address,broadcast_address") {
		const response = await fetch(
			`${this.api}/ip/${ipAddress}/27?binary=${binary}&fields=[${fields}]`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async convertBinary(binary, convertFrom, convertTo) {
		const response = await fetch(
			`${this.api}/binary/${binary}?from=${convertFrom}&to=${convertTo}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getWebSiteCertificate(hostName) {
		const response = await fetch(
			`${this.api}/security/certificate/${hostName}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDnsRecords(hostName) {
		const response = await fetch(
			`${this.api}/dns/lookup/${hostName}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getWhoIsRegistration(hostName) {
		const response = await fetch(
			`${this.api}/dns/whois/${hostName}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSpfRecord(hostName) {
		const response = await fetch(
			`${this.api}/dns/spf/${hostName}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async encodeValue(value) {
		const response = await fetch(
			`${this.api}/api/encoder/${value}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async decodeValue(value, encoding) {
		const response = await fetch(
			`${this.api}/api/encoder/${value}?encoding=${encoding}&decode=True`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {NetworkCalc}
