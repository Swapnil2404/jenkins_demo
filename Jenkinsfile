pipeline {
     agent any
     stages {
         stage('Build') {
             steps {
                 sh 'echo "Hello World"'
                 sh '''
                     echo "Multiline shell steps works too"
                     ls -lah
                 '''
             }
         }  
         stage('Create s3 bucket') {
             steps {
                withAWS(region:'ap-south-1',credentials:'task for practice') {
                 sh '''
                     aws s3 mb s3://miyami_s3
                 '''
                }
             }
         }        
         stage('Upload to AWS') {
              steps {
                  withAWS(region:'ap-south-1',credentials:'task for practice') {
                  sh 'echo "Uploading content with AWS creds"'
                      s3Upload(pathStyleAccessEnabled: true, payloadSigningEnabled: true, file:'motion_effect', bucket:'miyami_s3')
                  }
              }
         }
     }
}
