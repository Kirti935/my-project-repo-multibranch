pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add your build commands here (e.g., Maven, Gradle, npm, etc.)
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands here (e.g., running unit tests)
            }
        }
        stage('Deploy') {
            when {
                branch 'main' // For example, only deploy from the 'main' branch
            }
            steps {
                echo 'Deploying to production...via main branch'
                // Add deploy commands here
            }
        }
    }
}

