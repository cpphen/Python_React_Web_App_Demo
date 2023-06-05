import re

SP_REG = re.compile(r'https://([a-zA-Z0-9-]+[.])*orders[.]sp[.]com')
URIS = ['https://orders.sp.com', 'https://([a-zA-Z0-9-]+[.])*orders[.]sp[.]com']
OR_RGXS = [
	SP_REG,
]