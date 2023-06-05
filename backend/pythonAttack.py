import os
import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.join(os.getcwd(), 'backend', 'views')),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)

class MainPage(webapp2.RequestHandler):
  def get(self):
    VIEW = os.path.join(os.getcwd(), 'backend', 'views')

		# url = 'python.gif'

		# template_values = {
		# 	'url': url
		# }

    template = JINJA_ENVIRONMENT.get_template('index.html')
		# self.response.write(template.render(template_values))
    self.response.write(template.render())


app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
