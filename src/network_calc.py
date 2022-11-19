from requests import get

class NetworkCalc:
	def __init__(self) -> None:
		self.api = "https://networkcalc.com/api"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
		}

	def calculate_subnet(
			self,
			ip_address: str,
			binary: bool = True,
			fields: str = "network_address,broadcast_address") -> dict:
		return get(
			f"{self.api}/ip/{ip_address}/27?binary={binary}&fields=[{fields}]",
			headers=self.headers).json()

	def convert_binary(
			self,
			binary: str,
			convert_from: int,
			convert_to: int) -> dict:
		return get(
			f"{self.api}/binary/{binary}?from={convert_from}&to={convert_to}",
			headers=self.headers).json()

	def get_website_certificate(self, hostname: str) -> dict:
		return get(
			f"{self.api}/security/certificate/{hostname}",
			headers=self.headers).json()

	def get_dns_records(self, hostname: str) -> dict:
		return get(
			f"{self.api}/dns/lookup/{hostname}",
			headers=self.headers).json()

	def get_whois_registration(self, hostname: str) -> dict:
		return get(
			f"{self.api}/dns/whois/{hostname}",
			headers=self.headers).json()

	def get_spf_record(self, hostname: str) -> dict:
		return get(
			f"{self.api}/dns/spf/{hostname}",
			headers=self.headers).json()

	def encode_value(self, value: str) -> dict:
		return get(
			f"{self.api}/api/encoder/{value}",
			headers=self.headers).json()

	def decode_value(self, encoding: str) -> dict:
		return get(
			f"{self.api}/api/encoder/{value}?encoding={encoding}&decode=True",
			headers=self.headers).json()
