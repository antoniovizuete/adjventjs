//Day 21
export default function canCarry(capacity, trip) {
  const getCollectData = (a, c) => [...a, [c[1], c[0]]];
  const getDeliveryData = (a, c) => [...a, [c[2], -c[0]]];
  
  const plannedTrip = [
    ...trip.reduce(getCollectData, []),
    ...trip.reduce(getDeliveryData, []),
  ];
  
  const sortByLoctionAndQuantity = ([la, qa], [lb, qb]) => la - lb === 0 ? qa - qb : la - lb;
  const toExceeding = (a, [,q]) => (a += q) > capacity ? Infinity : a;
  
  const exceedsMaxLoad = !plannedTrip
    .sort(sortByLoctionAndQuantity)
    .reduce(toExceeding, 0);
  
  return exceedsMaxLoad;
}

export function canCarry(capacity, trip) {
  const sortByLoctionAndQuantity = ([la, qa], [lb, qb]) => la - lb === 0 ? qa - qb : la - lb;

  const planned = [
    ...trip.reduce((a, c) => [...a, [c[1], c[0]]], []),
    ...trip.reduce((a, c) => [...a, [c[2], -c[0]]], []),
  ].sort(sortByLoctionAndQuantity);

  let current = 0;
  for (const step of planned) {
    const [, q] = step;
    current += q;
    if (current > capacity) return false;
  }
  return true;
}