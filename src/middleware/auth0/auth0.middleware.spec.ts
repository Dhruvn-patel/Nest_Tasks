import { Auth0Middleware } from './auth0.middleware';

describe('Auth0Middleware', () => {
  it('should be defined', () => {
    expect(new Auth0Middleware()).toBeDefined();
  });
});
