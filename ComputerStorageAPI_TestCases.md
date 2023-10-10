# Test cases for ComputerStorage API

## Test cases for Constructor

### **constructor(jsondata)**

Initializes ComputerStorage object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

### Test: Missing parameter throws an exception

Throws an error `'data storage missing`

## Test cases for `has_extras()`

### **has_extras(searchKey)**

Method checks based on computerNumber if the computer has `extras` or not.

> Parameters:
>
> > searchKey is the computerNumber to be searched

> Returns:
>
> > Returns true if the computer matching the searchKey has `extras` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

> Throws:
>
> >

### Test with default data

- computer matching the searchKey has extras object: hasExtras(1) returns `true`
- computer matching the searchKey does not have extras object: hasExtras(5) returns `false`
- conmputer not mathcing the searchKey returns `false`

### Test with modiefied data

computer has an empty `extras` object

```json
[
  {
    "computerNumber": 10,
    "name": "Xunil 4.7",
    "type": "server",
    "price": 10,
    "manufacturer": "Xyz computing",
    "colors": ["yellow", "white", "green"],
    "extras": {}
  }
]
```

returns `false`

### Parameter searchKey is missing

returns `false`

## Test cases for get_total_price_of_computers_by_type()

### **get_total_price_of_computers_by_type(searchValue)**

returns the total price of all computers that have the same type than the given searchValue

> Parameters:
>
> > searchValue is the type of the computer to be searched

> Returns:
>
> > total cumulative price of computers matching the searchValue

> Throws:
>
> > if no computer with the given searchValue is found throws an exeption `'nothing found with given type'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test with matching type values

- `'server'` returns 10
- `'gameover'` returns 236
- `'laptop'` returns 10
- `'tabletop'` returns 10

### Test with not found searchValue

`'macbook'` throws an exception `'nothing found with given type'`

### Parameter is missing

Throws an exception `'missing parameter'`

## Test cases for get_Price()

### **get_Price(computerNumber)**

get the price of the computer

> Parameters:
>
> > computerNumber of the computer which price is to be returned

> Returns:
>
> > returns the price of a computer matching the given computerNumber

> Throws:
>
> > if no computer with the given computerNumber is found throws an exeption `'nothing found with given number'`

### Test with matching computerNumber

1 returns 10
2 returns 200

### Test with not found computerNumber

11 throws an exception `'nothing found with given number'`

## Test cases for get_All_computers_By_type()

### **get_All_computers_By_type(searchValue)**

searches computers with given type

> Parameters:
>
> > searchValue is the type of the computer to be searched

> Returns:
>
> > Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test with default data

`'server'` returns

```json
[
  {
    "computerNumber": 1,
    "name": "Xunil 4.7",
    "type": "server",
    "price": 10,
    "manufacturer": "Xyz computing",
    "colors": ["yellow", "white", "green"],
    "extras": {
      "consumption": "C",
      "comments": "no comments",
      "model": "XXL"
    }
  }
]
```

`'gameover'` returns

```json
[
  {
    "computerNumber": 2,
    "name": "Xunil 4.7",
    "type": "gameover",
    "price": 200,
    "manufacturer": "Leila Hökki & co",
    "colors": ["red", "green", "blue"],
    "extras": {
      "consumption": "D",
      "comments": "-",
      "model": "silver"
    }
  },
  {
    "computerNumber": 3,
    "name": "King 3000",
    "type": "gameover",
    "price": 36,
    "manufacturer": "Leila Hökki & co",
    "colors": ["black", "orange", "blue"],
    "extras": {
      "consumption": "A+",
      "comments": "no comments",
      "model": "gold"
    }
  }
]
```

`'macbook'` returns an empty array []

### Test parameter missing

Throws an exception `'missing parameter'`

## Test cases for get_All_computers_By_color()

### **get_All_computers_By_color(searchValue)**
searches computers with given color

>Parameters:
>>searchValue is the the color of the computer to be searched

>Returns:
>>Returns an array of computerNumbers that are available with given color. If no computer with given color is found, returns an empty array. Also if parameter is missing an empty array is returned.

>Throws:
>>

### Test with matching color

- searchValue `black` returns
```json
[3,4,5]
```

### Test with given color not found

- searchValue `pink` returns an empty array []

### Test parameter is missing

Returns an empty array []

## Test cases for get_a_computer_matching_computerNumber(searchKey)

### **get_a_computer_matching_computerNumber(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key computerNumber of the computer

>Returns:
>>returns the computer object matching the computerNumber or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

### Test 1: Test with matching searchKey

searchKey `1` returns
```json
  {
    "computerNumber": 1,
    "name": "Xunil 4.7",
    "type": "server",
    "price": 10,
    "manufacturer": "Xyz computing",
    "colors": [
      "yellow",
      "white",
      "green"
    ],
    "extras": {
      "consumption": "C",
      "comments": "no comments",
      "model": "XXL"
    }
  }
```

### Test 2: Test with not matching searchKey

searchKey `789` returns `null`

### Test 3: parameter is missing

Throws an exception `'missing parameter'`

## Test cases for get_All_computers_By_manufacturer(searchValue)

### **get_All_computers_By_manufacturer(searchValue)**
searches computers with given manufacturer

>Parameters:
>>searchValue is the manufacturer of the computer to be searched

>Returns:
>>Returns an array of computer objects of given manufacturer. If no computer of given manufacturer is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 1: Test with manufacturer that matches one computer

searchValue `Ocean` returns
```json
[
  {
    "computerNumber": 5,
    "name": "Cera 2400",
    "type": "tabletop",
    "price": 10,
    "manufacturer": "Ocean",
    "colors": [
      "black",
      "orange",
      "green"
    ]
  }
]
```

### Test 2: Test with manufacturer that matches more than one computer

searchValue `Leila Hökki & co` returns
```json
[
    {
    "computerNumber": 2,
    "name": "Xunil 4.7",
    "type": "gameover",
    "price": 200,
    "manufacturer": "Leila Hökki & co",
    "colors": [
      "red",
      "green",
      "blue"
    ],
    "extras": {
      "consumption": "D",
      "comments": "-",
      "model": "silver"
    }
  },
  {
    "computerNumber": 3,
    "name": "King 3000",
    "type": "gameover",
    "price": 36,
    "manufacturer": "Leila Hökki & co",
    "colors": [
      "black",
      "orange",
      "blue"
    ],
    "extras": {
      "consumption": "A+",
      "comments": "no comments",
      "model": "gold"
    }
  }
]
```

### Test 3: Manufacturer with given searchValue not found

searchValue `Hero Computers` returns an empty array []

### Test 4: Parameter missing

Throws an exception `'missing parameter'`