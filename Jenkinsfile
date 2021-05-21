properties([pipelineTriggers([githubPush()])])
 
pipeline {
    agent any
    stages {
        stage('Redeploiement des container') {
            steps {               
                sh 'docker-compose -p apache up -d --build'
            }
        }
    }
}