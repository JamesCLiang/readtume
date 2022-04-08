import PaymentModelGenerated from "./generated/PaymentModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PaymentModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PaymentModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PaymentModelGenerated,
  ...customModel
};
