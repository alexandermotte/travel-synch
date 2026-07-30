export type LegalLang = "en" | "fr" | "de" | "pt" | "es" | "it" | "el";

interface LegalNoticeContent {
  badge: string;
  title: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
}

export const legalNoticeTranslations: Record<LegalLang, LegalNoticeContent> = {
  en: {
    badge: "Legal",
    title: "Legal Notice",
    sections: [
      { heading: "Website", paragraphs: ["exec-pass.com"] },
      { heading: "Website Operator", paragraphs: [
        "Company name: Marvelliant B.V.",
        "Registered address: Bos en Lommerplein 280, 1055RW Amsterdam",
        "Company registration number: 96513519 Chambre commerce RSIN 867643298",
        "Share capital: 1000.00 EUR",
      ] },
      { heading: "Contact", paragraphs: [
        "Phone number: +4420 3936 2491",
        "Email address: contact@exec-pass.com",
        "Postal contact address available: Bos en Lommerplein 280, 1055RW Amsterdam",
      ] },
      { heading: "Publication Director", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Hosting Provider", paragraphs: [
        "Company name: Vercel Inc.",
        "Address: 440 N. Barranca Ave #4133, Covina, California 91723, United States",
        "Phone number: (951) 383-6898",
      ] },
    ],
  },
  fr: {
    badge: "Juridique",
    title: "Mentions Légales",
    sections: [
      { heading: "Site web", paragraphs: ["exec-pass.com"] },
      { heading: "Opérateur du site", paragraphs: [
        "Raison sociale : Marvelliant B.V.",
        "Adresse du siège : Bos en Lommerplein 280, 1055RW Amsterdam",
        "Numéro d'immatriculation : 96513519 Chambre commerce RSIN 867643298",
        "Capital social : 1000,00 EUR",
      ] },
      { heading: "Contact", paragraphs: [
        "Téléphone : +4420 3936 2491",
        "Adresse email : contact@exec-pass.com",
        "Adresse postale : Bos en Lommerplein 280, 1055RW Amsterdam",
      ] },
      { heading: "Directeur de publication", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Hébergeur", paragraphs: [
        "Raison sociale : Vercel Inc.",
        "Adresse : 440 N. Barranca Ave #4133, Covina, California 91723, États-Unis",
        "Téléphone : (951) 383-6898",
      ] },
    ],
  },
  de: {
    badge: "Rechtliches",
    title: "Impressum",
    sections: [
      { heading: "Website", paragraphs: ["exec-pass.com"] },
      { heading: "Betreiber der Website", paragraphs: [
        "Firmenname: Marvelliant B.V.",
        "Eingetragene Adresse: Bos en Lommerplein 280, 1055RW Amsterdam",
        "Handelsregisternummer: 96513519 Chambre commerce RSIN 867643298",
        "Stammkapital: 1.000,00 EUR",
      ] },
      { heading: "Kontakt", paragraphs: [
        "Telefon: +4420 3936 2491",
        "E-Mail: contact@exec-pass.com",
        "Postanschrift: Bos en Lommerplein 280, 1055RW Amsterdam",
      ] },
      { heading: "Verantwortlicher Herausgeber", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Hosting-Anbieter", paragraphs: [
        "Firmenname: Vercel Inc.",
        "Adresse: 440 N. Barranca Ave #4133, Covina, California 91723, Vereinigte Staaten",
        "Telefon: (951) 383-6898",
      ] },
    ],
  },
  pt: {
    badge: "Jurídico",
    title: "Aviso Legal",
    sections: [
      { heading: "Website", paragraphs: ["exec-pass.com"] },
      { heading: "Operador do Website", paragraphs: [
        "Nome da empresa: Marvelliant B.V.",
        "Morada registada: Bos en Lommerplein 280, 1055RW Amesterdão",
        "Número de registo: 96513519 Chambre commerce RSIN 867643298",
        "Capital social: 1.000,00 EUR",
      ] },
      { heading: "Contacto", paragraphs: [
        "Telefone: +4420 3936 2491",
        "Email: contact@exec-pass.com",
        "Morada postal: Bos en Lommerplein 280, 1055RW Amesterdão",
      ] },
      { heading: "Diretor de Publicação", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Fornecedor de Alojamento", paragraphs: [
        "Nome da empresa: Vercel Inc.",
        "Morada: 440 N. Barranca Ave #4133, Covina, California 91723, Estados Unidos",
        "Telefone: (951) 383-6898",
      ] },
    ],
  },
  es: {
    badge: "Legal",
    title: "Aviso Legal",
    sections: [
      { heading: "Sitio web", paragraphs: ["exec-pass.com"] },
      { heading: "Operador del sitio web", paragraphs: [
        "Nombre de la empresa: Marvelliant B.V.",
        "Dirección registrada: Bos en Lommerplein 280, 1055RW Ámsterdam",
        "Número de registro: 96513519 Chambre commerce RSIN 867643298",
        "Capital social: 1.000,00 EUR",
      ] },
      { heading: "Contacto", paragraphs: [
        "Teléfono: +4420 3936 2491",
        "Correo electrónico: contact@exec-pass.com",
        "Dirección postal: Bos en Lommerplein 280, 1055RW Ámsterdam",
      ] },
      { heading: "Director de Publicación", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Proveedor de Alojamiento", paragraphs: [
        "Nombre de la empresa: Vercel Inc.",
        "Dirección: 440 N. Barranca Ave #4133, Covina, California 91723, Estados Unidos",
        "Teléfono: (951) 383-6898",
      ] },
    ],
  },
  it: {
    badge: "Legale",
    title: "Avviso Legale",
    sections: [
      { heading: "Sito web", paragraphs: ["exec-pass.com"] },
      { heading: "Operatore del sito web", paragraphs: [
        "Ragione sociale: Marvelliant B.V.",
        "Indirizzo registrato: Bos en Lommerplein 280, 1055RW Amsterdam",
        "Numero di registrazione: 96513519 Chambre commerce RSIN 867643298",
        "Capitale sociale: 1.000,00 EUR",
      ] },
      { heading: "Contatti", paragraphs: [
        "Telefono: +4420 3936 2491",
        "Email: contact@exec-pass.com",
        "Indirizzo postale: Bos en Lommerplein 280, 1055RW Amsterdam",
      ] },
      { heading: "Direttore della Pubblicazione", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Provider di Hosting", paragraphs: [
        "Ragione sociale: Vercel Inc.",
        "Indirizzo: 440 N. Barranca Ave #4133, Covina, California 91723, Stati Uniti",
        "Telefono: (951) 383-6898",
      ] },
    ],
  },
  el: {
    badge: "Νομικά",
    title: "Νομική Ειδοποίηση",
    sections: [
      { heading: "Ιστοσελίδα", paragraphs: ["exec-pass.com"] },
      { heading: "Διαχειριστής Ιστοσελίδας", paragraphs: [
        "Επωνυμία: Marvelliant B.V.",
        "Καταχωρημένη διεύθυνση: Bos en Lommerplein 280, 1055RW Άμστερνταμ",
        "Αριθμός μητρώου: 96513519 Chambre commerce RSIN 867643298",
        "Μετοχικό κεφάλαιο: 1.000,00 EUR",
      ] },
      { heading: "Επικοινωνία", paragraphs: [
        "Τηλέφωνο: +4420 3936 2491",
        "Email: contact@exec-pass.com",
        "Ταχυδρομική διεύθυνση: Bos en Lommerplein 280, 1055RW Άμστερνταμ",
      ] },
      { heading: "Διευθυντής Δημοσίευσης", paragraphs: ["Frank Christiaan STORCK"] },
      { heading: "Πάροχος Φιλοξενίας", paragraphs: [
        "Επωνυμία: Vercel Inc.",
        "Διεύθυνση: 440 N. Barranca Ave #4133, Covina, California 91723, Ηνωμένες Πολιτείες",
        "Τηλέφωνο: (951) 383-6898",
      ] },
    ],
  },
};
