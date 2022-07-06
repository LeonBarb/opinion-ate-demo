import {render, screen} from '@testing-library/react';
import {RestaurantList} from './RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants;

  function renderComponent(propOverrides = {}) {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants,
      loading: false,
      loadError: false,
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;
    render(<RestaurantList {...props} />);
  }

  it('displays the loading indicator while loading', () => {
    renderComponent({loading: true});
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('loads restaurants on first render', () => {
    renderComponent();
    expect(loadRestaurants).toHaveBeenCalled();
  });

  describe('when loading fails', () => {
    it('displays loading-error', () => {
      renderComponent({loadError: true});
      expect(
        screen.getByText('Restaurants could not be loaded'),
      ).toBeInTheDocument();
    });
  });

  describe('when loading succeeds', () => {
    it('displays the restaurants', () => {
      renderComponent();
      expect(screen.getByText('Sushi Place')).toBeInTheDocument();
      expect(screen.getByText('Pizza Place')).toBeInTheDocument();
    });

    it('does not display loading-error', () => {
      renderComponent({loadError: false});
      expect(
        screen.queryByText('Restaurants could not be loaded'),
      ).not.toBeInTheDocument();
    });

    it('does not display progressbar while not loading', () => {
      renderComponent();
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });
});
