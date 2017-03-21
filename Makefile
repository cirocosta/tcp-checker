IMAGE_NAME := cirocosta/tcp-checker

image:
	docker build -t $(IMAGE_NAME) .

.PHONY: image
