import re
from reg import OR_RGXS, URIS

uriInput = 'https://eur-de.orders.sp.com';

print('\nORIGIN {} \n'.format(OR_RGXS))

if any(re.match(rex, uriInput) for rex in OR_RGXS):
	print('OK')
else:
	print('NOOOO')

# for rex in regx:
# 	if re.match(rex, uriInput):
# 		print('1111')
# if uriInput in uris:
# 	print('Yes')
# elif any(re.match(rex, uriInput) for rex in regx):
# 	print('REX {}'.format(rex))
# else:
# 	print('No')