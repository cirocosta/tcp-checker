# tcp-checker

> Checks if it is possible to connect to a tcp `addr:port`.

## Usage

  ```sh
  docker run --rm \
    --env ADDRESS=<address> \
    --env PORT=<port> \
    cirocosta/tcp-checker

# if there is a tcp server listening on <address>:<port>
  Connected successfully

# otherwise:
  Connection errored
  ```

## LICENSE

mit

