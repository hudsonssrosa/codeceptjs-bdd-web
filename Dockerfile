# Download Playwright and its dependencies
FROM codeceptjs/codeceptjs

ENV TAG ''
ENV CROSSBROWSER ''

# Installing JAVA
ARG JAVA_VERSION=11
ARG JAVA_RELEASE=JDK

RUN mkdir -p /usr/share/man/man1
RUN bash -c ' \
    set -euxo pipefail && \
    apt-get update && \
    pkg="openjdk-$JAVA_VERSION"; \
    if [ "$JAVA_RELEASE" = "JDK" ]; then \
    pkg="$pkg-jdk-headless"; \
    else \
    pkg="$pkg-jre-headless"; \
    fi; \
    apt-get install -y --no-install-recommends "$pkg" && \
    apt-get -y install gcc && \
    apt-get clean'

ENV JAVA_HOME=/usr

# Installing NPM and Dependencies: Codeceptjs, Allure
RUN npm install -g npm \
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