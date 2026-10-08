pipeline {

    agent any

    stages {

        stage('Tests') {

            agent {
                docker {
                    image 'cypress/included:14.5.4'
                    args '-u root --entrypoint='
                    reuseNode true
                }
            }

            steps {
                sh 'rm -rf allure-results allure-report'

                sh 'npm ci'

                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            allure([
                results: [[path: 'allure-results']]
            ])
        }
    }
}