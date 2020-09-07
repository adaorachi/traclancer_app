import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import rootReducer from '../../reducers/rootReducer';
import Drawer from '../../app/layouts/Drawer';

afterEach(cleanup);
const div = document.createElement('div');
const store = createStore(rootReducer);
const reduxRendering = component => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

test('landing page rendering or navigation', () => {
  const { getByTestId } = reduxRendering(
    <MemoryRouter>
      <Drawer />
    </MemoryRouter>, div,
  );

  expect(getByTestId('projects-link').textContent).toBe('Available Project');
});

test('landing page rendering or navigation', () => {
  const { getByTestId } = reduxRendering(
    <MemoryRouter>
      <Drawer />
    </MemoryRouter>, div,
  );

  expect(getByTestId('claimed-projects-link').textContent).toBe('Claimed Projects');
});

test('landing page rendering or navigation', () => {
  const { getByTestId } = reduxRendering(
    <MemoryRouter>
      <Drawer />
    </MemoryRouter>, div,
  );

  expect(getByTestId('create-project-link').textContent).toBe('Create Project');
});

export default reduxRendering;
