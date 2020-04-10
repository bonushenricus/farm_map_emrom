# farm_map_emrom
Farmos map from wms of italian administrative region Emilia-Romagna

See http://geoportale.regione.emilia-romagna.it/it/services/servizi-OGC/servizio-di-consultazione

Exactly:
* wms of soil http://geoportale.regione.emilia-romagna.it/it/services/servizi-OGC/servizio-di-consultazione/ambiente/carta-dei-suoli-wms :
  * layer 'Carta_Suoli_50k' named in the module 'delineazioni del suolo': the delineations are areas defined for pedological history, which group different types of terrain. They are defined by numbers. For info on a number the URL address is this: https://agri.regione.emilia-romagna.it/Suoli/jsp/common/pannelloDelineazione.jspx?delin_id=9768 where id=number of delineation
  * layer 'Dotazione_in_sostanza_organica' named in the module 'sostanza organica' : grid with organic matter calculated with geostatistics with respect to soil samples. Legend: http://servizigis.regione.emilia-romagna.it/wms/suoli?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Dotazione_in_sostanza_organica
  * layer 'Capacita_uso_suoli' named in the module 'capacità uso del suolo': evaluation of the soil capacity to produce normal crops and forest species for long periods of time, without it show phenomena of soil degradation. The classification document: https://ambiente.regione.emilia-romagna.it/it/geologia/suoli/pdf/scheda_capacita_uso.pdf/@@download/file/scheda_capacita_uso.pdf . The legend: http://servizigis.regione.emilia-romagna.it/wms/suoli?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Capacita_uso_suoli
* wms of geology http://servizigis.regione.emilia-romagna.it/wms/geologia10k :
  * layer 'Coperture_quaternarie_10k' named in the module ''coperture quaternarie e frane': representing landslide deposits, other slope deposits and alluvial deposits. The covered geographical area includes the entire mountain hilly area of the region for landslides and deposits on the slopes, and also the plains for alluvial deposits. Legend: http://servizigis.regione.emilia-romagna.it/wms/geologia10k?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=Coperture_quaternarie_10K
* wms of topography http://servizigis.regione.emilia-romagna.it/wms/dbtr_ctrmultiscala layer same name ('carta tecnica regionale' in the module) at multiple scales.
