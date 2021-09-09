export const element = (elm) => {
  return {
    type: "ELEMENT",
    element: elm,
  };
};

export const equal = (sg) => {
  return {
    type: "EQUAL",
    sign: sg,
  };
};

export const clear = () => {
  return {
    type: "C",
  };
};

export const del = () => {
  return {
    type: "CE",
  };
};