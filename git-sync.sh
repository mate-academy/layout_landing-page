#!/bin/bash

echo "🔄 Sincronizando repositório com o GitHub..."

# Confere se está dentro de um repositório Git
if [ ! -d .git ]; then
  echo "❌ Este diretório não é um repositório Git."
  exit 1
fi

# Buscar atualizações do repositório remoto
echo "📥 Executando git fetch --all..."
git fetch --all

# Lista os branches disponíveis
echo "📋 Branches remotos disponíveis:"
git branch -r

# Sincronizar o branch master
if git show-ref --verify --quiet refs/remotes/origin/master; then
  echo "🌿 Atualizando o branch 'master'..."
  git checkout master 2>/dev/null || git checkout -b master origin/master
  git pull origin master
else
  echo "⚠️ Branch remoto 'master' não encontrado."
fi

# Sincronizar o branch develop
if git show-ref --verify --quiet refs/remotes/origin/develop; then
  echo "🌿 Atualizando o branch 'develop'..."
  git checkout develop 2>/dev/null || git checkout -b develop origin/develop
  git pull origin develop
else
  echo "⚠️ Branch remoto 'develop' não encontrado."
fi

echo "✅ Sincronização concluída!"
