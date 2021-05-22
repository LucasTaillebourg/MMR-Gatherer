properties([pipelineTriggers([githubPush()])])
 
pipeline {
    agent any
    stages {
        stage('Rebuild du front') {
            steps {               
                sh 'docker build $PWD/mmr-front-end/'
            }
        }
        stage('Rebuild du back') {
            steps {               
                sh 'docker build $PWD/mmr-back-end/'
            }
        }
        stage('Restart des container') {
            steps {               
                sh 'docker-compose up --force-recreate'
            }
        }
    }
}