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
         stage('exicution') {
             steps {
                 sh 
                    cd /home/ubuntu/jenkins_demo/real-estate-management/frontend
                    sh 
                    npm install
                    npm run Build

             }
         }  
         
         stage('upload data') {
             steps {
                 sh 
                 aws s3 cp --recursive /home/ubuntu/jenkins_demo/real-estate-management/frontend/www s3://statichost24/ --region "ap-south-1"

                 
             }
         }         
         
         }
     }
}
