FROM ubuntu:latest
FROM python:3.7
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
# install numpy
COPY requirements.txt .
RUN pip install -r requirements.txt
# Copy the App
COPY app.py .
# set working directory
WORKDIR .
# run command
CMD ["python", "app.py"]







#FROM ubuntu:18.04
#FROM python:3.7

#RUN apt-get update -y 
#RUN apt-get install -y python-pip python-dev build-essential
#RUN pip3 install gunicorn


#RUN mkdir /app 
#COPY requirements.txt .
#COPY app.py /app/app.py
#COPY Datasets /app/Datasets
#COPY model /app/model
#COPY predict /app/predict
#COPY preprocessing /app/preprocessing

#RUN pip install -r requirements.txt

#WORKDIR /app

#CMD ["python", "app.py"]