
# Introduction

A common issue we are facing from very young age is to learn to recognize cats and dogs. I am sure this brings you memories from a family member to point out to you a dog or a cat and repeatedly saying to you "This is a cat", "This is a dog". And guess what? You actually learnt how to seperate those two animals and you actually moved on by adding more animals in your list. And now you are here, knowing most of the animals and be able to identify them watching a documentary. This my fellow learner is you doing classification. 

![](assets/cat_vs_dog.gif)

## What is Classification?
But what is classification in AI field? Well, it a supervised learning method in which the computer learns from data given to it to either classify or make new observations. 

The data are playing a key role to this approach as they are to be categorized into classes. The termilogy for classes varies and you can find them under the name target, label or categories. As we are talking for supervised learning, it means that the targets are also provided with the input data.The type of data though isn't important, as this classification can be performed on both structured or unstructured data.


## Classification Algorithms
The most common use cases which can be identified as classification problems are speech recognition, document recognition, image recognition, etc. It can be binary classification problem or multi-class problem as well. There are a banch of algorithms to tackled these problems , with the most commonly used ones are [Logistic Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html), [Naive Bayes](https://scikit-learn.org/stable/modules/naive_bayes.html), [Support Vector Machines](https://scikit-learn.org/stable/modules/svm.html), [K-Nearest-Neighbor](https://scikit-learn.org/stable/modules/neighbors.html), [Random Forests](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html), [Decision Trees](https://scikit-learn.org/stable/modules/tree.html) and of course [Artificial Neural Networks.](https://www.investopedia.com/terms/a/artificial-neural-networks-ann.asp) 


Those algorithms are all useful and applicable, but how you can choose which works better each time? Here are some pros and cons for each one of them to have as a reference. 

|Algorithm            |Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|Logistic Regression|Simple and commonly used for two-class (binary) classification. Describes and estimates the relationship between one dependent binary variable and independent variables|<ul><li>Low computational power</li><li>Easy to implement </li><li>Less scaling of features </li> <li>Provides a probability score for observations </li></ul>| <ul><li>Handle large number of categorical features isn't easy</li><li>Overfitting is very common </li><li>Can't solve non-linear problems </li> <li>Bad performance with independent variables  </li></ul>           |   



|Algorithm        |Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|Naive Bayes |Statistical classification technique based on Bayes Theorem with an assumption of independence among predictors. One of the simplest supervised learning algorithms|<ul><li>Simple approach</li><li>It can efficiently work on a large dataset </li><li>It can be used with multiple class prediction problems</li> <li>It also performs well in the case of text analytics problems</li></ul>| <ul><li>Zero Probability is a common issue</li><li>The assumption of independent features </li><li>You can easily lost a lot of information </ul>           |   



|Algorithm               |Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|SVM |Relatively simple concept which separates data points using a hyperplane. Can be handy for both types of classification and  of course regression problems. | <li> Offers very high accuracy</li> <li> Performs faster prediction vs to Naive Bayes algorithm</li><li>Less memory usage</li></ul> | <ul><li>Not suitable for large datasets</li><li>Takes more time in training </li><li>Sensitive to the type of kernel</ul>   |   


|Algorithm               |Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|K-NN |Known as the simple and instance-based learning algorithm and it operates by checking the distance between values. It can give highly competitive results|<ul><li>Fast training</li><li>Useful with nonlinear data</li><li>It can be used with prediction & classification problems</li>| <ul><li>Cost time and memory in testing</li><li>Requires scaling of data</li> <li>Not suitable for large dimensional data</li> </ul>           |    


|Algorithm     |Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|Random Forests |It is a non-parametric and lazy learning algorithm and uses bagging and feature randomness when building a tree in order to create an uncorrelated forest. |<ul><li>Simple approach</li><li>It can efficiently work on a large dataset </li><li>It can be used with multiple class prediction problems</li> <li>It also performs well in the case of text analytics problems</li></ul>| <ul><li>Cost time and memory in testing</li><li>The assumption of independent features </li><li>You can easily lost a lot of information </ul>           |   


|Algorithm     | Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|Decision Trees |White box type of ML algorithm and shares internal decision-making logic like NN. Decision nodes and leaves are main entities.|<ul><li>Easy to interpret and visualize</li><li>Requires fewer data preprocessing </li><li>Can be used for feature engineering</li> <li>Has no assumptions</li></ul>| <ul><li>Sensitive to noisy data</li><li>Balance out the dataset is required</li> </ul>           |   



|Algorithm                | Short description                                  | Pros          | Cons       |   
|:-------------------:|:--------------------:                             |:---------------|:------------|
|ANN |Nonlinear and non-paramateric model that is easy to use. Artificial neurons are connected to other neurons with certain coefficients. |<ul><li>Storing information</li><li>Work with incomplete knowledge </li><li>Capable of parallel processing</li> <li>Fault tolerant</li></ul>| <ul><li>Requires processing power</li><li>Difficulty to identify where an error is </li><li>Needs more data</ul>           |   


## Classifier Evaluation
Despite which classification algorithm you will choose to solve your problem, a very important part with a key role is to check classifier's accuracy and efficiency. Same as in the algorithms, there are a lot of methods, but let's have a look in some of them: 
* **Metrics** : When you classify your data, you can't mesure the how good is you model just with a percentage of accuracy. if 98% if your testing set should be classify as 0 and you model predict always 0 you will be 98% accurate but your model will be bad right? To have a better understanding of how good is your model, here is some metrics that you should know about: [accuracy](https://developers.google.com/machine-learning/crash-course/classification/accuracy) where the keys are the True Positive (the number of correct predictions that are positive) and True Negative ( the number of correct predictions that is negative). [F1-Score](https://deepai.org/machine-learning-glossary-and-terms/f-score) where the keys are precision and recall. 
* **ROC Curve** : [This](https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc) method is used to compare the classification models you have built visually, so this gives you the chance to see clearly how the true positive and false positive are related. 
* **Confusion matrix:** Ok now you have an idea about how good your model is, you will want to know what is wrong? Where the model fails? If you know that the model only fail on a certain class, you will need to check why. Maybe there is not enough training data in this class? Maybe you miss-classified some rows in your training set?... To know that we use [confusion matrix](https://towardsdatascience.com/understanding-confusion-matrix-a9ad42dcfd62). This is the tool you will use to start your model's investigation each time. Make sure to well understand it! :) 


## Theoretical example
Let's assume you are a hospital's employee and you have a new patient with a pain in his chest, in his back and short breath. These symptoms leads to a heart disease. But can you be sure? The detection of it , as a developer, is a classification problem and more specific a binary classification as there are only 2 main options/classes, he has a heart disease or he doesn't. In this case the classifier needs data to be trained in order to be able to understand how the given input variables are related to these 2 classes. As soon as the classifier is trained, then you can use it to detect if the new patient suffers from heart diseace or not.


## Conclusion
Nowadays, the most used models are:
* Logistical regression if you predict a 0 or a 1 (binary classification)
* Random forest and XGboost are giving the best result most of the time for none binary classification.
* The evaluation can't be done just with a percentage of accuracy. You will mainly need **Recall, Precision, F1-score, Support and confusion matrix**.


**Enough** with the theory, let's dive into code. 
![](assets/go.gif)

### Useful Links
- https://serokell.io/blog/classification-algorithms
- https://machinelearningmastery.com/types-of-classification-in-machine-learning/
- https://dzone.com/articles/introduction-to-classification-algorithms
- https://www.simplilearn.com/classification-machine-learning-tutorial

