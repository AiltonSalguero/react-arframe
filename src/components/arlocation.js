import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.png';
import { Entity, Image, Camera, Plane, Sky, Text, Scene } from 'react-aframe-ar';

class ArLocation extends React.Component {
    render() {
        console.log('arlocation')
        return (
            <Scene vr-mode-ui="enabled: false" embedded
                arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;'
            >
                <a-assets>
                <img id="my-image" src={store} crossOrigin="anonymous"></img>
                </a-assets>
                <Entity id="point_card_1" gps-entity-place="latitude: -12.0751071; longitude: -77.0803832;" foo
                    look-at="[gps-camera]">
                    <Plane id="background" color="#921ace" height="1.2" width="3.6" position="0 -0.5 -12">
                    </Plane>
                    <Text id="name" value="Abraham Store" scale="1 1 1" position="-0.4 0.1 -10"></Text>
                    <Text id="adress" value="Av La Mar 2223" scale="0.6 0.6 0.6" position="-0.4 -0.2 -10">
                    </Text>
                    <Text id="interior" value="Interior 1" scale="0.6 0.6 0.6" position="-0.4 -0.4 -10">
                    </Text>
                    <Image id="logo" src="#my-image" scale="1 1 1" position="-1 -0.15 -10"></Image>
                </Entity>

                <Entity id="point_card_2" gps-entity-place="latitude: -11.9654429; longitude: -76.9942375;" scale="5 5 5" foo
                    look-at="[gps-camera]">
                    <Plane id="background" color="#B21ace" height="1.2" width="3.6" position="0 -0.5 -12">
                    </Plane>
                    <Text id="name" value="Ailton Store" scale="1 1 1" position="-0.4 0.1 -10"></Text>
                    <Text id="adress" value="Av La Mar 2223" scale="0.6 0.6 0.6" position="-0.4 -0.2 -10">
                    </Text>
                    <Text id="interior" value="Interior 1" scale="0.6 0.6 0.6" position="-0.4 -0.4 -10">
                    </Text>
                    <Image id="logo" src="#my-image" scale="1 1 1" position="-1 -0.15 -10"></Image>
                </Entity>
                <Entity id="point_card_6" gps-entity-place="latitude: -11.9654439; longitude: -76.9942385;" scale="5 5 5" foo
                    look-at="[gps-camera]">
                    <Plane id="background" color="#B21ace" height="1.2" width="3.6" position="0 -0.5 -12">
                    </Plane>
                    <Text id="name" value="Noemy Store" scale="1 1 1" position="-0.4 0.1 -10"></Text>
                    <Text id="adress" value="Av La Mar 2223" scale="0.6 0.6 0.6" position="-0.4 -0.2 -10">
                    </Text>
                    <Text id="interior" value="Interior 1" scale="0.6 0.6 0.6" position="-0.4 -0.4 -10">
                    </Text>
                    <Image id="logo" src="#my-image" scale="1 1 1" position="-1 -0.15 -10"></Image>
                </Entity>



                <Entity id="point_card_3" gps-entity-place="latitude: -12.0750562; longitude: -77.08071819;">
                    <Plane id="background" color="#921ace" look-at="[gps-camera]" height="1.2" width="3.6"
                        position="0 -0.5 -12">
                    </Plane>
                    <Text id="name" value="Kayser" look-at="[gps-camera]" scale="1 1 1" position="-0.4 0.1 -10"></Text>
                    <Text id="adress" value="Av. La Mar 2225 - San Miguel" look-at="[gps-camera]" scale="0.6 0.6 0.6"
                        position="-0.4 -0.2 -10">
                    </Text>
                    <Text id="interior" value="Interior 1" look-at="[gps-camera]" scale="0.6 0.6 0.6"
                        position="-0.4 -0.4 -10">
                    </Text>
                    <Image id="logo" src="#my-image" look-at="[gps-camera]" scale="1 1 1" position="-1 -0.15 -10"></Image>

                </Entity>

                <Entity id="point_card_4" gps-entity-place="latitude: -12.0761542; longitude: -77.083643;">
                    <Plane id="background" color="#921ace" look-at="[gps-camera]" height="1.2" width="3.6"
                        position="0 -0.5 -12">
                    </Plane>
                    <Text id="name" value="Bata" look-at="[gps-camera]" scale="1 1 1" position="-0.4 0.1 -10"></Text>
                    <Text id="adress" value="Av. La Marina 2000, San Miguel" look-at="[gps-camera]" scale="0.6 0.6 0.6"
                        position="-0.4 -0.2 -10">
                    </Text>
                    <Text id="interior" value="Interior 1" look-at="[gps-camera]" scale="0.6 0.6 0.6"
                        position="-0.4 -0.4 -10">
                    </Text>
                    <Image id="logo" src="#my-image" look-at="[gps-camera]" scale="1 1 1" position="-1 -0.15 -10"></Image>

                </Entity>
                <Entity id="point_card_5" gps-entity-place="latitude: -12.0749941; longitude: -77.08168979;" foo>
                    <Plane id="background" color="#921ace" look-at="[gps-camera]" height="1.2" width="3.6"
                        position="0 -0.5 -12">
                    </Plane>
                    <Text id="name" value="Bata" look-at="[gps-camera]" scale="1 1 1" position="-0.4 0.1 -10"></Text>
                    <Text id="adress" value="Av. La Mar 2275, San Miguel" look-at="[gps-camera]" scale="0.6 0.6 0.6"
                        position="-0.4 -0.2 -10">
                    </Text>
                    <Text id="interior" value="Interior 1" look-at="[gps-camera]" scale="0.6 0.6 0.6"
                        position="-0.4 -0.4 -10">
                    </Text>
                    <Image id="logo" src="#my-image" look-at="[gps-camera]" scale="1 1 1" position="-1 -0.15 -10"></Image>

                </Entity>
                <Camera gps-camera rotation-reader> </Camera>

            </Scene>
        );
    }
}

export default ArLocation;
