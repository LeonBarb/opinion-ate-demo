import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
import {List} from '@mui/material';
import {ListItem} from '@mui/material';
import {ListItemText} from '@mui/material';
import {CircularProgress} from '@mui/material';
import {Alert} from '@mui/material';

export function RestaurantList({
  loadRestaurants,
  restaurants,
  loading,
  loadError,
}) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {loading && <CircularProgress />}
      {loadError && (
        <Alert severity="error">Restaurants could not be loaded</Alert>
      )}
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>
            <ListItemText>{restaurant.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
  loadError: state.restaurants.loadError,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
