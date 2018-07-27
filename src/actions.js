// step 2: List out all the ways we can change state

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// {
//  type: INCREMENT 
// }
// {
//  type: DECREMENT
// }

// Actin creator functions
export const actionIncrement = () => {
  return { type: INCREMENT }
};

export const actionDecrement = () => {
  return { type: DECREMENT }
};



