from celery import Celery

app = Celery('base', broker='redis://localhost:6379/0')

@app.task
def add(x, y):
    return x + y