pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
        allure 'Allure'
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Browsers') {
             steps {
                bat 'npx playwright install --with-deps'
        }
}
        stage('Test') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            allure results: [[path: 'allure-results']]
        }
    }
}