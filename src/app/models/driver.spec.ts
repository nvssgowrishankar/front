import { Driver } from './driver';

describe('Driver', () => {
  it('should create a driver object', () => {
    const driver: Driver = {
      driverId: 1,
      username: 'John Doe',
      password: 'hlo',
      rating: 0
    };
    expect(driver).toBeTruthy();
  });
});
