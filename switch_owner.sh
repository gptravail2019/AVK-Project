#!/bin/bash
CONNECTEDUSER="$(whoami)"

sudo chown -R $CONNECTEDUSER:$CONNECTEDUSER ./