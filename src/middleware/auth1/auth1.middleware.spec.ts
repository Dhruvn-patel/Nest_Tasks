import { Auth1Middleware } from './auth1.middleware';

describe('Auth1Middleware', () => {
  it('should be defined', () => {
    expect(new Auth1Middleware()).toBeDefined();
  });
});
