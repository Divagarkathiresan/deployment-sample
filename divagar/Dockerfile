# FROM openjdk:17-jdk-alpine

# WORKDIR /app

# COPY target/divagar-0.0.1-SNAPSHOT.jar app.jar

# EXPOSE 8080

# CMD ["java", "-jar", "app.jar"]



# Use a lightweight JDK image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the project files
COPY . .

# Build the Spring Boot app
RUN ./mvnw clean package -DskipTests

# Expose port 8080
EXPOSE 8080

# Run the Spring Boot jar
CMD ["java", "-jar", "target/divagar-0.0.1-SNAPSHOT.jar"]
