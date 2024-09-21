class ApiClient {
  apiKey: string;

  constructor(key: string) {
    this.apiKey = key;
  }

  public async get(url: string) {
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: this.apiKey,
      },
    });
  }

  public async post(url: string, payload?: BodyInit) {
    return fetch(url, {
      method: 'POST',
      headers: {
        Authorization: this.apiKey,
      },
      body: payload,
    });
  }
}

export function apiClient(): string {
  return 'api-client';
}
