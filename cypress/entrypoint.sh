#!/bin/sh
npm init -y
npm install cypress --save-dev
cypress run
#npx cypress open --project /e2e --browser chrome  # Esto abre Cypress en modo gráfico