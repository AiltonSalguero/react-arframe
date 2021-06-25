import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";

export class MapContainer extends Component {

    state = {
        loading: true,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: {
            lat: -12.0647762,
            lng: -77.0165612,
        },
        stores: []
    };

    componentDidMount() {
        //this.get_data_stores();
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude
            var lng =  position.coords.longitude
            console.log("Latitude is :", lat);
            console.log("Longitude is :", lng);
        });
        this.setState({
            /*
            mapCenter: {
                lat: lat,
                lng: lng,
            },
            */
            stores: [
                {
                    "id": 1,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Agustin Gamarra 140",
                    "latitude": -12.0641762,
                    "longitude": -77.1525624
                },
                {
                    "id": 2,
                    "name": "Kayser",
                    "adress": "Av Agustin Gamarra 650",
                    "latitude": -12.0665232,
                    "longitude": -77.01325109999999
                },
                {
                    "id": 3,
                    "name": "Mya Line",
                    "adress": "Av. Agustin Gamarra 1103",
                    "latitude": -12.0695634,
                    "longitude": -77.0128069
                },
                {
                    "id": 4,
                    "name": "Mya Line",
                    "adress": "Av Agustin Gamarra 1105",
                    "latitude": -12.0694625,
                    "longitude": -77.0127509
                },
                {
                    "id": 5,
                    "name": "Pioner",
                    "adress": "Av Agustin Gamarra 445",
                    "latitude": -12.0652889,
                    "longitude": -77.154501
                },
                {
                    "id": 6,
                    "name": "Bata",
                    "adress": "Av. Agustin Gamarra 1017",
                    "latitude": -12.0684229,
                    "longitude": -77.0128529
                },
                {
                    "id": 7,
                    "name": "Kayser",
                    "adress": "Av. La Mar 2225 - San Miguel",
                    "latitude": -12.0750562,
                    "longitude": -77.08071819999999
                },
                {
                    "id": 8,
                    "name": "Bata",
                    "adress": "Av. La Marina 2000, San Miguel",
                    "latitude": -12.0761542,
                    "longitude": -77.083643
                },
                {
                    "id": 9,
                    "name": "Bata",
                    "adress": "Jiron Jose Galvez 522 - B",
                    "latitude": -12.0903509,
                    "longitude": -77.07283799999999
                },
                {
                    "id": 10,
                    "name": "Bata",
                    "adress": "Av. La Mar 2275, San Miguel",
                    "latitude": -12.0749941,
                    "longitude": -77.08168979999999
                },
                {
                    "id": 11,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 12,
                    "name": "Angelas Flowers",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 13,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 14,
                    "name": "Victors Nombre Comercial",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 15,
                    "name": "Angelas Flowers",
                    "adress": "Av. Las Carmelias 234",
                    "latitude": -12.0931147,
                    "longitude": -77.0293717
                },
                {
                    "id": 16,
                    "name": "Abraham Store",
                    "adress": "Av. Universitaria",
                    "latitude": -12.0751071,
                    "longitude": -77.0803832
                }
            ],
            loading: false
        })
        
    }

    distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist;
        }
    }
    /*
    get_nearby_stores(stores,lat,lng){
        const MAX_DIST = 30
        for (const store of stores) {
            if distance(store.latitude,store.longitude,lat,lng,"k") <

        }
    }
    */

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    get_data_stores() {
        const url = 'https://gamarraappserviceapi.azurewebsites.net/api/Usuario/ListUsuariosByCoordenadas/200/200';
        fetch(url).then(res => res.json()).then(data => {
            const stores = data['usuariosRolTiendaByQuery']
            console.log(stores);
            this.get_stores(stores).then(data => {
                this.setState({ stores: data, loading: false })
            })
        })
    }
    async get_location_from_adress(adress) {
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        //Geocode.setApiKey("AIzaSyAwO1y7_y1hk2V9HR1FNCyQFB1JjdCVzk8");
        Geocode.setApiKey("AIzaSyAwO1y7_y1hk2V9HR1FNCyQFB1JjdCVzk8");

        // set response language. Defaults to english.
        Geocode.setLanguage("es");

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("pe");
        // Get latitude & longitude from address.
        return await Geocode.fromAddress(adress)
    }
    async get_stores(data_stores) {
        var id = 1;
        var stores = [];
        var data = data_stores.sort()
        for (const store of data) {
            const adress = store['direccion_Direccion']
            console.log(adress);
            var response = await this.get_location_from_adress(adress);
            console.log(response);
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            stores.push(
                {
                    'id': id,
                    'name': store['nombresComercial'],
                    'adress': adress,
                    'latitude': lat,
                    'longitude': lng
                }
            )
            id++;

        }
        console.log(stores)
        return stores;
    }
    render() {
        if (this.state.loading) {
            return <div>Cargando...</div>
        }
        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng,
                }}
            >
                {this.state.stores.map(marker => {
                    //const onClick = props.onClick.bind(this, marker)
                    return (
                        <Marker
                            key={marker.id}

                            position={{ lat: marker.latitude, lng: marker.longitude }}
                        >
                            <InfoWindow>
                                <div>
                                    {marker.name}
                                </div>
                            </InfoWindow>

                        </Marker>
                    )
                })}


                <InfoWindow
                    pixelOffset={"0"}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAwO1y7_y1hk2V9HR1FNCyQFB1JjdCVzk8')
})(MapContainer)