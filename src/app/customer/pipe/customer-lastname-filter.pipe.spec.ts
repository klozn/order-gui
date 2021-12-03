import { CustomerLastnameFilterPipe } from './customer-lastname-filter.pipe';

describe('CustomerLastnameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerLastnameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
