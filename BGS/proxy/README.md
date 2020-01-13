For accessing the secure Geoserver WMS please use the proxy in NodeJs (./proxy/node-proxy).
The authorisation is Basic Authentication.

Before use the proxy need to do the following:
1. Run npm install 
2. Create the .env file in ./proxy/node-proxy 
3. Add the enviroment variables as follows

PORT=3000
CLIENT_PROXY_URL=/proxy/wms
#add protocol
PROTOCOL=https
#add domain of the endpoint of the wms service
BGS_DOMAIN=************
#add username
SERV_USERNAME=*********
#add password
SERV_PASSWORD=*********

3. When calling the WMS service from leaflet or OpenLayers please replace WMS service url 
From ogc2.bgs.ac.uk to what is set in CLIENT_PROXY_URL variable. 

