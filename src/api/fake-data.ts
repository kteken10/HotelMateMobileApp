import { Organization, Practitioner as PractitionerType } from "fhir/r4";


export const Providers: Organization[] = [
    {
        id: 'Organization/56789',
        
        active: false,
        name: 'MediCare Clinic',
        resourceType: 'Organization',
        address: [
            {
                city: "Bertoua",
                state: "Est",
                line: [],
                postalCode: ""
            }
        ], 
    },
    {
        id: 'Organization/56788',
        active: true,
        name: 'HealthPlus Hospital',
        resourceType: 'Organization',
        address: [
            {
                city: "Yaoundé",
                state: "Centre",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/56738',
        active: true,
        name: 'Wellness Center',
        resourceType: 'Organization',
        address: [
            {
                city: "Limbe",
                state: "Sud Est",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/56728',
        active: true,
        name: 'GreenLeaf Medical Services',
        resourceType: 'Organization',
        address: [
            {
                city: "Maroua",
                state: "Nord",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/56718',
        active: true,
        name: 'BlueSky Community Health Center',
        resourceType: 'Organization',
        address: [
            {
                city: "Douala",
                state: "Littoral",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/56708',
        active: true,
        name: 'Sunrise Healthcare Group',
        resourceType: 'Organization',
        address: [
            {
                city: "Ngaoundéré",
                state: "Adamaoua",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/56733',
        active: true,
        name: 'AlphaCare Clinic',
        resourceType: 'Organization',
        address: [
            {
                city: "Bamenda",
                state: "Nord Ouest",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/42788',
        active: true,
        name: 'Unity Health Center',
        resourceType: 'Organization',
        address: [
            {
                city: "Bafoussam",
                state: "Ouest",
                line: [],
                postalCode: ""
            }
        ]
    },
    {
        id: 'Organization/26788',
        active: true,
        name: 'Evergreen Medical Group',
        resourceType: 'Organization',
        address: [
            {
                city: "Garoua",
                state: "Nord",
                line: [],
                postalCode: ""
            }
        ]
    }
];


export const Practitioner:PractitionerType []=[
{
  id:'Prac1',
  resourceType:'Practitioner',
  qualification:[
    {
      identifier:[],
      code:{},
      period:{},
      issuer:{
        reference:"Departement/77833",
        display:"Clinic Of Bonandjo"
      }
    }
  ],
  name:[
    { 
      family:'Hugue Anatold',
     
    }
  ],
},
{
    id:'Prac2',
    resourceType:'Practitioner',
    qualification:[
      {
        identifier:[],
        code:{},
        period:{},
        issuer:{
          reference:"Departement/77833",
          display:"Clinic Of Bonandjo"
        }
      }
    ],
    name:[
      {  
        prefix:['Dr'],
        family:'Benjamin Marold',
        given:['Laurent','Bernoui','Hector']
        
      }
    ],
  },
  {
    id:'Prac3',
    resourceType:'Practitioner',
    qualification:[
      {
        identifier:[],
        code:{},
        period:{},
        issuer:{
          reference:"Departement/77833",
          display:"Clinic Of Bonandjo"
        }
      }
    ],
    name:[
      { 
        family:'Frank Marco',
        
      }
    ],
  },
  {
    id:'Prac5',
    resourceType:'Practitioner',
    qualification:[
      {
        identifier:[],
        code:{},
        period:{},
        issuer:{
          reference:"Departement/77833",
          display:"Clinic Of Bonandjo"
        }
      }
    ],
    name:[
      { 
        family:'Lucas Belerin',
        given:['Hector']
      
      }
    ],
  }
]

export const departement:Organization[] = [
  {
    id: 'Departement/77833',
    active: true,
    name: 'Clinic Of Bonandjo',
    resourceType: 'Organization',
    partOf: {
      reference: "Organization/56789",
      display: "MediCare Clinic"
    },
    address: [
        {
            city: "Garoua",
            state: "Nord",
            line: [],
            postalCode: ""
        }
    ]
}
]