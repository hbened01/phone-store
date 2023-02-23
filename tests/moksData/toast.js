const successCase = {
  type: "success",
  message: "test of success",
  isNotify: true,
  notifyTimeout: jest.fn(() => true),
  handleClosed: jest.fn(() => false),
};

const warningCase = {
  type: "warning",
  message: "test of warning",
  isNotify: true,
  notifyTimeout: jest.fn(() => true),
  handleClosed: jest.fn(() => false),
};

const dangerCase = {
  type: "danger",
  message: "test of danger",
  isNotify: true,
  notifyTimeout: jest.fn(() => true),
  handleClosed: jest.fn(() => false),
};

export { warningCase, successCase, dangerCase };
