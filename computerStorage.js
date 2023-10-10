'use strict';

module.exports = class ComputerStorage {
  #storage;
  constructor(jsondata) {
    if (!jsondata) throw new Error('data storage missing');
    this.#storage = jsondata;
  }

  has_extras(searchKey) {
    if (arguments.length < 1) return false;
    for (const computer of this.#storage) {
      if (computer.computerNumber === searchKey) {
        if (!computer.extras) {
          return false;
        }
        //check if empty
        else if (Object.keys(computer.extras).length === 0) {
          return false;
        }
        return true;
      }
    }
  }

  get_total_price_of_computers_by_type(searchValue) {
    if (!searchValue) throw new Error('missing parameter');
    let totalPrice = 0;
    for (const computer of this.#storage) {
      if (computer.type === searchValue) {
        totalPrice += computer.price;
      }
    }
    if (totalPrice === 0) {
      throw new Error('nothing found with given type');
    }
    return totalPrice;
  }

  get_Price(computerNumber) {
    for (const computer of this.#storage) {
      if (computer.computerNumber == computerNumber) {
        return computer.price;
      }
    }
    throw new Error('nothing found with given number');
  }

  get_All_computers_By_type(searchValue) {
    if (!searchValue) throw new Error('missing parameter');
    let found = [];
    for (const computer of this.#storage) {
      if (computer.type === searchValue) {
        found.push(computer);
      }
    }
    return found;
  }
};
