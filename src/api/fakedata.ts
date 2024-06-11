import axios from 'axios';
import { useEffect } from 'react';


export const ChambreHotels = [
    {  name: 'Chambre standard',
      id:1,
      type_chambre:'Standard',
      prix_par_nuit:'10000Fcfa',
      active: true,
      description: `Découvrez notre élégante chambre double, conçue pour offrir un confort optimal et une atmosphère relaxante à nos clients. Cette chambre spacieuse est dotée de deux lits simples, chacun équipé de draps de haute qualité et d'oreillers moelleux pour garantir une nuit de sommeil réparatrice.`,
      image_path: require('../assets/images/ChambreBlanche.jpg'),
    },
    {  name: 'Chambre Vip',
      type_chambre:'Standard',
      prix_par_nuit:'30000Fcfa',
      active: true,
      description: `Découvrez notre élégante chambre double, conçue pour offrir un confort optimal et une atmosphère relaxante à nos clients. Cette chambre spacieuse est dotée de deux lits simples, chacun équipé de draps de haute qualité et d'oreillers moelleux pour garantir une nuit de sommeil réparatrice.`,
      image_path: require('../assets/images/ChambreEclaireVeilleuse.jpg'),
    },
    {  name: 'Chambre Vip',
      type_chambre:'Standard',
      prix_par_nuit:'30000Fcfa',
      active: false,
      description: `Découvrez notre élégante chambre double, conçue pour offrir un confort optimal et une atmosphère relaxante à nos clients. Cette chambre spacieuse est dotée de deux lits simples, chacun équipé de draps de haute qualité et d'oreillers moelleux pour garantir une nuit de sommeil réparatrice.`,
      image_path: require('../assets/images/ChambreLumineuseTapisBlanc.jpg'),
    },
    {  name: 'Chambre Luxieuse',
      type_chambre:'Standard',
      prix_par_nuit:'30000Fcfa',
      active: false,
      description: `Découvrez notre élégante chambre double, conçue pour offrir un confort optimal et une atmosphère relaxante à nos clients. Cette chambre spacieuse est dotée de deux lits simples, chacun équipé de draps de haute qualité et d'oreillers moelleux pour garantir une nuit de sommeil réparatrice.`,
      image_path: require('../assets/images/DoubleLitChambreModerne.jpg'),
    }
    
  ];
  