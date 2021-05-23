FROM python:3.7
RUN python3 -m venv /opt/venv
RUN mkdir pipeline
COPY requirements.txt .
RUN /opt/venv/bin/pip install -r requirements.txt
COPY pipeline/model/model.py /pipeline/model/model.py
COPY pipeline/preprocessing/preprocessing.py /pipeline/preprocessing/preprocessing.py.py
COPY pipeline/utils/utils.py /pipeline/utils/utils.py
WORKDIR .
CMD ["/opt/venv/bin/python", "pipeline/model/model.py"]
