
## Dogs vs. Cats
In this competition, you'll write an algorithm to classify whether images contain either a dog or a cat.  This is easy for humans, dogs, and cats. Your computer will find it a bit more difficult.


![](https://storage.googleapis.com/kaggle-competitions/kaggle/3362/media/woof_meow.jpg)

Deep Blue beat Kasparov at chess in 1997.  
Watson beat the brightest trivia minds at Jeopardy in 2011.  
Can you tell Fido from Mittens in 2013?  


## Your task:

1. Train your algorithm on these files and predict the labels (1 = dog, 0 = cat).
2. Deploy your model in herroku ! The user must have the possibility to upload a photo to test the model.

##  Dataset 
````
./dataset/
----> training_set/
--------> dog/
               image1
               image2
               .
               .
--------> cat/
               image1
               image2
               .
               .
----> test_set/
--------> dog/
               image1
               image2
               .
               .
--------> cat/
               image1
               image2
               .
           .
````

To load the dataset uses ImageDataGenerator : 
https://keras.io/preprocessing/image/


```python

```
