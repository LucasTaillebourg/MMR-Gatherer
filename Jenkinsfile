properties([pipelineTriggers([githubPush()])])
 
pipeline {
    agent any
    stages {
        stage('Restart des container') {
            steps {               
                sh 'docker-compose up -d --build --force-recreate'
            }
        }
    }
}