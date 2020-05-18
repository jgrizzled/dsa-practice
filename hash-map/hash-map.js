class HashMap {
  constructor(capacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = capacity;
    this._deleted = 0;
  }
  get(key) {
    const idx = this._findSlot(key);
    if (!this._hashTable[idx]) throw new Error('Key error');
    return this._hashTable[idx].value;
  }
  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO)
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    const idx = this._findSlot(key);
    if (!this._hashTable[idx]) this.length++;
    this._hashTable[idx] = {
      key,
      value
    };
  }
  delete(key) {
    const idx = this._findSlot(key);
    const slot = this._hashTable[idx];
    if (!slot) throw new Error('Key error');
    delete slot.value;
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }
  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;
    for (let i = start; i < start + this._capacity; i++) {
      const idx = i % this._capacity;
      const slot = this._hashTable[idx];
      if (!slot || (slot.key === key && !slot.deleted)) return idx;
    }
  }
  _resize(size) {
    const old = this._hashTable;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];
    for (const slot of old) {
      if (slot && !slot.deleted) this.set(slot.key, slot.value);
    }
  }
  static _hashString(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
  static MAX_LOAD_RATIO = 0.5;
  static SIZE_RATIO = 3;
}

module.exports = HashMap;
