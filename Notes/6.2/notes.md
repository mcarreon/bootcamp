# Session 6.2 June 26th 2018

<!-- TOC -->

- [Session 6.2 June 26th 2018](#session-62-june-26th-2018)
  - [AJAX methods](#ajax-methods)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)

<!-- /TOC -->

## AJAX methods

### GET

ex. code

```javascript
    //.done only works when the call is successful
    //.then tries to run the function even if the call is unsuccessful

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
        console.log(response);
    });

```

### POST

### PUT

### DELETE