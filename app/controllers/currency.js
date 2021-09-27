import Ember from 'ember';

export default Ember.Controller.extend({
  currency: "",
  type: "",
  flag: false,

  actions:{
    update(e){
      this.set('currency', e.target.value);
      this.set('flag', false);
    },
    setSelection(selected){
      this.set('type', selected);
      this.set('flag', false);
    },
    toggle(){
      this.set('flag', true);
    }
  }
});
