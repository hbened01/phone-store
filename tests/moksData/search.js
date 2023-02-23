const list = [
  {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  },
  {
    id: "cGjFJlmqNPIwU59AOcY8H",
    brand: "Acer",
    model: "Liquid Z6 Plus",
    price: "250",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/cGjFJlmqNPIwU59AOcY8H.jpg",
  },
  {
    id: "8hKbH2UHPM_944nRHYN1n",
    brand: "Acer",
    model: "Liquid Z6",
    price: "120",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
  },
  {
    id: "xyPoqGJxYR4Nn3yVGQcfI",
    brand: "Acer",
    model: "Iconia Tab 10 A3-A40",
    price: "230",
    imgUrl:
      "https://itx-frontend-test.onrender.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg",
  },
];

const dataSearch = {
  count: list.length,
  placeholder: "test of placeholder",
  onChange: jest.fn((data) => console.log(data)),
};

export { dataSearch };
