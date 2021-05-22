properties([pipelineTriggers([githubPush()])])
 
pipeline {
    agent any
    stages {
        stage('Redeploiement et build des container') {
            steps {               
                sh 'docker-compose up -d --build'
            }
        }
    }
}