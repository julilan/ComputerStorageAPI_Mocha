'use strict';

const expect = require('chai').expect;

const ComputerStorage = require('../computerStorage');
const computers = require('../datastorage.json');

describe('Testing constructor', function () {
  it('Missing parameter throws an exception "data storage missing"', function () {
    expect(function () {
      new ComputerStorage();
    }).to.throw('data storage missing');
  });
});

describe('Testing has_extras() with default data', function () {
  const storage = new ComputerStorage(computers);
  it('has_extras(1) with extras object returns true', function () {
    expect(storage.has_extras(1)).to.be.true;
  });

  it('has_extras(5) with no extras object returns false', function () {
    expect(storage.has_extras(5)).to.be.false;
  });
  it('computer not matching the searchKey returns false', function () {
    expect(storage.has_extras(789)).to.be.false;
  });

  it('has_extras() parameter missing returns false', function () {
    expect(storage.has_extras()).to.be.false;
  });
});

describe('Testing has_extras() with modified data', function () {
  const modifiedData = [
    {
      computerNumber: 10,
      name: 'Xunil 4.7',
      type: 'server',
      price: 10,
      manufacturer: 'Xyz computing',
      colors: ['yellow', 'white', 'green'],
      extras: {},
    },
  ];
  const storage = new ComputerStorage(modifiedData);

  it('Test computer with an empty extras object to return false', function () {
    expect(storage.has_extras(10)).to.be.false;
  });
});

describe('Testing get_total_price_of_computers_by_type()', function () {
  const storage = new ComputerStorage(computers);

  describe('Test with matching type values', function () {
    const testValues = [
      { a: 'server', expected: 10 },
      { a: 'gameover', expected: 236 },
      { a: 'laptop', expected: 10 },
      { a: 'tabletop', expected: 10 },
    ];

    testValues.forEach(function (testCase) {
      it(`${testCase.a} returns ${testCase.expected}`, function () {
        expect(
          storage.get_total_price_of_computers_by_type(testCase.a)
        ).to.equal(testCase.expected);
      });
    });
  });

  describe('Test with not found searchValue', function () {
    it('"macbook" throws an exception "nothing found with given type"', function () {
      expect(function () {
        storage.get_total_price_of_computers_by_type('macbook');
      }).to.throw('nothing found with given type');
    });
  });

  describe('Parameter is missing', function () {
    it('throws an exception "missing parameter"', function () {
      expect(function () {
        storage.get_total_price_of_computers_by_type();
      }).to.throw('missing parameter');
    });
  });
});

describe('Testing get_Price()', function () {
  const storage = new ComputerStorage(computers);
  describe('Test with matching computerNumber', function () {
    const testValues = [
      { a: 1, expected: 10 },
      { a: 2, expected: 200 },
    ];

    testValues.forEach(function (testCase) {
      it(`${testCase.a} returns price ${testCase.expected}`, function () {
        expect(storage.get_Price(testCase.a)).to.equal(testCase.expected);
      });
    });
  });
  describe('Test with not found computerNumber', function () {
    it('11 throws an exception "nothing found with given number"', function () {
      expect(function () {
        storage.get_Price(11);
      }).to.throw('nothing found with given number');
    });
  });
});

describe('Testing get_All_computers_By_type()', function () {
  const storage = new ComputerStorage(computers);
  it('Testing with searchValue "server"', function () {
    const expectedResult = [
      {
        computerNumber: 1,
        name: 'Xunil 4.7',
        type: 'server',
        price: 10,
        manufacturer: 'Xyz computing',
        colors: ['yellow', 'white', 'green'],
        extras: {
          consumption: 'C',
          comments: 'no comments',
          model: 'XXL',
        },
      },
    ];
    expect(storage.get_All_computers_By_type('server')).to.deep.equal(
      expectedResult
    );
  });

  it('Testing with searchValue "gameover"', function () {
    const expectedResult = [
      {
        computerNumber: 2,
        name: 'Xunil 4.7',
        type: 'gameover',
        price: 200,
        manufacturer: 'Leila Hökki & co',
        colors: ['red', 'green', 'blue'],
        extras: {
          consumption: 'D',
          comments: '-',
          model: 'silver',
        },
      },
      {
        computerNumber: 3,
        name: 'King 3000',
        type: 'gameover',
        price: 36,
        manufacturer: 'Leila Hökki & co',
        colors: ['black', 'orange', 'blue'],
        extras: {
          consumption: 'A+',
          comments: 'no comments',
          model: 'gold',
        },
      },
    ];
    expect(storage.get_All_computers_By_type('gameover')).to.deep.equal(
      expectedResult
    );
  });

  it('"macbook" returns an empty array []', function () {
    expect(storage.get_All_computers_By_type('macbook')).to.be.empty;
  });

  it('Parameter is missing throws an exception "missing parameter"', function () {
    expect(function () {
      storage.get_All_computers_By_type();
    }).to.throw('missing parameter');
  });
});

describe('Testing get_All_computers_By_color()', function () {
  const storage = new ComputerStorage(computers);
  
  it('Test with matching color "black"', function () {
    expect(storage.get_All_computers_By_color('black')).to.deep.equal([3,4,5]);
  });

  it('Test with given color not found', function () {
    expect(storage.get_All_computers_By_color('pink')).to.be.empty;
  });

  it('Test parameter is missing', function () {
    expect(storage.get_All_computers_By_color()).to.be.empty;
  });
});

describe('Testing get_a_computer_matching_computerNumber(searchKey)', function () {
  const storage = new ComputerStorage(computers);
  const expectedResult =   {
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

  it('Test 1: Test with matching searchKey "1"', function () {
    expect(storage.get_a_computer_matching_computerNumber(1)).to.deep.equal(expectedResult);
  });

  it('Test 2: Test with not matching searchKey "789"', function () {
    expect(storage.get_a_computer_matching_computerNumber(789)).to.be.null;
  });

  it('Test 3: parameter is missing throws an exception "missing parameter"', function () {
    expect(function () {
      storage.get_a_computer_matching_computerNumber();
    }).to.throw('missing parameter');
  });
});

describe('Testing get_All_computers_By_manufacturer(searchValue)', function () {
  const storage = new ComputerStorage(computers);
  
  it('Test 1: Test with manufacturer "Ocean" that matches one computer', function () {
    expect(storage.get_All_computers_By_manufacturer('Ocean')).to.deep.equal([
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
    ]);
  });

  const expectedResult = [
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
  it('Test 2: Test with manufacturer "Leila Hökki & co" that matches more than one computer', function () {
    expect(storage.get_All_computers_By_manufacturer('Leila Hökki & co')).to.deep.equal(expectedResult);
  });

  it('Test 3: Manufacturer with given searchValue "Hero Computers" not found returns an empty array', function (){
    expect(storage.get_All_computers_By_manufacturer('Hero Computers')).to.be.empty;
  });

  it('Test 4: Parameter missing throws an exception "missing parameter"', function () {
    expect(function () {
      storage.get_All_computers_By_manufacturer();
    }).to.throw('missing parameter');
  });
});