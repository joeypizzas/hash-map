// Hash map class constructor

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.length = 0;
    this.buckets = {};

    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = [];
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  increaseCapacity() {
    this.capacity = this.capacity * 2;

    const increasedBuckets = {};
    for (let i = 0; i < this.capacity; i++) {
      increasedBuckets[i] = [];
    }

    for (const key of Object.keys(this.buckets)) {
      const bucket = this.buckets[key];
      for (const entry of bucket) {
        const newIndex = this.hash(entry.key);
        increasedBuckets[newIndex].push(entry);
      }
    }
    this.buckets = increasedBuckets;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }

    this.buckets[hashedKey].push({ key, value });
    this.length++;

    if (this.length / this.capacity > this.loadFactor) this.increaseCapacity();

    return `${key}: ${value} was added to the hashmap.`;
  }

  get(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return null;
  }

  has(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    for (const entry of bucket) {
      if (entry.key === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.length--;
        return `The item at key ${key} was removed from the hash map.`;
      }
    }

    return `The item at key ${key} wasn't in the hash map.`;
  }

  length() {
    return this.length;
  }

  clear() {
    this.capacity = 16;
    this.length = 0;
    this.buckets = {};
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = [];
    }
  }

  keys() {
    const hashMapKeys = [];

    for (const bucketKey of Object.keys(this.buckets)) {
      const bucket = this.buckets[bucketKey];
      for (const entry of bucket) {
        hashMapKeys.push(entry.key);
      }
    }

    return hashMapKeys;
  }

  values() {
    const hashMapValues = [];

    for (const bucket of Object.values(this.buckets)) {
      for (const entry of bucket) {
        hashMapValues.push(entry.value);
      }
    }

    return hashMapValues;
  }

  entries() {
    const hashMapKVPs = [];

    for (const bucket of Object.values(this.buckets)) {
      for (const entry of bucket) {
        const kvp = [entry.key, entry.value];
        hashMapKVPs.push(kvp);
      }
    }

    return hashMapKVPs;
  }
}
