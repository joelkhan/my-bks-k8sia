#!/bin/sh

sudo kubectl create configmap fortune-config --from-file=configmap-files -nmy-bks-k8sia

