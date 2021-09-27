import Ember from 'ember';

export function currencyConverter([currency], named) {
  if(named.type === "rupee"){
    return '₹'+currency*70;
  }
  else{
    return '$'+currency/70;
  }
}

export default Ember.Helper.helper(currencyConverter);
