For whatever reasons ingress was not configuring correctly. Had to run this:
```
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```

Also had to add api.sa.homework into /etc/hosts with:
```
echo "$(minikube ip) api.sa.homework" | sudo tee -a /etc/hosts
```