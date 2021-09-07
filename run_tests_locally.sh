#!/bin/bash

echo "-----> ARG 1: ${1}"
echo "-----> ARG 2: ${2}"

# No external arguments informed
if [ $# -eq 0 ] ; then
    echo "Running all the tests..."
    npx codeceptjs run --features --steps

# One external argument with 'ccui' to run in Codecept UI
elif [ ${1} == "ccui" ] ; then
    echo "Opening Codecept UI..."
    npx codecept-ui --app --features

# Single or multiple browsers with or withot Feature / Scenario tags
else
    with_parallel=""
    crossbrowser="multi"
    tag=`echo --grep @${1}`
    tag_norm=`echo ${tag} | sed 's/@//g'`
    
    if [[ ${1} && ${1} == ${crossbrowser} ]] ; then 
        with_parallel="-multiple parallel"
        tag_norm=""
    
    elif [[ ${2} && ${2} == ${crossbrowser} ]] ; then
        with_parallel="-multiple parallel"
        echo "-----> MULTIPLE BROWSERS IN PARALLEL: Webkit, Chromium, Firefox --- '${tag_norm}'"
        
    else
        with_parallel=""
        echo "-----> Running single browser the Feature / Scenario with '${tag_norm}'. Command:"
    fi
        
    echo "(command: npx codeceptjs run${with_parallel} --features --steps ${tag_norm})"
    npx codeceptjs run${with_parallel} --features --steps ${tag_norm}
fi

    ## RUN TESTS USING TERMINAL IN YOUR WAY - SEE ALL OPTIONS AND EXAMPLES

    ## Run all tests
    # npx codeceptjs run --features --steps --grep '@acceptance'

    ## Run a specific feature. Example:
    # npx codeceptjs run --features --steps --grep '@view-all-psychics'
    # npx codeceptjs run --features --steps --grep '@search-filtering'
    # npx codeceptjs run --features --steps --grep '@specific-search'
    # npx codeceptjs run --features --steps --grep '@psychic-livestream'

    ## Run a specific scenario. Change the tag to another existing in the .feature files. Example:
    # npx codeceptjs run --features --steps --grep '@psychics-by-topic'

    ## Run the tests considering DEBUG logs. Example:
    # DEBUG=pw:api npx codeceptjs run --features --steps --grep '@view-all-psychics'

    ## Run tests with Codecept UI. Example:
    # npx codecept-ui --app --features

    ## Run in parallel with workers (choose the number of workers). Example:
    # npx codeceptjs run-workers --features 2
    # npx codeceptjs run-workers --features 2 --grep '@view-all-psychics'

    ## Run in multiple browsers (default: chromium, firefox, webkit). Example:
    # npx codeceptjs run-multiple --features chromium firefox
    # npx codeceptjs run-multiple parallel --features --grep '@acceptance'
