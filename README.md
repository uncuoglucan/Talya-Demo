# Talya Demo


##  Installation
Clone the repository to get started with the project on your local machine.

```bash
git clone https://github.com/uncuoglucan/Talya-Demo.git
```

##  NPM Scripts
These are pre-configured npm scripts for starting the app and managing Docker.

```python
start: "node index.js",

// Docker Commands
docker:build: "docker build -t canuncu/talya-demo .",
docker:run: "docker run -p 3000:3000 talya-demo",
docker:push: "docker push canuncu/talya-demo",
docker:stop: "docker stop $(docker ps -q --filter ancestor=talya-demo)"
```

To run any of the above commands:

```bash
npm run <script-name>
```

### Docker Usage
Use these commands to build, run, push, and stop the Docker container.

```bash
docker build -t canuncu/talya-demo .
docker run -p 3000:3000 talya-demo
docker push canuncu/talya-demo
docker stop $(docker ps -q --filter ancestor=talya-demo)
```

## Kubernetes Deployment
This section covers how to deploy the application on a Kubernetes cluster.

### Deployment
Apply the Kubernetes deployment configuration.

```bash
kubectl apply -f deployment.yaml
```

### Service
Create a Kubernetes service to expose the application.

```bash
kubectl apply -f service.yaml
```

### Access the Application
Use Minikube to access the deployed service locally.

```bash
minikube service talya-demo
```
 
## "/status" Endpoint Response

This endpoint returns system details in JSON format.

### Example Response

```json
{
   "hostname": "talya-demo-859595bddb-44h4d",
   "platform": "linux",
   "arch": "arm64",
   "cpu_cores": 8,
   "cpu_model": "unknown",
   "total_memory_mb": "7837.60",
   "free_memory_mb": "6292.38",
   "user_info": {
      "uid": 0,
      "gid": 0,
      "username": "root",
      "homedir": "/root",
      "shell": "/bin/bash"
   }
}
```
