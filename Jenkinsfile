pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // must match Jenkins tool name
        allure 'Allure'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Naveen1398/playwright-ci-cd-framework.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Allure Report') {
            steps {
                sh 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            allure results: [[path: 'allure-results']]
        }
    }
}