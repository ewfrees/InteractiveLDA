######################Section 3 question 8################################

# For the gamma distributions, use
alpha1 <- 2;      theta1 <- 100
alpha2 <- 2;      theta2 <- 200
# For the Pareto distributions, use
alpha3 <- 2;      theta3 <- 1000
alpha4 <- 3;      theta4 <- 2000
# Limits
M1     <- 100
M2     <- 200
c1 <- 0.3
c2 <- 0.2

# Simulate the risks
nSim <- 10000  #number of simulations
set.seed(2017) #set seed to reproduce work 
X1 <- rgamma(nSim,alpha1,scale = theta1)  
X2 <- rgamma(nSim,alpha2,scale = theta2)  
# For the Pareto Distribution, use
library(actuar)
X3 <- rpareto(nSim,scale=theta3,shape=alpha3)
X4 <- rpareto(nSim,scale=theta4,shape=alpha4)
# Portfolio Risks
X         <- X1 + X2 + X3 + X4
Yretained <- pmin(X1,M1) + pmin(X2,M2) + c1*X3 + c2*X4
Yinsurer  <- X - Yretained

#a
# Expected Claim Amounts
ExpVec <- t(as.matrix(c(mean(Yretained),mean(Yinsurer),mean(X))))
colnames(ExpVec) <- c("Retained", "Insurer","Total")
round(ExpVec,digits=2)

#b
# Quantiles
quantMat <- rbind(
  quantile(Yretained, probs=c(0.80, 0.90, 0.95, 0.99)),
  quantile(Yinsurer,  probs=c(0.80, 0.90, 0.95, 0.99)),
  quantile(X       ,  probs=c(0.80, 0.90, 0.95, 0.99)))
rownames(quantMat) <- c("Retained", "Insurer","Total")
round(quantMat,digits=2)

#c
par(mfrow=c(1,3))
plot(density(Yretained), main="Retained Portfolio Risk", xlab="Loss (Note the different horizontal scale)", ylab = "Density (Note different vertical scale)")
plot(density(Yinsurer), xlim=c(0,15000), main="Insurer Portfolio Risk", xlab="Loss")
plot(density(X), xlim=c(0,15000), main="Total Portfolio Risk", xlab="Loss")