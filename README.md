# SiteNatureza

## Tecnologias Utilizadas

HTML5: Estrutura da aplicação web.

CSS3: Estilização e layout responsivo.

JavaScript: Funcionalidades e interatividade.

GitHub Actions: Automação de CI/CD.

GitHub Pages: Hospedagem automatizada do site.

## Fluxo de CI/CD (GitHub Actions)

O projeto possui uma pipeline automatizada configurada no arquivo .github/workflows/ci-cd.yml com as seguintes etapas:

Integração Contínua (CI):

Executada a cada push ou pull_request na branch main.

Realiza a verificação da presença de arquivos essenciais (index.html) e valida a sintaxe dos scripts JavaScript.

Entrega/Implantação Contínua (CD):

Executada automaticamente após a aprovação da etapa de CI apenas na branch main.

Gera o artefato do projeto e realiza o deploy no GitHub Pages.

## Como executar localmente

Clone o repositório:

git clone https://github.com/CauaSilva28/SiteNatureza.git


Acesse a pasta do projeto:

cd SiteNatureza


Abra o arquivo index.html em qualquer navegador web.

## Deploy da Aplicação

O site publicado e atualizado automaticamente pode ser acessado através do link do GitHub Pages configurado no repositório.