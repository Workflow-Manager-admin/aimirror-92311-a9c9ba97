#!/bin/bash
cd /home/kavia/workspace/code-generation/aimirror-92311-a9c9ba97/landing_page_frontend_workspace/landing_page_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

