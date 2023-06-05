class Pi:
	def __init__(self, diameter):
		self.pi = 3.14159; 
		self.diameter = diameter;


	def calculate(self):
		print("Circumference is: {}".format(self.pi * self.diameter))

circle = Pi(7)
circle.calculate()
print(circle.diameter)
print(circle.pi)
