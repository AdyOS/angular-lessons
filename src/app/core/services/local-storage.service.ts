import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

    setItem(key: string, jsonData: object, expirationSec: number | null = null) {
      const expirationMS = expirationSec ? expirationSec * 1000 : Number.MAX_VALUE;
      const record = { value: JSON.stringify(jsonData), timestamp: new Date().getTime() + expirationMS };

      localStorage.setItem(key, JSON.stringify(record));

      return jsonData;
    }

    getItem(key: string) {
      const record = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));

      if (!record) {
        return null;
      }

      return (new Date().getTime() < record.timestamp && JSON.parse(record.value));
    }

    removeItem(key: string) {
      localStorage.removeItem(key);
    }
}
