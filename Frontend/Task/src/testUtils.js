export const findTagsWithTestAttribute = (wrapper, attributeValue) =>
  wrapper.find(`[data-test='${attributeValue}']`);
