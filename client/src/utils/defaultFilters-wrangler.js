export const settingDefault = (item) => {
  if (Array.isArray(item)) {
    return 'All';
  } else {
    return item;
  }
};

export const recommendedCheckValue = (item) => {
  return !Array.isArray(item);
};
