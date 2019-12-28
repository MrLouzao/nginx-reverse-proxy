# Nginx Reverse Proxy

Proof of concept for reverse proxy with Nginx.

### Structure

![Reverse Proxy](/docs/diagram.jpg?raw=true "Reverse Proxy")


## Requirements

- Docker
- Docker compose

## How to run

Simply execute:

```
$ docker-compose up
```

After that, access to http://localhost on your browser. This will open a frontend that consumes it's own API through the proxy.
