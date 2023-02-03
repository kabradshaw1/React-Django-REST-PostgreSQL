release: cd server 
release: python manage.py collectstatic
release: cd test4
web: gunicorn --chdir server server.wsgi --log-file -
