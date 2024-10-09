# Usa la imagen oficial de Cypress
FROM cypress/included:13.0.0

# Copia el script entrypoint.sh dentro del contenedor
COPY entrypoint.sh /entrypoint.sh

# Da permisos de ejecución al script
RUN chmod +x /entrypoint.sh

# Define el directorio de trabajo
WORKDIR /e2e

# Comando por defecto que se ejecuta cuando se levanta el contenedor
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]
