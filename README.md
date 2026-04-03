# Cloud-Native CI/CD Template

A universal and parameterized CI/CD pipeline for web services (frontend + backend) using GitHub Actions, Docker, Kubernetes, and Helm.

---

## 🚀 Overview

This project provides a reusable DevOps template for automating the full release lifecycle of web services, including:

- Build and test
- Containerization (Docker)
- Deployment to Kubernetes (Helm)
- Deployment via SSH (Docker)
- Rollback and uninstall scenarios

The main goal is to **standardize the release process** and eliminate duplication across multiple projects.

---

## 🧠 Key Features

- Reusable GitHub Actions workflows
- Parameterized CI/CD pipeline
- Kubernetes deployment via Helm
- SSH deployment for VM environments
- Docker-based build pipeline
- Rollback support (Helm + Docker)
- Environment-based configuration (dev/prod)
- Multi-layered Helm values support

---

## 🏗 Architecture

### Template repository (`cloud-native-cicd-template`)

Contains:
- reusable GitHub Actions workflows
- universal Helm chart

### Service repositories

Contain:
- application source code
- Dockerfile
- project-specific Helm values
- lightweight workflow wrappers

---

## 🔄 CI/CD Flow

1. Code push (`main` / `develop`)
2. Build Docker image
3. Push to container registry
4. Deploy:
    - Kubernetes (Helm)
    - or SSH (Docker run)
5. Verify deployment
6. Optional rollback / uninstall

---

## 📁 Repository Structure

```text
.github/workflows/
  deploy-web-service.yml
  rollback-web-service.yml
  uninstall-web-service.yml

helm/web-service/
  Chart.yaml
  values.yaml
  templates/
    _helpers.tpl
    configmap.yaml
    deployment.yaml
    hpa.yaml
    ingress.yaml
    secret.yaml
    service.yaml

example/
  backend-service/
  frontend-service/