# Geo6

## Usage examples of the services, apis, data Geo6 provide through Geovation

Geo 6 data integration examples using GIS software, cliet side mappping API's.

Technologies used:
* QGIS
* Leaflet
* Openlayers

Data Providers:
1. British Geological Survey
2. Ordnance Survey

Others to follow.

Usage examples of the services, apis, data Geo6 provide through Geovation

Leaflet integration examples with BGS Data.

For accessing the secure Geoserver WMS please use the proxy in NodeJs (./proxy/node-proxy).
The authorisation is Basic Authentication.

Before use the proxy need to do the following:
1. Create the .env file in ./proxy/node-proxy 
2. Add the enviroment variables as follows

PORT=3000
CLIENT_PROXY_URL=/proxy/wms
BGS_DOMAIN=ogc2.bgs.ac.uk
#add username
SERV_USERNAME=*********
#add password
SERV_PASSWORD=*********

3. When calling the WMS service from leaflet or OpenLayers please replace WMS service url 
From ogc2.bgs.ac.uk to what is set in CLIENT_PROXY_URL variable. 

