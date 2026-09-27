export type Language = 'en' | 'al';

export interface Translation {
  nav: {
    home: string;
    about: string;
    activities: string;
    gallery: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    scroll: string;
  };
  stats: {
    since: string;
    sinceValue: string;
    programs: string;
    programsValue: string;
    audience: string;
    audienceValue: string;
    volunteers: string;
    volunteersValue: string;
  };
  about: {
    label: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    pullquote: string;
    features: { title: string; desc: string }[];
  };
  activities: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string; tag: string }[];
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    captions: string[];
  };
  contact: {
    label: string;
    title: string;
    address: string;
    addressValue: string;
    email: string;
    hours: string;
    hoursValue: string;
    hoursValue2: string;
    followUs: string;
    facebookLink: string;
    embassyLink: string;
  };
  footer: {
    description: string;
    rights: string;
    embassy: string;
    quickLinks: string;
    contactTitle: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      activities: 'Activities',
      gallery: 'Gallery',
      contact: 'Visit',
    },
    hero: {
      kicker: 'U.S. Embassy in Albania · Est. 2006',
      title1: 'American Corner',
      title2: 'Kukës',
      subtitle:
        'A cultural bridge connecting northern Albania with the United States — through English language programs, educational advising, and community events.',
      cta: 'See what we do',
      secondaryCta: 'Our story',
      scroll: 'Scroll',
    },
    stats: {
      since: 'Established',
      sinceValue: '2006',
      programs: 'Weekly programs',
      programsValue: '5+',
      audience: 'Serving',
      audienceValue: 'N. Albania',
      volunteers: 'Powered by',
      volunteersValue: 'Volunteers',
    },
    about: {
      label: 'About',
      title: 'A space for curiosity, dialogue, and exchange',
      paragraph1:
        'Opened in 2006 inside the "Hasan Prishtina" Cultural Center, American Corner Kukës reaches communities across northern Albania with programs and resources about American society, culture, politics, and foreign policy.',
      paragraph2:
        'The Corner hosts daily educational and cultural activities for all ages — from English conversation clubs to technology workshops. With support from Peace Corps volunteers, young leaders, and civil society activists, it offers a wide range of programming for youth and anyone curious about the United States.',
      paragraph3:
        'It is also a resource for students who want to study at American universities, and part of a global network of nearly 600 American Spaces in over 140 countries.',
      pullquote: 'Get the feel of the American culture.',
      features: [
        { title: 'Free access', desc: 'Books, magazines, internet, and multimedia about the United States — open to everyone.' },
        { title: 'English teaching', desc: 'Clubs, conversation hours, and workshops led by Peace Corps volunteers and educators.' },
        { title: 'Study in the USA', desc: 'Advising and resources for students interested in American colleges and universities.' },
        { title: 'Cultural events', desc: 'Film screenings, holiday celebrations, speaker sessions, and creative workshops.' },
      ],
    },
    activities: {
      label: 'Programs',
      title: 'What happens at the Corner',
      subtitle: 'Daily educational and cultural programs — from language clubs to tech workshops and community celebrations.',
      items: [
        { title: 'English Language Clubs', desc: 'Conversation hours, reading clubs, and interactive lessons with Peace Corps volunteers and English Language Fellows.', tag: 'Languages' },
        { title: 'Technology & Innovation', desc: 'Hands-on workshops in coding, robotics, digital storytelling, and digital literacy for youth.', tag: 'STEM' },
        { title: 'Cultural Events', desc: 'Film screenings, poster exhibitions, holiday celebrations, and programs showcasing American traditions.', tag: 'Culture' },
        { title: 'Speaker Sessions', desc: 'Presentations and discussions with U.S. Embassy speakers, Fulbright scholars, and alumni.', tag: 'Dialogue' },
        { title: 'EducationUSA Advising', desc: 'Information sessions and one-on-one advising for students considering U.S. universities.', tag: 'Education' },
        { title: 'Youth & Kids Clubs', desc: 'Kids Club, Drama Club, Book Club, and creative workshops for young learners.', tag: 'Youth' },
      ],
    },
    gallery: {
      label: 'Gallery',
      title: 'Life at the Corner',
      subtitle: 'A look at the programs, events, and people that make this space a hub of cultural exchange in Kukës.',
      captions: [
        'English language class in session',
        'STEM and robotics workshop',
        'Speaker session with embassy guests',
        'Reading and study time',
        'Creative workshop with youth',
        'Coding and technology class',
        'Students exploring the collection',
        'Community cultural gathering',
        'Young learner discovering books',
      ],
    },
    contact: {
      label: 'Visit us',
      title: 'Find us in Kukës',
      address: 'Address',
      addressValue: '"Hasan Prishtina" Cultural Center, Kukës, Albania',
      email: 'Email',
      hours: 'Opening hours',
      hoursValue: 'Monday – Friday',
      hoursValue2: '8:00 — 16:00',
      followUs: 'Connect',
      facebookLink: 'Facebook',
      embassyLink: 'U.S. Embassy page',
    },
    footer: {
      description: 'American Corner Kukës is a partnership between the U.S. Embassy in Albania and the "Hasan Prishtina" Cultural Center. Free access to information about the United States, plus educational and cultural programs for the community.',
      rights: 'All rights reserved.',
      embassy: 'A partnership with the U.S. Embassy in Albania',
      quickLinks: 'Navigate',
      contactTitle: 'Contact',
    },
  },
  al: {
    nav: {
      home: 'Ballina',
      about: 'Rreth Nesh',
      activities: 'Aktivitete',
      gallery: 'Galeria',
      contact: 'Vizito',
    },
    hero: {
      kicker: 'Ambasada e SHBA në Shqipëri · Që nga 2006',
      title1: 'American Corner',
      title2: 'Kukës',
      subtitle:
        'Një urë kulturore që lidh Shqipërinë e Veriut me Shtetet e Bashkuara — përmes programeve të gjuhës angleze, këshillimit edukativ dhe ngjarjeve komunitare.',
      cta: 'Shiko çfarë bëjmë',
      secondaryCta: 'Historia jonë',
      scroll: 'Lëviz',
    },
    stats: {
      since: 'Themeluar',
      sinceValue: '2006',
      programs: 'Programe javore',
      programsValue: '5+',
      audience: 'Shërben',
      audienceValue: 'Shqipëria e Veriut',
      volunteers: 'Mbështetur nga',
      volunteersValue: 'Vullnetarë',
    },
    about: {
      label: 'Rreth Nesh',
      title: 'Një hapësirë për kureshtjen, dialogun dhe shkëmbimin',
      paragraph1:
        'Hapur në vitin 2006 brenda Qendrës Kulturore "Hasan Prishtina", American Corner Kukës arrin komunitetet në të gjithë Shqipërinë e Veriut me programe dhe burime rreth shoqërisë, kulturës, politikës dhe politikës së jashtme amerikane.',
      paragraph2:
        'Corner-i organizon aktivitete edukative dhe kulturore ditore për të gjitha moshat — nga klubet e bisedave në anglisht te workshope teknologjike. Me mbështetjen e vullnetarëve të Peace Corps, liderëve të rinj dhe aktivistëve të shoqërisë civile, ai ofron një gamë të gjerë programimi për të rinjtë dhe këdo që është kureshtës për Shtetet e Bashkuara.',
      paragraph3:
        'Ai është gjithashtu një burim për studentët që duan të studiojnë në universitete amerikane, dhe pjesë e një rrjeti global me gati 600 American Spaces në mbi 140 vende.',
      pullquote: 'Ndje kulturën amerikane.',
      features: [
        { title: 'Qasje e lirë', desc: 'Libra, revista, internet dhe multimedia rreth SHBA-së — hapur për të gjithë.' },
        { title: 'Mësimi i anglishtes', desc: 'Klube, orë bisedash dhe workshope me vullnetarët e Peace Corps dhe edukatorë.' },
        { title: 'Studimi në SHBA', desc: 'Këshillim dhe burime për studentët e interesuar në kolegje dhe universitete amerikane.' },
        { title: 'Ngjarje kulturore', desc: 'Projeksione filmash, festime, sesione folësish dhe workshope krijuese.' },
      ],
    },
    activities: {
      label: 'Programe',
      title: 'Çfarë ndodh në Corner',
      subtitle: 'Programe edukative dhe kulturore ditore — nga klubet e gjuhës te workshope teknologjike dhe festime komunitare.',
      items: [
        { title: 'Klube të Gjuhës Angleze', desc: 'Orë bisedash, klube leximi dhe mësime interaktive me vullnetarët e Peace Corps dhe English Language Fellows.', tag: 'Gjuhë' },
        { title: 'Teknologji & Inovacion', desc: 'Workshope praktike në kodim, robotikë, tregim digjital dhe alfabetizim digjital për të rinjtë.', tag: 'STEM' },
        { title: 'Ngjarje Kulturore', desc: 'Projeksione filmash, ekspozita, festime dhe programe që shfaqin traditat amerikane.', tag: 'Kulturë' },
        { title: 'Sesione Folësish', desc: 'Prezantime dhe diskutime me folës të Ambasadës së SHBA, studiues Fulbright dhe alumni.', tag: 'Dialog' },
        { title: 'Këshillim EducationUSA', desc: 'Sesione informacioni dhe këshillim individual për studentët që konsiderojnë universitete amerikane.', tag: 'Edukim' },
        { title: 'Klube për të Rinj & Fëmijë', desc: 'Kids Club, Drama Club, Book Club dhe workshope krijuese për të rinjtë.', tag: 'Të Rinj' },
      ],
    },
    gallery: {
      label: 'Galeria',
      title: 'Jeta në Corner',
      subtitle: 'Një vështrim në programet, ngjarjet dhe njerëzit që e bëjnë këtë hapësirë një qendër shkëmbimi kulturor në Kukës.',
      captions: [
        'Klasë e gjuhës angleze në zhvillim',
        'Workshop STEM dhe robotikë',
        'Sesion folësish me miqtë e ambasadës',
        'Kohë leximi dhe studimi',
        'Workshop krijues me të rinjtë',
        'Klasë kodimi dhe teknologjie',
        'Studentë duke eksploruar koleksionin',
        'Kuvend komunitar kulturor',
        'Lexues i ri duke zbuluar libra',
      ],
    },
    contact: {
      label: 'Na vizitoni',
      title: 'Na gjeni në Kukës',
      address: 'Adresa',
      addressValue: 'Qendra Kulturore "Hasan Prishtina", Kukës, Shqipëri',
      email: 'Email',
      hours: 'Orari i punës',
      hoursValue: 'E Hënë – E Premte',
      hoursValue2: '8:00 — 16:00',
      followUs: 'Lidhu',
      facebookLink: 'Facebook',
      embassyLink: 'Faqja e Ambasadës',
    },
    footer: {
      description: 'American Corner Kukës është një partneritet mes Ambasadës së SHBA në Shqipëri dhe Qendrës Kulturore "Hasan Prishtina". Qasje e lirë në informacion rreth Shteteve të Bashkuara, plus programe edukative dhe kulturore për komunitetin.',
      rights: 'Të gjitha të drejtat e rezervuara.',
      embassy: 'Një partneritet me Ambasadën e SHBA në Shqipëri',
      quickLinks: 'Lundim',
      contactTitle: 'Kontakt',
    },
  },
};
