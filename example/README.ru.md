# Примеры проектов (Example)

Данная директория содержит два демонстрационных сервиса, предназначенных для иллюстрации использования шаблонного репозитория **cloud-native-cicd-template** в реальных проектах.

Примеры специально сделаны **обезличенными** и не содержат:
- реальных доменов
- названий проектов
- секретов
- инфраструктурно-зависимых значений

---

## 📁 Структура

```text
example/
  backend-service/
  frontend-service/
```

---

## 📦 Описание сервисов

### backend-service

Минимальный пример backend-сервиса, включающий:

- Dockerfile
- Helm values файлы
- lightweight workflow-обертки:
    - deploy
    - rollback
    - uninstall

Особенности:
- runtime-конфигурация через Helm values
- поддержка health-check endpoints
- поддержка Kubernetes probes (readiness / liveness)

---

### frontend-service

Минимальный пример frontend-сервиса, включающий:

- Dockerfile
- простую сборку статического приложения
- Helm values файлы
- lightweight workflow-обертки:
    - deploy
    - rollback
    - uninstall

Особенности:
- build-time конфигурация через Docker build args
- генерация конфигурации на этапе сборки
- использование переменных окружения (`NEXT_PUBLIC_*`)

---

## 🎯 Назначение примеров

Примеры предназначены для демонстрации:

- подключения сервисного репозитория к reusable CI/CD workflow
- организации конфигурации через Helm values
- стандартизации процесса деплоя
- разделения ответственности:
    - шаблон → логика pipeline
    - сервис → конфигурация

⚠️ Важно:  
Примеры **не являются production-ready приложениями** и используются исключительно как reference implementation.

---

## ⚙️ Как устроены примеры

Каждый сервис содержит три ключевых слоя.

### 1. Код приложения

Минимальная реализация сервиса:

- backend → Node.js + Express
- frontend → статическое приложение + сервер

Также включает:
- Dockerfile
- базовую структуру проекта

---

### 2. Конфигурация деплоя

Директория:

```text
deploy/
```

Содержит многослойную конфигурацию Helm:

- `values.yaml` — базовая конфигурация
- `values-dev.yaml` — настройки для development
- `values-prod.yaml` — настройки для production

---

### 3. Workflow-обертки

Директория:

```text
.github/workflows/
```

Содержит workflow:

- deploy.yml
- rollback.yml
- uninstall.yml

---

## 🔗 Модель интеграции

### Шаблонный репозиторий

Содержит:
- reusable GitHub Actions workflows
- Helm chart

### Репозиторий сервиса

Содержит:
- код приложения
- Dockerfile
- values-файлы
- workflow-обертки

---

## 🔧 Использование

```yaml
jobs:
  deploy:
    uses: RADOSTb24/cloud-native-cicd-template/.github/workflows/deploy-web-service.yml@v1
```

---

## ⚙️ Основные параметры

| Параметр | Описание |
|----------|----------|
| component_name | Имя сервиса |
| deploy_mode | ssh / kubernetes |
| image_name | Docker-образ |
| release_name | Helm release |
| namespace_prod | Production namespace |
| namespace_dev | Development namespace |
| values_files | Helm values |
| build_args | Docker build аргументы |

---

## 🔐 Необходимые secrets

- GHCR_USERNAME
- GHCR_PAT
- TEMPLATES_REPO_TOKEN
- CLOUDFLEET_ACCESS_TOKEN_ID
- CLOUDFLEET_ACCESS_TOKEN_SECRET
- CLOUDFLEET_ORGANIZATION_ID
- CLOUDFLEET_CLUSTER_ID

Frontend (опционально):
- NEXT_PUBLIC_GOOGLE_CLIENT_ID
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

---

## 🔄 Режимы деплоя

### Kubernetes
- Helm deployment
- namespace separation
- rollout verification

### SSH
- Docker deployment
- restart container

---

## 🔁 Rollback

```bash
helm rollback <release>
```

---

## ❌ Uninstall

```bash
helm uninstall <release>
```

```bash
docker rm -f <container>
```

---

## 🧠 DevOps подход

- reusable pipelines
- единая логика деплоя
- разделение:
    - template → логика
    - проект → конфигурация

---

## 🔧 Адаптация

1. Добавить свой код
2. Настроить values
3. Добавить secrets
4. Подключить workflow
5. Запустить pipeline

---

## 📌 Преимущества

- нет копипасты
- быстрое подключение
- надежные релизы
- масштабируемость
