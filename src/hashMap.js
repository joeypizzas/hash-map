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
    for (const key of Object.keys(this.buckets)) {
      const bucket = this.buckets[key];
      for (const entry of bucket) {
        const newIndex = this.hash(entry.key);
        if (!increasedBuckets[newIndex]) {
          increasedBuckets[newIndex] = [];
        }
        increasedBuckets[newIndex].push(entry);
      }
    }
    this.buckets = increasedBuckets;
  }
}
