(function () {
  farmOS.map.behaviors.farm_map_emrom = {
    attach: function (instance) {
      var suolo50k = {
        title: 'delineazioni del suolo',
        url: 'http://servizigis.regione.emilia-romagna.it/wms/suoli',
          params: {
	    LAYERS: 'Carta_Suoli_50k',
	    VERSION: '1.3.0',
	    FORMAT: 'image/png8',
	  },
	  visible: true, // defaults to true
	  base: false, // defaults to false
        group: 'Emilia-Romagna',
      };
      var sostorg = {
        title: 'sostanza organica',
        url: 'http://servizigis.regione.emilia-romagna.it/wms/suoli',
          params: {
	    LAYERS: 'Dotazione_in_sostanza_organica',
	    VERSION: '1.3.0',
	    FORMAT: 'image/png',
	  },
	  visible: false, // defaults to true
	  base: false, // defaults to false
  	  opacity: 0.5,
        group: 'Emilia-Romagna',
      };
      var capuso = {
        title: 'capacità uso del suolo',
        url: 'http://servizigis.regione.emilia-romagna.it/wms/suoli',
          params: {
	    LAYERS: 'Capacita_uso_suoli',
	    VERSION: '1.3.0',
	    FORMAT: 'image/png',
	  },
	  visible: false, // defaults to true
	  base: false, // defaults to false
	  opacity: 0.5,
        group: 'Emilia-Romagna',
      };
      var ctr = {
        title: 'carta tecnica regionale',
        url: 'http://servizigis.regione.emilia-romagna.it/wms/dbtr_ctrmultiscala',
          params: {
	    LAYERS: 'DBTR_CtrMultiscala',
	    VERSION: '1.3.0',
	    FORMAT: 'image/png8',
	  },
	  visible: false, // defaults to true
	  base: false, // defaults to false
        group: 'Emilia-Romagna',
      };
      var frane = {
        title: 'coperture quaternarie e frane',
        url: 'http://servizigis.regione.emilia-romagna.it/wms/geologia10k',
          params: {
	    LAYERS: 'Coperture_quaternarie_10k',
	    VERSION: '1.3.0',
	    FORMAT: 'image/png8',
	  },
	  visible: false, // defaults to true
	  base: false, // defaults to false
        group: 'Emilia-Romagna',
      };
      instance.addLayer('wms', capuso);
      instance.addLayer('wms', sostorg);
      instance.addLayer('wms', suolo50k);
      instance.addLayer('wms', ctr);
      instance.addLayer('wms', frane);
    },
  };
}());
