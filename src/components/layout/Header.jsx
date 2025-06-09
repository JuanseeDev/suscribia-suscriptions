import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="logo">Suscribia</h1>
          <span className="subtitle">Gestor de Suscripciones</span>
        </div>
        
        <div className="header-right">
          <div className="user-info">
            <span className="user-name">Hola, {user?.name}</span>
            <button className="logout-button" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;