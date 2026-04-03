# Cloud-Native CI/CD Template

Универсальный параметризованный CI/CD pipeline для веб-сервисов (frontend + backend) с использованием GitHub Actions, Docker, Kubernetes и Helm.

---

## 🚀 Обзор

Проект представляет собой шаблон DevOps-инфраструктуры, позволяющий автоматизировать:

- Сборку и тестирование
- Контейнеризацию (Docker)
- Деплой в Kubernetes (Helm)
- Деплой через SSH
- Откат и удаление релиза

Основная цель — **стандартизация релизного процесса**.

---

## 🧠 Основные возможности

- Переиспользуемые GitHub Actions
- Параметризованный pipeline
- Helm-деплой в Kubernetes
- SSH-деплой (Docker)
- Поддержка rollback
- Поддержка dev/prod
- Многоуровневые values-файлы

---

## 🏗 Архитектура

### Репозиторий шаблонов
Содержит:
- workflow
- Helm chart

### Репозитории сервисов
Содержат:
- код
- Dockerfile
- values
- lightweight workflow

---

## 🔄 CI/CD процесс

1. Push в main/develop
2. Сборка образа
3. Публикация в registry
4. Деплой (K8s или SSH)
5. Проверка
6. Rollback при необходимости

---

## 📁 Структура

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