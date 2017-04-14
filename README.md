## AngularJs String Stripper Filter

Pass the filter a string or multiple strings and remove _all_ occurences of the passed in needle.

### Example

$scope.myString = "Hello World";

**{{myString | strip:'Hello'}}**

Outputs: ' world'

The filter is case sensitive, to remove all occurences of the letter 'H', both upper and lowercase letter must be passed in.

**{{"Hello World" | strip:['h','H']}}**

Outputs: 'ello World'


