var bgs_wms_services = [{
    wms_url:"http://ogc.bgs.ac.uk/cgi-bin/BGS_Bedrock_and_Superficial_Geology/wms",
    layers:[
                {name:"BGS_EN_Bedrock_and_Superficial_Geology"},
                {name:"GBR_BGS_625k_BLT"},
                {name:"GBR_BGS_625k_BLS"}
            ]
}]

 /* Be sure that you are using a proxy to do the authenticaticed requests 
    to the  WMS as shown below in the wms_url property */
var bgs_proxy_url="http://localhost:3000/proxy/wms/wss/service/ags-relay/Live_AGS/httpauth/arcgis/services/SecureWMS/Bundle_BGSCivils/MapServer/WMSServer";

var bgs_wms_premium_products_civil = [{
    wms_url:bgs_proxy_url,
    layers:[
                {name:"DiGMapPlus.Foundations"},
                {name:"DiGMapPlus.Fill.Use"},
                {name:"DiGMapPlus.Bulking"},
                {name:"DiGMapPlus.Discontinuities.Structure"}
            ]
}];

