Write a function that takes one parameter (seconds) and prints out the following:

timeFromNow(59)
=> "less than a minute ago"

timeFromNow(60)
=> "1 minute ago"

timeFromNow(61)
=> "1 minute, 1 second ago"

timeFromNow(62)
=> "1 minute, 2 seconds ago"

timeFromNow(3600)
=> "1 hour ago"

timeFromNow(3601)
=> "1 hour, 1 second ago"

timeFromNow(3660)
=> "1 hour, 1 minute ago"

timeFromNow(3661)
=> "1 hour, 1 minute, 1 second ago"
...

Write tests to verify correct functionality in calculate.test.js
(jest is the test framework)

