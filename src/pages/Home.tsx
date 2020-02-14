import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { carSportSharp } from 'ionicons/icons';
import { desktop } from 'ionicons/icons';
import { airplaneOutline } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  let lista = [
    { name: 'Coches', icon: carSportSharp, class: 'day' },
    { name: 'Computers', icon: desktop, class: 'day light-scheme' },
    { name: 'Planes', icon: airplaneOutline, class: 'day dark-scheme' },
  ];
  // <ion-icon name="car-sport-outline"></ion-icon>
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {
            lista.map((val, index) => (
              <IonItem class={val.class}>
                <IonLabel>{val.name}</IonLabel>
                <IonIcon icon={val.icon} size="large"></IonIcon>
              </IonItem>
            ))
          }
        </IonList>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
