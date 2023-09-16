# Migratory Birds

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

## Example

``` arr = [1,1,2,2,3] ```

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

## Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

```int arr[n]: the types of birds sighted```

## Input Format

The first line contains an integer, , the size of .
The second line describes  as  space-separated integers, each a type number of the bird sighted.

### Explanation 0

The different types of birds occur in the following frequencies:

Type 1:1  bird
Type 2:0  birds
Type 3:1  bird
Type 4:3  birds
Type 5:1  bird
The type number that occurs at the highest frequency is type `4` , so we print `4` as our answer.
