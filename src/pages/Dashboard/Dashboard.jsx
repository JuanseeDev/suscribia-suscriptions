import { useState } from 'react';
import Header from '../../components/layout/Header';
import SubscriptionCard from '../../components/subscription/SubscriptionCard';
import SubscriptionForm from '../../components/subscription/SubscriptionForm';
import SearchBar from '../../components/common/SearchBar';
import { useSubscriptions } from '../../contexts/SubscriptionContext';
import './Dashboard.css';

const Dashboard = () => {
  const {
    filteredSubscriptions,
    loading,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    createSubscription,
    updateSubscription,
    deleteSubscription
  } = useSubscriptions();

  const [showForm, setShowForm] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState(null);

  const handleCreateSubscription = async (subscriptionData) => {
    try {
      await createSubscription(subscriptionData);
      setShowForm(false);
    } catch (error) {
      console.error('Error creating subscription:', error);
    }
  };

  const handleEditSubscription = async (id, subscriptionData) => {
    try {
      await updateSubscription(id, subscriptionData);
      setEditingSubscription(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating subscription:', error);
    }
  };

  const handleDeleteSubscription = async (id) => {
    try {
      await deleteSubscription(id);
    } catch (error) {
      console.error('Error deleting subscription:', error);
    }
  };

  const openEditForm = (subscription) => {
    setEditingSubscription(subscription);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingSubscription(null);
  };

  const totalMonthlyCost = filteredSubscriptions.reduce((total, sub) => total + sub.cost, 0);

  return (
    <div className="dashboard">
      <Header />
      
      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h2>Panel de Control</h2>
            <button 
              className="add-subscription-btn"
              onClick={() => setShowForm(true)}
            >
              + Nueva Suscripción
            </button>
          </div>

          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Total de Suscripciones</h3>
              <span className="stat-number">{filteredSubscriptions.length}</span>
            </div>
            <div className="stat-card">
              <h3>Costo Mensual Total</h3>
              <span className="stat-number">${totalMonthlyCost.toFixed(2)}</span>
            </div>
            <div className="stat-card">
              <h3>Costo Anual Estimado</h3>
              <span className="stat-number">${(totalMonthlyCost * 12).toFixed(2)}</span>
            </div>
          </div>

          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          <div className="subscriptions-section">
            <h3>Mis Suscripciones</h3>
            
            {loading ? (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p>Cargando suscripciones...</p>
              </div>
            ) : filteredSubscriptions.length === 0 ? (
              <div className="empty-state">
                <p>No se encontraron suscripciones</p>
                <button 
                  className="add-first-subscription"
                  onClick={() => setShowForm(true)}
                >
                  Agregar tu primera suscripción
                </button>
              </div>
            ) : (
              <div className="subscriptions-grid">
                {filteredSubscriptions.map((subscription) => (
                  <SubscriptionCard
                    key={subscription.id}
                    subscription={subscription}
                    onEdit={() => openEditForm(subscription)}
                    onDelete={() => handleDeleteSubscription(subscription.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {showForm && (
        <SubscriptionForm
          subscription={editingSubscription}
          categories={categories}
          onSubmit={editingSubscription ? 
            (data) => handleEditSubscription(editingSubscription.id, data) : 
            handleCreateSubscription
          }
          onClose={closeForm}
        />
      )}
    </div>
  );
};

export default Dashboard;