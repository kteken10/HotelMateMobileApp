import images from "../assets/images"

export interface Message {
  id: string
  title?: string
  content: string
  createdAt: number
  senderInfos: any
  receiverInfos: any
  files?: []
}

export const PRIVACY = {
  title: "Consentement au traitement des données personnelles et de santé",
  description:
    "Lorem ipsum dolor sit amet consectetur. Mauris sed neque molestie risus vel consequat. Vitae mi mattis et velit bibendum at elementum sapien phasellus. Enim sit mauris lacus praesent pharetra platea viverra. Parturient netus facilisi nulla pretium leo. Et tristique vitae ac augue integer platea justo in tincidunt. Tempor amet.",
  properties: [
    {
      key: "autorisation_1",
      title: "Autorisation 1",
      value: true,
      required: true,
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris sed neque molestie risus vel consequat. "
    },
    {
      key: "autorisation_2",

      title: "Autorisation 2",
      value: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris sed neque molestie risus vel consequat. "
    },
    {
      key: "autorisation_3",

      title: "Autorisation 3",
      value: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris sed neque molestie risus vel consequat. "
    },
    {
      key: "autorisation_4",

      title: "Autorisation 4",
      required: true,
      value: true,
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris sed neque molestie risus vel consequat. "
    }
  ]
}

export const MESSAGES = [
  {
    id: "1",
    name: "Dr Jean-Paul",
    role: "Pediatre",
    count: 2,
    message: "Lorem ipsum dolor sit amet consectetur. Nisi auctor.",
    date: Date.now()
  },
  {
    id: "2",
    name: "Dr Hambrouize Phillipe",
    role: "Ophtalmologue",
    count: 0,
    message: "Lorem ipsum dolor sit amet consectetur. Nisi auctor.",
    date: Date.now()
  },
  {
    id: "3",
    name: "Dr Dieu-donné Amougui",
    role: "Diététicien",
    count: 0,
    message: "Lorem ipsum dolor sit amet consectetur. Nisi auctor.",
    date: Date.now()
  }
]

export const DELETE_MESSAGE = [
  "I find this application very difficult to use.",
  "I don't find the app useful anymore",
  "I just want to leave",
  "Doctors take to long to accept an appointment.",
  "Others"
]

export const CAROUSEL_ITEMS = [
  {
    url: images.carousel_image_1,
    type: "image",
    title: "Consultation",
    description:
      "Make an appointment and get a professional diagnosis by a doctor now."
  },
  {
    url: images.carousel_image_2,
    type: "video",
    title: ""
  },
  {
    url: images.carousel_image_3,
    title: "You can do your medical checkup for free this month",
    type: "image"
  }
]

export const MESSAGES_CHATS: Message[] = [
  {
    id: "1",
    senderInfos: { name: "Dr Jean-Paul", role: "Diététicien", id: "2" },
    receiverInfos: null,
    createdAt: Date.now(),
    title: "Consultation summary for yesterday",
    content:
      "I hope this message finds you well. I wanted to follow up with you regarding our recent consultation and provide some additional information and"
  },
  {
    id: "2",
    senderInfos: null,
    receiverInfos: { name: "You", role: "Patient", id: "2" },
    createdAt: Date.now(),
    content:
      "I hope this message finds you well. I wanted to follow up with you regarding our recent consultation and provide some additional information and"
  }
]

export const SERVICES = [
  {
    title: "Pôle Chirurgie, Oncologie et Services Médico Techniques",
    content: `Bloc Opératoire
      Chirurgie ambulatoire
      Chirurgie de spécialités
      Chirurgie Gynécologie
      Chirurgie urologie
      Chirurgie viscérale, vasculaire et plastique
      Chirurgie dentaire
      Chirurgie du Rachis - Neurochirurgie
      Chirurgie orthopédique et traumatologique
      Endoscopies digestives et bronchiques`
  },
  {
    title: "Pôle Geriatrie Autonomie",
    content: `Bloc Opératoire
      Chirurgie ambulatoire
      Chirurgie de spécialités
      Chirurgie Gynécologie
      Chirurgie urologie
      Chirurgie viscérale, vasculaire et plastique
      Chirurgie dentaire
      Chirurgie du Rachis - Neurochirurgie
      Chirurgie orthopédique et traumatologique
      Endoscopies digestives et bronchiques`
  },
  {
    title: "Pôle Geriatrie Autonomie",
    content: `Bloc Opératoire
      Chirurgie ambulatoire
      Chirurgie de spécialités
      Chirurgie Gynécologie
      Chirurgie urologie
      Chirurgie viscérale, vasculaire et plastique
      Chirurgie dentaire
      Chirurgie du Rachis - Neurochirurgie
      Chirurgie orthopédique et traumatologique
      Endoscopies digestives et bronchiques`
  }
]

export const HORAIRES = [
  { day: "monday", value: ["8:00 am - 12:00 pm", "1:00 pm - 8:00 pm"] },
  { day: "tuesday", value: ["8:00 am - 8:00 pm"] },
  { day: "webnesday", value: ["8:00 am - 8:00 pm"] },
  { day: "thursday", value: ["8:00 am - 8:00 pm"] },
  { day: "friday", value: ["8:00 am - 12:00 pm", "1:00 pm - 8:00 pm"] },
  { day: "satursday", value: ["8:00 am - 8:00 pm"] },
  { day: "sunday", value: ["8:00 am - 8:00 pm"] }
]

export const PROVIDERS = [
  {
    id: "1",
    name: "Polyclinic j&e memorial",
    location: "Douala • Deido",
    postal_address: "BP: 1750 Rue Deido • Douala",
    favorite: true,
    schedule: HORAIRES,
    email: "exemple@domain.xyz",
    contacts: ["+237690000000", "+237690000000"],
    services: SERVICES,
    image: images.provider_image_1
  },
  {
    id: "2",
    name: "Clinique kerthan",
    location: "Douala • Bonaberi",
    postal_address: "BP: 1750 Rue Deido • Douala",
    favorite: false,
    schedule: HORAIRES,
    email: "exemple@domain.xyz",
    contacts: ["+237690000000", "+237690000000"],
    services: SERVICES,
    image: images.provider_image_2
  },
  {
    id: "3",
    name: "Clinique de l'aeroport(sandjong)",
    location: "Douala • Bonapriso",
    favorite: false,
    schedule: HORAIRES,
    postal_address: "BP: 1750 Rue Deido • Douala",
    email: "exemple@domain.xyz",
    contacts: ["+237690000000", "+237690000000"],
    services: SERVICES,
    image: images.provider_image_3
  },
  {
    id: "4",
    name: "Polyclinique saint emmanuel",
    location: "Douala • Bonapriso",
    favorite: false,
    postal_address: "BP: 1750 Rue Deido • Douala",
    schedule: HORAIRES,
    email: "exemple@domain.xyz",
    contacts: ["+237690000000", "+237690000000"],
    image: images.provider_image_4,
    services: SERVICES
  },
  {
    id: "5",
    postal_address: "BP: 1750 Rue Deido • Douala",
    name: "Clinique saint emmanuel",
    location: "Douala • Deido",
    schedule: HORAIRES,
    favorite: true,
    email: "exemple@domain.xyz",
    contacts: ["+237690000000", "+237690000000"],
    services: SERVICES
  }
]

export const SELECT_ITEMS = [
  { label: "label 1", value: "label 1" },
  { label: "label 2", value: "label 2" },
  { label: "label 3", value: "label 3" },
  { label: "label 4", value: "label 4" },
  { label: "label 5", value: "label 5" }
]

export const STAFF = [
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: ["09h30", "10h30", "11h30", "12h30", "13h30"],
        location: "Douala | Carrefour des immeubles"
      },
      {
        name: "Hopital Central Douala",
        hours: ["09h30", "10h30", "11h30", "12h30", "13h30"],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Jean-Paul",
    role: "Diététicien",
    location: "Hopital Laquintini de Douala",
    id: "1",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Hambrouize Phillipe",
    role: "Diététicien",
    id: "2",
    image: images.doctor_image_1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Dieu-donné Amougui",
    role: "Ophtamologue",
    id: "3",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Mathiew Bengono",
    role: "Ophtamologue",
    id: "4",
    image: images.doctor_image_2,
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Elene Bessala",
    role: "Dentiste",
    id: "5",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Curie De Kouabang",
    role: "Nutritioniste",
    id: "6",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Curie De Kouabang",
    role: "Nutritioniste",
    id: "7",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Curie De Kouabang",
    role: "Nutritioniste",
    id: "8",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Elene Bessala",
    role: "Dentiste",
    id: "9",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  },
  {
    worksplace: [
      {
        name: "Hopital Laquintini de Douala",
        hours: [],
        location: "Douala | Carrefour des immeubles"
      }
    ],
    qualifications: [
      {
        period: "2019 - 2022",
        description: "Spécialisation en médecine générale CHU • Yaoundé"
      }
    ],
    name: "Dr Elene Bessala",
    role: "Ophtamologue",
    id: "10",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper faci lisi nunc malesuada montes lacus. Et feugiat varius sed se nectus varius eu convallis a et. "
  }
]

export const INVOICES = [
  {
    name: "Saint Emmanuel Clinic",
    date: Date.now(),
    status: "paid",
    totalAmount: 200000,
    amountPaid: 0
  },
  {
    name: "Saint Emmanuel Clinic",
    date: Date.now(),
    status: "pending",
    totalAmount: 49000,
    amountPaid: 0
  },
  {
    name: "Saint Emmanuel Clinic",
    date: Date.now(),
    status: "pending",
    totalAmount: 79000,
    amountPaid: 0
  }
]

export const INVOICE_INFO = [
  {
    name: "General practitioner consultation",
    qty: "10",
    unitPrice: "1 000",
    subtotal: "10 000"
  },
  {
    name: "Friendly care",
    qty: "10",
    unitPrice: "1 000",
    subtotal: "10 000"
  },
  {
    name: "General practitioner consultation",
    qty: "10",
    unitPrice: "1 000",
    subtotal: "10 000"
  }
]

export const REQUESTS = [
  {
    id: "1",
    title: "Consultation request",
    subtitle: "Clinique des Perles",
    location: "Kotto immeuble",
    createdAt: Date.now()
  },
  {
    id: "2",
    title: "X-Ray request",
    subtitle: "Clinique des Perles",
    location: "Kotto immeuble",
    createdAt: Date.now()
  },
  {
    id: "3",
    title: "Consultation request",
    subtitle: "Clinique des Perles",
    location: "Kotto immeuble",
    createdAt: Date.now()
  },
  {
    id: "4",
    title: "X-Ray request",
    subtitle: "Clinique des Perles",
    location: "Kotto immeuble",
    createdAt: Date.now()
  }
]

export const CONDITIONS = [
  {
    id: "1",
    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    type: "threatments"
  },
  {
    id: "2",
    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    showIcon: false,
    type: "eyeglasses"
  },
  {
    id: "3",

    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    type: "threatments"
  },
  {
    id: "4",

    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    type: "medications"
  },
  {
    id: "5",
    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    showIcon: false,
    type: "eyeglasses"
  },  {
    id: "6",
    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    showIcon: false,
    type: "eyeglasses"
  },
  {
    id: "7",
    sectionTitle: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    showIcon: false,
    type: "eyeglasses"
  }
]

export const MEDICATIONS = [
  {
    name: "Ibuprofène 500mg",
    quantity: "2 tablets",
    frequency: ["Morning", "Midday", "evening"],
    duration: "15",
    way: "oral",
    showAction: true,
    schedule: [
      {
        date: "value",
        status: {
          morning: true,
          midday: true,
          evening: false
        }
      }
    ]
  },
  {
    name: "Paracétamol 500mg",
    quantity: "2 tablets",
    frequency: ["Morning", "evening"],
    duration: "15",
    way: "oral",
    showAction: false,
    schedule: [
      {
        date: "value",
        status: {
          morning: true,
          evening: false
        }
      }
    ]
  }
]

export const THREATMENTS = [
  {
    id: "1",
    sectionTitle: "Prescription",
    threatmentRef: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    type: "medications",
    medications: MEDICATIONS,
    createdAt: Date.now(),
    name: "Laboratoire Bethany",
    location: "Akwa | +237 690 00 00 00",
    numberOfExams: 2,
    exam_date: Date.now(),
    specialistId: "1",
    started: false
  },
  {
    id: "2",
    sectionTitle: "Eyeglasses",
    threatmentRef: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    showIcon: true,
    type: "eyeglasses",
    createdAt: Date.now(),
    name: "Laboratoire Bethany",
    location: "Akwa | +237 690 00 00 00",
    numberOfExams: 2,
    exam_date: Date.now(),
    eyeglasses: {
      left: ["-1.50", "-0.75", "90°", "+1.25", "", ""],
      right: ["-1.50", "-0.75", "90°", "+1.25", "", ""]
    },
    specialistId: "2"
  },
  {
    id: "3",
    sectionTitle: "Prescription",
    threatmentRef: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    createdAt: Date.now(),
    name: "Laboratoire Bethany",
    location: "Akwa | +237 690 00 00 00",
    numberOfExams: 2,
    exam_date: Date.now(),
    type: "medications",
    medications: MEDICATIONS,
    started: true,
    refill: true,
    specialistId: "1"
  },
  {
    id: "4",
    sectionTitle: "Prescription",
    threatmentRef: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    createdAt: Date.now(),
    name: "Laboratoire Bethany",
    location: "Akwa | +237 690 00 00 00",
    numberOfExams: 2,
    exam_date: Date.now(),
    type: "medications",
    medications: MEDICATIONS,
    started: true,
    specialistId: "1"
  },
  {
    id: "5",
    sectionTitle: "Eyeglasses",
    threatmentRef: "#IDORD",
    title: "Chirurgie - Hopital Laquintini",
    subtitle: "Par Dr Jean-Paul",
    date: Date.now(),
    showIcon: true,
    createdAt: Date.now(),
    name: "Laboratoire Bethany",
    location: "Akwa | +237 690 00 00 00",
    numberOfExams: 2,
    exam_date: Date.now(),
    type: "eyeglasses",

    eyeglasses: {
      left: ["-1.50", "-0.75", "90°", "+1.25", "", ""],
      right: ["-1.50", "-0.75", "90°", "+1.25", "", ""]
    },
    specialistId: "2"
  }
]

export const ACCOUNTS = [
  {
    id: "1",
    name: "Joshua Mokobe",
    gender: "male",
    age: "28 Years"
  },
  { id: "2", name: "Anne-Marie Mokobe", gender: "female", age: "18 Years" }
]
export const NOTIFICATION = [
  {
    id: "1",
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum vel nulla urna faucibus cursus. Laoreet et urna am",
    heure: "il y a 10m",
    type: "security",
    status: true
  },
  {
    id: "2",
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum",
    heure: "il y a 1h",
    type: "security"
  },
  {
    id: "3",
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum",
    heure: "il y a 1h",
    type: "appointment"
  },
  {
    id: "4",
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum",
    heure: "il y a 1h",
    type: "message"
  },
  {
    id: "5",
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum",
    heure: "il y a 1h",
    type: "stats"
  },
  {
    id: "6",
    
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum",
    heure: "il y a 1h",
    type: "appointmentMissed"
  },
  {
    id: "7",
    descrition:
      "Lorem ipsum dolor sit amet consectetur. Aliquet a magna luctus ipsum",
    heure: "il y a 1h",
    type: "messageChat"
  }
]

export const APPOINTMENTS = [
  {
    id: "1",
    name: "Dr Jeanne Marie",
    role: "Diététicien",
    location: "Hopital général de Douala",
    date: Date.now(),
    status: "PENDING",
    responseType: "patient",
    content: [
      {
        title: "reason",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      },
      {
        title: "Others informations",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      }
    ]
  },
  {
    id: "2",
    name: "Dr Jackson Fincham",
    role: "Dentist",
    location: "Hopital général de Douala",
    date: Date.now(),
    status: "PENDING",
    responseType: "doctor",
    content: [
      {
        title: "reason",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      },
      {
        title: "Others informations",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      }
    ]
  },
  {
    id: "3",
    name: "Dr Jeanne Marie",
    role: "Diététicien",
    location: "Hopital général de Douala",
    date: Date.now(),
    status: "UPCOMING",
    content: [
      {
        title: "reason",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      },
      {
        title: "Others informations",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      }
    ]
  },
  {
    id: "4",
    name: "Dr Jeanne Marie",
    role: "Diététicien",
    location: "Hopital général de Douala",
    date: Date.now(),
    status: "DONE",
    content: [
      {
        title: "reason",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      },
      {
        title: "Others informations",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      }
    ]
  },
  {
    id: "5",
    name: "Dr Jeanne Marie",
    role: "Diététicien",
    location: "Hopital général de Douala",
    date: Date.now(),
    status: "CANCELLED",
    content: [
      {
        title: "reason",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      },
      {
        title: "Others informations",
        description:
          "Lorem ipsum dolor sit amet consectetur. Nulla ultrices neque quis faucibus dignissim. Adipiscing ipsum urna varius"
      }
    ]
  }
]

export const VITAL_SIGN = {
  lastUpdatedAt: Date.now(),
  weight: 90,
  height: 1.7,
  temperature: "37° C",
  blood_pressure: "120 mm Ag",
  heart_rate: "90 bpm"
}






export const VITALSIGNITEMS = [
  {
    date: new Date("2023-10-15"),
    title: "Blood pressure",
    location: "Clinic de Perles",
    value: "120/70mmHg",
    id: "1",
    content: "Blood pressure measured at the clinic Blood pressure measured at the clinic. Blood pressure measured at the clinic.Blood pressure measured at the clinic.Blood pressure measured at the clinic."
  },

  {
    date: new Date("2023-10-15T09:45:00"),
    title: "Temperature",
    location: "Clinic de Perles",
    value: "36.7 °C",
    id: "2",
    content: "Temperature recorded during the checkup ,Temperature recorded during the checkup. Temperature recorded during the checkup. Temperature recorded during the checkup."
  },

  {
    date: new Date("2023-10-15T10:30:00"),
    title: "Weight",
    location: "Hôpital Adlucem Bonamoussadi",
    value: "70 kg",
    id: "3",
    content: "Weight measured at the hospital, Temperature recorded during the checkup. , Temperature recorded during the checkup."
  },

  {
    date: new Date("2023-10-15T11:15:00"),
    title: "Blood pressure",
    location: "Hôpital Adlucem Bonamoussadi",
    value: "130/75mmHg",
    id: "4",
    content: "Blood pressure checked at the hospital, Temperature recorded during the checkup. , Temperature recorded during the checkup."
  },
  
  {
    date: new Date("2023-10-15T12:00:00"),
    title: "Blood pressure",
    location: "Clinic de Perles",
    value: "125/72mmHg",
    id: "5",
    content: "Blood pressure rechecked at the clinic , Temperature recorded during the checkup. "
  }
];

export const patientData = {
  firstName: "Jane",
  lastName: "Madonsela",
  gender: "Female",
  imageUri: '',
  maritalStatus: "Single",
  dateOfBirth: "12 May 1990",
  predredLanguage: "French",
  phoneNumber: "+1234567890",
  primaryCarePhysician: "jONDO JONDO cybor pedro", 
  temperature: "37°C",
  heartRate: "90 bpm",
  bloodPressure: "90 mm Ag ",
  weight: "102 Kg",
  height: "1.74 m",
}
export const ALLERGIES = [
  {
    title: "Allergy to penicillin",
    info: "severe | Around Nov 2012",
    id: "1",
    name: "Dr Jean-Pierre Madiba",
    location: "Hopital Laquintini Douala",
    createdAt: Date.now(),
    condition:
      "Chronic diseases include asthma, heart disease, stroke, diabetes and arthritis. These diseases often can be prevented or controlled keeping risk factors, including high blood pressure."
  },
  {
    title: "Allergy to penicillin",
    id: "2",
    type: "",
    name: "Dr Jean-Pierre Madiba",
    location: "Hopital Laquintini Douala",
    createdAt: Date.now()
  },
  {
    title: "Allergy to penicillin",
    id: "3",
    type: "",
    name: "Dr Jean-Pierre Madiba",
    location: "Hopital Laquintini Douala",
    createdAt: Date.now()
  },
  {
    title: "Allergy to penicillin",
    id: "4",
    type: "severe | Around Nov 2012",
    name: "Dr Jean-Pierre Madiba",
    location: "Hopital Laquintini Douala",
    createdAt: Date.now(),
    condition:
      "Chronic diseases include asthma, heart disease, stroke, diabetes and arthritis. These diseases often can be prevented or controlled keeping risk factors, including high blood pressure."
  }
]

export const TERMS_AND_CONDITIONS = [
  ` Merci d'avoir choisi notre application santé ! Avant que vous ne
    commenciez à utiliser notre application, nous voulons nous assurer
    que vous comprenez nos conditions générales afin que nous
    puissions vous fournir le meilleur service possible. En utilisant
    notre application santé, vous acceptez les conditions générales
    suivantes :`,
  ` L'application est destinée à des fins d'information uniquement
    et ne doit pas être utilisée comme substitut à un conseil ou à un
    traitement médical professionnel. Veuillez consulter votre
    fournisseur de soins de santé avant de modifier votre régime de
    santé.`,
  `Nous recueillons des informations personnelles lorsque vous
    vous inscrivez à notre application. Nous prenons votre vie privée
    au sérieux et nous ne partagerons ni ne vendrons vos informations
    à des tiers sans votre consentement.`,
  ` Bien que nous nous efforcions de fournir des informations
  exactes et à jour, nous ne garantissons pas l'exactitude ou
  l'exhaustivité des informations fournies dans l'application. Nous
  ne sommes pas responsables des préjudices ou dommages résultant de
  l'utilisation de notre application ou de toute information qu'elle
  contient.`,
  `Vous acceptez de ne pas utiliser notre application santé à des
  fins illégales ou interdites line.`,
  `Nous nous réservons le droit de modifier, de suspendre ou
  d'interrompre l'application à to Vous acceptez de ne pas utiliser notre application santé à des
  fins illégales ou interdites .`,
  `Nous nous réservons le droit de modifier, de suspendre ou
  d'interrompre l'application à to Vous acceptez de ne pas utiliser notre application santé à des
  fins illégales ou interdites.`,
  `Nous nous réservons le droit de modifier, de suspendre ou
  d'interrompre l'application à to Vous acceptez de ne pas utiliser notre application santé à des
  fins illégales ou interdites. `,
  `Nous nous réservons le droit de modifier, de suspendre ou
  d'interrompre l'application à to `
]

export const INSURANCE_NUMBER = "3234523452345"

export const INSURANCE_LIST = {
  3234523452345: {
    id: "3234523452345",
    beneficialId: "id-1",
    payerId: "id-1p",
    insuranceNumber: "3234523452345",
    date: Date.now(),
    email: "alliancefrontdeck@gmail.com",
    name: "Alliance Insurance Group",
    contacts: ["+237860234234", "+237860234234"],
    address:
      "St Loius Appartment Kotto, B.P. 2989, Rue-Manguiers, Douala, Cameroon",
    benefit: "xxxx xxxx xxxx xxxx x",
    coverage: "80%",
    amount_guarantee: "300 000 XAF",
    amount_limit: "1 000 000 XAF",
    medicalRecordId: "1"
  },
  3234523452346: {
    id: "3234523452346",
    beneficialId: "id-1",
    payerId: "id-1p",
    insuranceNumber: "3234523452346",
    date: Date.now(),
    email: "prudential@gmail.com",
    name: "Prudential Insurance Company",
    contacts: ["+237860234234", "+237860234234"],
    address: "Newark, New Jersey, États-Unis",
    benefit: "xxxx xxxx xxxx xxxx x",
    coverage: "90%",
    amount_guarantee: "1000 000 XAF",
    amount_limit: "2 000 000 XAF",
    medicalRecordId: "1"
  },
  3234523452347: {
    id: "3234523452347",
    beneficialId: "id-2",
    payerId: "id-2p",
    insuranceNumber: "3234523452347",
    date: Date.now(),
    email: "progressive@gmail.com",
    name: "Progressive Insurance Corporation",
    contacts: ["+1234567890", "+9876543210"],
    address: "1234 Elm Street, Springfield, IL, USA",
    benefit: "xxxx xxxx xxxx xxxx y",
    coverage: "85%",
    amount_guarantee: "500,000 USD",
    amount_limit: "1,500,000 USD",
    medicalRecordId: "2"
  },
  3234523452348: {
    id: "3234523452348",
    beneficialId: "id-3",
    payerId: "id-3p",
    insuranceNumber: "3234523452348",
    date: Date.now(),
    email: "metlife@gmail.com",
    name: "MetLife Insurance Corporation",
    contacts: ["+1112233445", "+5556677889"],
    address: "5678 Oak Avenue, Chicago, IL, USA",
    benefit: "xxxx xxxx xxxx xxxx z",
    coverage: "75%",
    amount_guarantee: "400,000 USD",
    amount_limit: "1,200,000 USD",
    medicalRecordId: "3"
  },
  3234523452349: {
    id: "3234523452349",
    beneficialId: "id-4",
    payerId: "id-4p",
    insuranceNumber: "3234523452349",
    date: Date.now(),
    email: "geico@gmail.com",
    name: "GEICO Insurance",
    contacts: ["+9876543210", "+1234567890"],
    address: "123 Main Street, Chevy Chase, MD, USA",
    benefit: "xxxx xxxx xxxx xxxx w",
    coverage: "70%",
    amount_guarantee: "750,000 USD",
    amount_limit: "1,750,000 USD",
    medicalRecordId: "4"
  },
  3234523452350: {
    id: "3234523452350",
    beneficialId: "id-5",
    payerId: "id-5p",
    insuranceNumber: "3234523452350",
    date: Date.now(),
    email: "aetna@gmail.com",
    name: "Aetna Insurance",
    contacts: ["+5556677889", "+1112233445"],
    address: "789 Elm Avenue, Hartford, CT, USA",
    benefit: "xxxx xxxx xxxx xxxx v",
    coverage: "95%",
    amount_guarantee: "800,000 USD",
    amount_limit: "2,500,000 USD",
    medicalRecordId: "5"
  }
  
} as any
