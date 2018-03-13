#!/bin/bash
docker-compose -f docker/compose/test.yml run {{name}} unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
