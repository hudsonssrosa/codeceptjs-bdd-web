# Download Playwright and its dependencies
# FROM ubuntu:latest
FROM codeceptjs/codeceptjs


ENV TAG ''
ENV CROSSBROWSER ''

# Installing JAVA
# ARG JAVA_VERSION=11
# ARG JAVA_RELEASE=JDK

RUN mkdir -p /usr/share/man/man1
# RUN bash -c ' \
#     set -euxo pipefail && \
#     apt-get update && \
#     pkg="openjdk-$JAVA_VERSION"; \
#     if [ "$JAVA_RELEASE" = "JDK" ]; then \
#     pkg="$pkg-jdk-headless"; \
#     else \
#     pkg="$pkg-jre-headless"; \
#     fi; \
#     apt-get install -y --no-install-recommends "$pkg" && \
#     apt-get -y install gcc && \
#     apt-get clean'


RUN bash -c ' \
    apt-get update \
    && apt-get -y install curl \
    && apt install nodejs \
    && apt install npm;'
    # && sudo dpkg -r nodejs \
    # && sudo apt-get install nodejs-legacy \
    # && curl -sL https://deb.nodesource.com/node_14.x bionic Release \

# Install OpenJDK-8
RUN bash -c ' \
    apt-get install ca-certificates \
    && apt-get install -y openjdk-8-jdk \
    && apt-get install -y ant \
    && apt-get clean;'

# Fix certificate issues
RUN bash -c ' \
    apt-get install ca-certificates-java \
    && apt-get clean \
    && update-ca-certificates -f;'

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

ENV JAVA_HOME=/usr

# Installing NPM and Dependencies: Codeceptjs, Allure
    # && npm install uuid@latest \
    # && npm install debug@latest \
    # && npm install uuid@latest \
    # && npm install core-js@latest \
RUN npm install -g npm \
    && npm install -g dotenv \
    && npm install -g npx \
    && npm i -g npm-check-updates \
    && npm init -y \
    && npm install --save-dev puppeteer \
    && npm install codeceptjs playwright --save-dev \
    && npm install -g allure-commandline --save-dev \
    && npm i @codeceptjs/ui --save

COPY run_tests_locally.sh /codecept/docker/run.sh

# Set the entrypoint for Nightmare
ENTRYPOINT ["/codecept/docker/entrypoint"]

# Run tests
CMD /codecept/docker/run.sh ${TAG} ${CROSSBROWSER}