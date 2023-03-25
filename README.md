
## Tiny app to format and colorize log objects into a proper json for the better view.

### how to run:

1. `git clone git@github.com:nattts/log-formatter.git`
2.  make sure Docker is running locally.
3.  cd into main directory and run `docker-compose up`.


### usage:

try throwing in few javascript objects structured like so:

```
{"application":"Lorem ipsum dolor sit amet","level":"info","message":"sed do eiusmod tempor incididunt -  0(ms)","metadata":{"flow":"sit voluptatem accusantium","headers":{"user":"19580","quantity":"1","transactionid":"90909090"},"stepExecutionTime":0,"transactionId":"12345"},"module":"foo","timestamp":"2023-02-06T14:19:20.871Z"}{"application":"vel illum qui dolorem eum fugiat","level":"info","message":"Duis aute irure dolor","metadata":{"flow":"Ut enim ad minima","headers":{"user":"195801","quantity":"1","transactionid":"3333"},"step":{"description":"Validate schema","type":"validateDocument"},"stepExecutionTime":8,"transactionId":"6789"},"module":"bar","timestamp":"2023-02-06T14:19:20.879Z"}

```

and you'll get something nice and pleasant to look at in return:

```
[
   {
      "application": "Lorem ipsum dolor sit amet",
      "level": "info",
      "message": "sed do eiusmod tempor incididunt -  0(ms)",
      "metadata": {
         "flow": "sit voluptatem accusantium",
         "headers": {
            "user": "19580",
            "quantity": "1",
            "transactionid": "90909090"
         },
         "stepExecutionTime": 0,
         "transactionId": "12345"
      },
      "module": "foo",
      "timestamp": "2023-02-06T14:19:20.871Z"
   },
   {
      "application": "vel illum qui dolorem eum fugiat",
      "level": "info",
      "message": "Duis aute irure dolor",
      "metadata": {
         "flow": "Ut enim ad minima",
         "headers": {
            "user": "195801",
            "quantity": "1",
            "transactionid": "3333"
         },
         "step": {
            "description": "Validate schema",
            "type": "validateDocument"
         },
         "stepExecutionTime": 8,
         "transactionId": "6789"
      },
      "module": "bar",
      "timestamp": "2023-02-06T14:19:20.879Z"
   }
]

```