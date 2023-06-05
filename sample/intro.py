print("Hello, please type in your name:\n");
name = input();

print(f"The name you have entered is {name}");

string = "Hello World";
print(string);

tupple = ('This', 'is', 'a', 'tupple', 1, 2, 3);

print(tupple);

lis = ['this', 'is', 'a', 'list', 1, 2, 3];
print(lis);
# getName();
if len(lis) > 0:
	print('list length is greater than 0');
elif len(lis) < 0:
	print('nothing in list')

if len(tupple) > 0:
	print('tupple length is greater than 0')

s = set();

s.add('set');
s.add('is another');
s.add('data type');
s.add('where each');
s.add('value in the set');
s.add('is unique');
s.add(1);
s.add(2);
s.add(2);
s.add('adding the same value twice such as 2 will not change the length of set')

print(s)

obj = {"t1": "this is a", "t2": " dictionary data type"}
obj['t3'] = 'It is similar to Objects in JS. There is bracket notation'
obj["t4"] = 777

print(obj)
print(obj['t4'])

def getName():
	print('Please enter your name function');
	name2 = input();
	printName(name2);
	return name2

def printName(name):
	print('Get name from getName function here: {}'.format(getName)) #Python 2.7 sysntax (format())
	print('The name that was entered is {}'.format(name)) 

getName();
# print('Name 1 {} Name 2 {}'.format(name, name2))
# name2 is undfined since it is only in the scope of getName() function

class Printer:
	def __init__(self, name):
		self.name = name

className = Printer('Elena')
print(f'Class Name is: {className.name}')



