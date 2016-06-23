var Car = function() {

   var gasolineLevel = 10;

   function useGas(amt){
      if(gasolineLevel - amt < 0) {
         console.log("out of gas :-[");
      } else {
         gasolineLevel -= amt;
      }
   }

   return {
      radioStations: "104.5",

      changeStation: function(station){
         this.radioStations = station;
      },
      go: function(speed){ useGas(speed); }
   };
};