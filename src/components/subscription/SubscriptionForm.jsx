import { useState, useEffect } from 'react';
import './SubscriptionForm.css';

const SubscriptionForm = ({ subscription, categories, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    cost: '',
    category: '',
    renewalDate: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (subscription) {
      setFormData({
        serviceName: subscription.serviceName,
        cost: subscription.cost.toString(),
        category: subscription.category,
        renewalDate: subscription.renewalDate,
      });
    }
  }, [subscription]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceName.trim()) {
      newErrors.serviceName = 'El nombre del servicio es requerido';
    }

    if (!formData.cost || isNaN(formData.cost) || parseFloat(formData.cost) <= 0) {
      newErrors.cost = 'Ingresa un costo válido mayor a 0';
    }

    if (!formData.category) {
      newErrors.category = 'Selecciona una categoría';
    }

    if (!formData.renewalDate) {
      newErrors.renewalDate = 'La fecha de renovación es requerida';
    } else {
      const selectedDate = new Date(formData.renewalDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.renewalDate = 'La fecha de renovación debe ser futura';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await onSubmit({
        serviceName: formData.serviceName.trim(),
        cost: parseFloat(formData.cost),
        category: formData.category,
        renewalDate: formData.renewalDate,
      });
    } catch (error) {
      setErrors({ submit: error.message || 'Error al guardar la suscripción' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="subscription-form-modal">
        <div className="modal-header">
          <h3>{subscription ? 'Editar Suscripción' : 'Nueva Suscripción'}</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form className="subscription-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="serviceName">Nombre del servicio *</label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              placeholder="Ej: Netflix, Spotify, Adobe..."
              className={errors.serviceName ? 'error' : ''}
            />
            {errors.serviceName && <span className="error-text">{errors.serviceName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cost">Costo mensual (USD) *</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              placeholder="15.99"
              step="0.01"
              min="0"
              className={errors.cost ? 'error' : ''}
            />
            {errors.cost && <span className="error-text">{errors.cost}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? 'error' : ''}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && <span className="error-text">{errors.category}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="renewalDate">Fecha de renovación *</label>
            <input
              type="date"
              id="renewalDate"
              name="renewalDate"
              value={formData.renewalDate}
              onChange={handleChange}
              className={errors.renewalDate ? 'error' : ''}
            />
            {errors.renewalDate && <span className="error-text">{errors.renewalDate}</span>}
          </div>

          {errors.submit && <div className="submit-error">{errors.submit}</div>}

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Guardando...' : (subscription ? 'Actualizar' : 'Crear Suscripción')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;