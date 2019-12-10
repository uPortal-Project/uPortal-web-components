export default function(a, b) {
  // if parameter is missing or an invalid integer, Not a Number (NaN) will be set
  let aCustomOrder = parseInt(a?.parameters?.escoMenuOrder?.value, 10);
  let bCustomOrder = parseInt(b?.parameters?.escoMenuOrder?.value, 10);

  if (isNaN(aCustomOrder)) {
    aCustomOrder = parseInt(a?.layoutObject?.parameters?.escoMenuOrder, 10);
  }
  if (isNaN(bCustomOrder)) {
    bCustomOrder = parseInt(b?.layoutObject?.parameters?.escoMenuOrder, 10);
  }

  // if neither has a custom order, sort by title
  if (isNaN(aCustomOrder) && isNaN(bCustomOrder)) {
    return a.title
      .trim()
      .toLowerCase()
      .localeCompare(b.title.trim().toLowerCase(), undefined, {
        numberic: true
      });
  }

  // sort the items with custom order in front of items without
  if (isNaN(aCustomOrder)) {
    return 1;
  }
  if (isNaN(bCustomOrder)) {
    return -1;
  }

  // both items are custom, sort using the number line
  // lower numbers first, higher numbers after
  return aCustomOrder - bCustomOrder;
}
