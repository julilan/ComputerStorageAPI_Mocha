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
    return false;
  }

  // if (computer.computerNumber === searchKey) {
  //   return Object.keys(computer.extras).length > 0;
  // }

  get_total_price_of_computers_by_type(searchValue) {
    if (!searchValue) throw new Error('missing parameter');
    let totalPrice = 0;
    let found = false;
    for (const computer of this.#storage) {
      if (computer.type === searchValue) {
        totalPrice += computer.price;
        found = true;
      }
    }
    if (found === false) {
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
    const found = [];
    for (const computer of this.#storage) {
      if (computer.type === searchValue) {
        found.push(computer);
      }
    }
    return found;
  }

  get_All_computers_By_color(searchValue){
    if (!searchValue) return [];
    const found = [];
    for (const computer of this.#storage) {
      if (computer.colors.includes(searchValue)) {
        found.push(computer.computerNumber);
      }
    }
    return found;
  }

  get_a_computer_matching_computerNumber(searchKey) {
    if (!searchKey) throw new Error('missing parameter');
    for (const computer of this.#storage) {
      if (computer.computerNumber === searchKey) {
        return computer;
      }
    }
    return null;
  }

  get_All_computers_By_manufacturer(searchValue) {
    if (!searchValue) throw new Error('missing parameter');
    const found = [];
    for (const computer of this.#storage) {
      if (computer.manufacturer === searchValue) {
        found.push(computer);
      }
    }
    return found;
  }
};
