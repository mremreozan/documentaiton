FROM python:3.7
# install numpy
COPY requirements.txt .
RUN pip install -r requirements.txt
# folder stucture creation
RUN mkdir /app
RUN mkdir /app/pipeline
RUN mkdir /app/docker
# Copy the App
COPY docker /app/docker
COPY pipeline /app/pipeline
# set working directory
WORKDIR /app
# run command
CMD ["python", "pipeline/model/model.py"]