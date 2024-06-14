const canti = [
  {
    titolo: 'Gridate con Gioia',
    sottotitolo: 'Cfr. Is 12,1ss',
    link:'https://www.cantineocatecumenale.it/precatecumenato/gridate-con-gioia/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: true,
    finale: true,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Grazie a Jahvè',
    sottotitolo: 'Cfr. Sal 136 (135) - Melodia ebraica',
    link:'https://www.cantineocatecumenale.it/precatecumenato/grazie-a-jahve/',
    ingresso: false,
    pace: true,
    pane: false,
    vino: true,
    finale: true,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Abramo',
    sottotitolo: 'Cfr. Gen 18,1-5',
    link:'https://www.cantineocatecumenale.it/precatecumenato/abramo/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Acclamate al Signore',
    sottotitolo: 'Cfr. Sal 100 (99)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/acclamate-al-signore/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Alzate o porte',
    sottotitolo: 'Cfr. Sal 24 (23)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/alzate-o-porte/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Alzo gli occhi verso i monti',
    sottotitolo: 'Cfr. Sal 121 (120)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/alzo-gli-occhi-verso-i-monti/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Benedetta sei tu Maria',
    sottotitolo: 'Cfr. Lc 1,42-45',
    link:'https://www.cantineocatecumenale.it/precatecumenato/benedetta-sei-tu-maria/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: true,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Che belle sono le tue tende',
    sottotitolo: 'Cfr. Nm 23,7-24',
    link:'https://www.cantineocatecumenale.it/precatecumenato/che-belle-sono-le-tue-tende/',
    ingresso: false,
    pace: true,
    pane: false,
    vino: false,
    finale: true,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Chi ci separerà',
    sottotitolo: 'Cfr. Rm 8,34-39',
    link:'https://www.cantineocatecumenale.it/precatecumenato/chi-ci-separera/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: true,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Davanti agli angeli',
    sottotitolo: 'Cfr. Sal 138 (137)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/davanti-agli-angeli/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Evenu Shalom',
    sottotitolo: 'Cfr. Melodia ebraica',
    link:'https://www.cantineocatecumenale.it/precatecumenato/evenu-shalom-alejem/',
    ingresso: false,
    pace: true,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Giorno di Riposo',
    sottotitolo: 'Cfr. Gv 8,51.56 - Melodia ebraica',
    link:'https://www.cantineocatecumenale.it/precatecumenato/giorno-di-riposo/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: true,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Guardate come è bello',
    sottotitolo: 'Cfr. Sal 133 (132) - Melodia ebraica',
    link:'https://www.cantineocatecumenale.it/precatecumenato/guardate-come-e-bello/',
    ingresso: false,
    pace: true,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Ho sperato nel Signore',
    sottotitolo: 'Cfr. Sal 40 (39)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/ho-sperato-ho-sperato-nel-signore/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Lodate Iddio',
    sottotitolo: 'Cfr. Sal 150',
    link:'https://www.cantineocatecumenale.it/precatecumenato/lodate-iddio/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Mi indicherai il sentiero della vita',
    sottotitolo: 'Cfr. Sal 16 (15)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/mi-indicherai-il-sentiero-della-vita/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Una donna vestita di Sole',
    sottotitolo: 'Cfr. Ap 12',
    link:'https://www.cantineocatecumenale.it/precatecumenato/una-donna-vestita-di-sole/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: true,
    aMaria: true,
    natale: true,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Non c\'è in Lui bellezza',
    sottotitolo: 'Quarto canto del Servo di Jahvè - Cfr. Is 53,2-7',
    link:'https://www.cantineocatecumenale.it/precatecumenato/non-ce-in-lui-bellezza/',
    ingresso: false,
    pace: false,
    pane: true,
    vino: false,
    finale: true,
    aMaria: false,
    natale: true,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'O Dio tu sei il mio Dio',
    sottotitolo: 'Cfr. Sal 63 (62) - Musica di Paolo Rita',
    link:'https://www.cantineocatecumenale.it/precatecumenato/o-dio-tu-sei-il-mio-dio/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Pentecoste',
    sottotitolo: 'Cfr. At 2,1-13 - Autori: Pino Manzari, Gigi De Lazzaro, Paolo Marciani',
    link:'https://www.cantineocatecumenale.it/precatecumenato/pentecoste/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: true,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Per amore dei miei fratelli',
    sottotitolo: 'Cfr. Sal 122 (121) - Melodia ebraica',
    link:'https://www.cantineocatecumenale.it/precatecumenato/per-amore-dei-miei-fratelli/',
    ingresso: false,
    pace: true,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Andate ed annunziate ai miei fratelli',
    sottotitolo: 'Cfr. Mt 28,7-10; 16-20',
    link:'https://www.cantineocatecumenale.it/precatecumenato/andate-ed-annunziate-ai-miei-fratelli/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: true,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Dite agli smarriti di cuore',
    sottotitolo: 'Cfr. Is 35',
    link:'https://www.cantineocatecumenale.it/precatecumenato/dite-agli-smarriti-di-cuore/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: true,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Quanto sono amabili le tue dimore',
    sottotitolo: 'Cfr. Sal 84 (83)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/quanto-sono-amabili-le-tue-dimore/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Se il signore non costruisce la casa',
    sottotitolo: 'Cfr. Sal 127 (126)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/se-il-signore-non-costruisce-la-casa/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Se oggi ascoltate la Sua voce',
    sottotitolo: 'Cfr. Sal 95 (94)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/se-oggi-ascoltate-la-sua-voce/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    
    pentecoste: false,
  },
  {
    titolo: 'Tu sei il più bello',
    sottotitolo: 'Cfr. Sal 45 (44)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/tu-sei-il-piu-bello/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: true,
    finale: true,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Vieni dal Libano',
    sottotitolo: 'Cfr. Ct 4,8ss',
    link:'https://www.cantineocatecumenale.it/precatecumenato/vieni-dal-libano/',
    ingresso: true,
    pace: false,
    pane: false,
    vino: true,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
  {
    titolo: 'Amo il Signore',
    sottotitolo: 'Cfr. Sal 116 (114-115)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/amo-il-signore/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Benedici anima mia, Jahvè',
    sottotitolo: 'Cfr. Sal 103 (102)',
    link:'https://www.cantineocatecumenale.it/precatecumenato/benedici-anima-mia-jahve/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: true,
    pentecoste: false,
  },
  {
    titolo: 'Il Signore mi ha dato',
    sottotitolo: 'Terzo canto del Servo di Jahvè - Cfr. Is 50,4-11',
    link:'https://www.cantineocatecumenale.it/precatecumenato/il-signore-mi-ha-dato/',
    ingresso: false,
    pace: false,
    pane: true,
    vino: false,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Magnificat',
    sottotitolo: 'Cantico del Magnificat - Cfr. Lc 1, 46-55',
    link:'https://www.cantineocatecumenale.it/precatecumenato/magnificat/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: false,
    finale: false,
    aMaria: true,
    natale: false,
    quaresima: false,
    pentecoste: false,
  },
  {
    titolo: 'Risuscitò',
    sottotitolo: 'Cfr. 1 Cor 15,54-58',
    link:'https://www.cantineocatecumenale.it/precatecumenato/risuscito/',
    ingresso: false,
    pace: false,
    pane: false,
    vino: true,
    finale: false,
    aMaria: false,
    natale: false,
    quaresima: false,
    pentecoste: true,
  },
]

export default canti