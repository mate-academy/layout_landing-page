export function getProducts(): Promise {
  return fetch(`api/products`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch products');
  });
}

export function getDetailedProducts(): Promise {
  return fetch(`api/details`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch details');
  });
}

//треба створити типи і типізувати це все
