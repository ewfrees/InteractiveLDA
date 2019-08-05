library(carData)
data(Anscombe)

#``
summary(Anscombe)

#2
Anscombescale = scale(Anscombe)

kmeans(Anscombescale,centers=5)

#3
hist(Anscombe$education)

fitdistr(Anscombe$education,"gamma")

#4
lm(Anscombe$income ~ Anscombe$education)