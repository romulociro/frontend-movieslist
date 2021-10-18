import React, { useContext } from 'react';
import { RouteProps as ReactDomRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// import { Container } from './styles';

interface IRouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useContext(AuthContext);

  Route.defaultProps = {
    isPrivate: false,
  };

  return (

    <ReactDOMRoute
      {...rest}
      render={() => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
      ))}
    />
  );
};

export default Route;
