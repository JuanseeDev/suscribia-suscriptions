import Swal from 'sweetalert2';
import './SubscriptionCard.css';

const SubscriptionCard = ({ subscription, onEdit, onDelete }) => {
  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar la suscripción de ${subscription.serviceName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
        Swal.fire(
          'Eliminado',
          'La suscripción ha sido eliminada.',
          'success'
        );
      }
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntilRenewal = () => {
    const today = new Date();
    const renewalDate = new Date(subscription.renewalDate);
    const diffTime = renewalDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilRenewal = getDaysUntilRenewal();
  const isExpiringSoon = daysUntilRenewal <= 7 && daysUntilRenewal >= 0;
  const isExpired = daysUntilRenewal < 0;

  return (
    <div className={`subscription-card ${isExpiringSoon ? 'expiring-soon' : ''} ${isExpired ? 'expired' : ''}`}>
      <div className="card-header">
        <h4 className="service-name">{subscription.serviceName}</h4>
        <span className="category-badge">{subscription.category}</span>
      </div>
      
      <div className="card-body">
        <div className="cost-info">
          <span className="cost">${subscription.cost.toFixed(2)}</span>
          <span className="period">/mes</span>
        </div>
        
        <div className="renewal-info">
          <span className="renewal-label">Próxima renovación:</span>
          <span className="renewal-date">{formatDate(subscription.renewalDate)}</span>
          
          {isExpired && (
            <span className="status-badge expired">Vencida</span>
          )}
          {isExpiringSoon && !isExpired && (
            <span className="status-badge expiring">
              {daysUntilRenewal === 0 ? 'Vence hoy' : `${daysUntilRenewal} días`}
            </span>
          )}
        </div>
      </div>
      
      <div className="card-actions">
        <button className="edit-btn" onClick={onEdit}>
          Editar
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;