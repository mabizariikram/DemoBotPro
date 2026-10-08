pipeline {
    agent any

    parameters {
        booleanParam(
            name: 'ALLURE',
            defaultValue: false,
            description: 'Generate Allure report after execution'
        )
    }

    stages {
        stage('Global stage') {
            agent {
                docker {
                    image 'cypress/included:14.5.4'
                    args '-u root --entrypoint='
                }
            }

            stages {
                stage('Install dependencies') {
                    steps {
                        sh 'npm ci'
                    }
                }

                stage('Clean Allure results') {
                    steps {
                        sh '''
                            echo "Cleaning Allure artifacts..."
                            rm -rf allure-results allure-report
                            mkdir -p allure-results
                            echo "Allure artifacts cleaned successfully"
                        '''
                    }
                }

                stage('Run Cypress tests') {
                    steps {
                        script {
                            try {
                                if (params.ALLURE) {
                                    sh 'npx cypress run --env allure=true'
                                } else {
                                    sh 'npx cypress run'
                                }
                            } finally {
                                if (params.ALLURE) {
                                    sh 'npx allure generate allure-results --clean -o allure-report || true'
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                if (params.ALLURE) {
                    archiveArtifacts artifacts: 'allure-results/**,allure-report/**,cypress/screenshots/**,cypress/videos/**', allowEmptyArchive: true
                    allure includeProperties: false,
                        jdk: '',
                        results: [[path: 'allure-results']]
                }
            }
        }
    }
}