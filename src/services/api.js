const API_URL = 'http://localhost:3001';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email, password) {
    const users = await this.request('/users');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Credenciales inválidas');
    }
    return user;
  }

  async register(userData) {
    return await this.request('/users', {
      method: 'POST',
      body: JSON.stringify({
        ...userData,
        createdAt: new Date().toISOString(),
      }),
    });
  }

  // Subscription methods
  async getSubscriptions(userId) {
    return await this.request(`/subscriptions?userId=${userId}`);
  }

  async createSubscription(subscriptionData) {
    return await this.request('/subscriptions', {
      method: 'POST',
      body: JSON.stringify({
        ...subscriptionData,
        createdAt: new Date().toISOString(),
      }),
    });
  }

  async updateSubscription(id, subscriptionData) {
    return await this.request(`/subscriptions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(subscriptionData),
    });
  }

  async deleteSubscription(id) {
    return await this.request(`/subscriptions/${id}`, {
      method: 'DELETE',
    });
  }

  // Categories
  async getCategories() {
    return await this.request('/categories');
  }
}

export default new ApiService();