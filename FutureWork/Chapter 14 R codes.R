##################################14.2#############################################
library(insuranceData)
data(dataCar)

#a
cor(dataCar$exposure,  dataCar$numclaims, method = c("pearson"))
cor(dataCar$exposure,  dataCar$numclaims, method = c( "kendall"))
cor(dataCar$exposure,  dataCar$numclaims, method = c("spearman"))

#b
cor(dataCar$exposure,  dataCar$numclaims*2, method = c("pearson"))
cor(dataCar$exposure,  dataCar$numclaims*2, method = c( "kendall"))
cor(dataCar$exposure,  dataCar$numclaims*2, method = c("spearman"))

cor(log(dataCar$exposure),  dataCar$numclaims, method = c("pearson"))
cor(log(dataCar$exposure),  dataCar$numclaims, method = c( "kendall"))
cor(log(dataCar$exposure),  dataCar$numclaims, method = c("spearman"))

#c
library(epitools)

oddsratio(dataCar$clm, dataCar$gender,method = c("wald"))$measure

#d
library(MASS)
table = table(dataCar$clm, dataCar$area)
chisq.test(table)

library(Deducer)
likelihood.test(dataCar$clm, dataCar$area)

#e 
library(psych)
tab <- table(dataCar$clm,dataCar$agecat)
rhoN<-polychoric(tab,correct=FALSE)$rho
round(rhoN,2)

#f
rhoN<-biserial(dataCar$clm,dataCar$claimcst0)
round(rhoN,2)


##################################14.4#############################################

#1
library(MASS)
library(copula)
data(loss)
Lossdata <- loss 
attach(Lossdata)
loss <- Lossdata$loss

fitalae = fitdistr(alae,"log-normal")
fitloss = fitdistr(loss, "lognormal")

#2
uloss=plnorm(loss,meanlog = fitloss$estimate[1],sdlog=fitloss$estimate[2])
ualae=plnorm(alae,meanlog = fitalae$estimate[1],sdlog=fitalae$estimate[2])
hist(uloss, main = "", xlab = "Histogram of Transformed loss")
hist(ualae, main = "", xlab = "Histogram of Transformed alae")

#3
normloss=qnorm(uloss)
normalae=qnorm(ualae)
hist(normloss, main = "", xlab = "Histogram of qnorm(loss)")
hist(normalae, main = "", xlab = "Histogram of qnorm(alae)")

#4
par(mfrow = c(1, 2))
plot(uloss, ualae, cex = 0.5, xlim = c(-0.1,1.1), ylim = c(-0.1,1.1), xlab = "Transformed loss", ylab = "Transformed alae")
plot(normloss, normalae)
cor(uloss, ualae, method = "spearman")

#5
uu = cbind(uloss,ualae) 
frank.cop <- archmCopula("frank", param= c(5), dim = 2)
fit.ml <- fitCopula(frank.cop, uu, method="ml", start=c(0.4))
summary(fit.ml)

param = fit.ml@estimate
frank.cop <- archmCopula("frank", param= param, dim = 2)
rho(frank.cop) 

#6
gumbel.cop <- archmCopula("gumbel", param= c(5), dim = 2)
fit.ml <- fitCopula(gumbel.cop, uu, method="ml", start=c(0.4))
summary(fit.ml)

param = fit.ml@estimate
gumbel.cop <- archmCopula("gumbel", param= param, dim = 2)
rho(gumbel.cop) 

