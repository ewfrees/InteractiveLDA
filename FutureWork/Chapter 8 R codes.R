library(insuranceData)
attach(dataCar)

#Set up rating factor categories and prepare for regression
VtypeF <- relevel(factor(veh_body),ref="SEDAN")
table(VtypeF)

VehAgeCatF = relevel(factor(veh_age), ref = "1")
table(VehAgeCatF)

SexF = relevel(factor(gender), ref = "F")
table(SexF)

areaF <- as.character(area)
areaF[ area!= "D"] <- "O"
areaF = relevel(factor(areaF), ref = "D")
table(areaF)

AgeCatF = relevel(factor(agecat), ref = "1")
table(AgeCatF)

# Poisson reg model
Pois_reg = glm(numclaims ~ VtypeF + VehAgeCatF + SexF + areaF + AgeCatF, 
                offset = exposure, poisson(link = log) )
summary(Pois_reg) 

# compute relativities
exp(Pois_reg$coefficients)

detach(SingaporeAuto)