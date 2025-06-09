import { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';
import { useAuth } from './AuthContext';

const SubscriptionContext = createContext({});

export const useSubscriptions = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscriptions must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (isAuthenticated && user) {
      loadSubscriptions();
      loadCategories();
    }
  }, [isAuthenticated, user]);

  const loadSubscriptions = async () => {
    try {
      setLoading(true);
      const data = await apiService.getSubscriptions(user.id);
      setSubscriptions(data);
    } catch (error) {
      console.error('Error loading subscriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await apiService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const createSubscription = async (subscriptionData) => {
    try {
      const newSubscription = await apiService.createSubscription({
        ...subscriptionData,
        userId: user.id,
      });
      setSubscriptions(prev => [...prev, newSubscription]);
      return newSubscription;
    } catch (error) {
      throw new Error(error.message || 'Error al crear suscripción');
    }
  };

  const updateSubscription = async (id, subscriptionData) => {
    try {
      const updatedSubscription = await apiService.updateSubscription(id, subscriptionData);
      setSubscriptions(prev => 
        prev.map(sub => sub.id === id ? updatedSubscription : sub)
      );
      return updatedSubscription;
    } catch (error) {
      throw new Error(error.message || 'Error al actualizar suscripción');
    }
  };

  const deleteSubscription = async (id) => {
    try {
      await apiService.deleteSubscription(id);
      setSubscriptions(prev => prev.filter(sub => sub.id !== id));
    } catch (error) {
      throw new Error(error.message || 'Error al eliminar suscripción');
    }
  };

  // Filter subscriptions based on search term and category
  const filteredSubscriptions = subscriptions.filter(subscription => {
    const matchesSearch = subscription.serviceName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || subscription.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const value = {
    subscriptions,
    filteredSubscriptions,
    categories,
    loading,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    createSubscription,
    updateSubscription,
    deleteSubscription,
    refreshSubscriptions: loadSubscriptions,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};