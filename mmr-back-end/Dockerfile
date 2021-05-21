FROM gradle:7.0.2-jdk11 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon 
RUN ls /home/gradle/src/build/libs/
FROM openjdk:11-jre-slim

RUN mkdir /app
COPY --from=build /home/gradle/src/build/libs/src-0.0.1-SNAPSHOT.jar /app/spring-boot-application.jar
RUN ls /app/
ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseContainerSupport", "-Djava.security.egd=file:/dev/./urandom","-jar","/app/spring-boot-application.jar"]
