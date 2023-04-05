import { createLogger } from '../logger';

it('should return stored logs', () => {
  const logger = createLogger('user logen');

  expect(logger.getLogs()).toEqual([]);
});

it('should save  log message', () => {
  const logger = createLogger('user logen');
  logger.log('login success');

  expect(logger.getLogs()).toEqual(['log - user logen - login success']);
});

it('should save  errors', () => {
  const logger = createLogger('user logen');
  logger.error('login failed');

  expect(logger.getLogs()).toEqual(['error - user logen - login failed']);
});