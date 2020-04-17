(function () {
  farmOS.map.behaviors.farm_map_emrom = {
    attach: function (instance) {
      var suolo50k = {
        title: 'delineazioni del suolo',
        url: 'http://servizigis.regione.emilia-romagna.it/wms/suoli',
	attribution: '<a href="https://agri.regione.emilia-romagna.it/Suoli/jsp/common/pannelloDelineazione.jspx?delin_id=9768">(url delin_id=delineazione) CC-BY 3.0 Serv. geologico, sismico e dei suoli - Reg. Emilia-Romagna</a>',
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
        attribution: '<a href="http://servizigis.regione.emilia-romagna.it/wms/suoli?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Dotazione_in_sostanza_organica">(url legenda) CC-BY 3.0 Serv. geologico, sismico e dei suoli - Reg. Emilia-Romagna</a>',
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
        attribution: '<a href="https://ambiente.regione.emilia-romagna.it/it/geologia/suoli/pdf/scheda_capacita_uso.pdf/@@download/file/scheda_capacita_uso.pdf">(url doc pdf) CC-BY 3.0 Serv. geologico, sismico e dei suoli - Reg. Emilia-Romagna</a>',
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
        attribution: '<a href="http://servizigis.regione.emilia-romagna.it/wms/dbtr_ctrmultiscala?request=GetCapabilities&service=WMS">(url capabilities) CC-BY 3.0 Serv. Stat., Comunic., S.I.G., partecipazione - Reg. Emilia-Romagna</a>',
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
        attribution: '<a href="http://servizigis.regione.emilia-romagna.it/wms/geologia10k?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Coperture_quaternarie_10K">(url legenda) CC-BY 3.0 Serv. geologico, sismico e dei suoli - Reg. Emilia-Romagna</a>',
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
