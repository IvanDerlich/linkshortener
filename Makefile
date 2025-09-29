.PHONY: build run clean

build:
	cd /home/ivan/repos/linkshortener && docker build -f back-end/Dockerfile -t linkshortener-backend .

run:
	docker run -p 3000:3000 --name linkshortener-backend linkshortener-backend

clean:
	docker stop linkshortener-backend || true
	docker rm linkshortener-backend || true
	docker rmi linkshortener-backend || true



