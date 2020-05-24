import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  //private hero:any[]=
  private hero: Hero[] = [
    {
      tipo: 1,
      nombre: 'Aquaman',
      bio:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC',
    },
    {
      tipo: 1,

      nombre: 'Batman',
      bio:
        'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC',
    },
    {
      tipo: 1,

      nombre: 'Daredevil',
      bio:
        'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel',
    },
    {
      tipo: 1,

      nombre: 'Hulk',
      bio:
        'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel',
    },
    {
      tipo: 1,

      nombre: 'Linterna Verde',
      bio:
        'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC',
    },
    {
      tipo: 1,

      nombre: 'Spider-Man',
      bio:
        'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel',
    },
    {
      tipo: 1,

      nombre: 'Wolverine',
      bio:
        'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel',
    },
    {
      tipo: 2,
      nombre: 'Joker',
      bio:
        'The Joker is a master criminal with a clown-like appearance, and is considered one of the most infamous criminals within Gotham City. ',
      img: 'assets/img/joker.png',
      aparicion: '1940-04-25',
      casa: 'DC',
    },
    {
      tipo: 2,
      nombre: 'Thanos',
      bio:
        'Thanos grew up in a peace-loving family. However, he began experimenting on other Titans, which increased Thanos’ obsession with death and genetic experimentation. Possessing the DNA of the Deviants and Eternals made Thanos extremely powerful and resilient. At one point, Thanos exposed himself to cosmic rays, which distorted his body. ',
      img: 'assets/img/thanos.png',
      aparicion: '1973-02-01',
      casa: 'Marvel',
    },
    {
      tipo: 2,
      nombre: 'Magneto',
      bio:
        'The character is a powerful mutant, one of a fictional subspecies of humanity born with superhuman abilities, who has the ability to generate and control magnetic fields. Magneto regards mutants as evolutionarily superior to humans and rejects the possibility of peaceful human-mutant coexistence; he initially aimed to conquer the world to enable mutants, whom he refers to as homo superior, to replace humans as the dominant species. ',
      img: 'assets/img/magneto.png',
      aparicion: '1963-09-01',
      casa: 'Marvel',
    },
    {
      tipo: 2,
      nombre: 'Venom',
      bio:
        'Venom is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with Spider-Man. The character is a sentient alien Symbiote with an amorphous, liquid-like form, who survives by bonding with a host, usually human. This dual-life form receives enhanced powers and usually refers to itself as "Venom".',
      img: 'assets/img/venom.png',
      aparicion: '1984-04-01',
      casa: 'Marvel',
    },
    {
      tipo: 2,
      nombre: 'Deathstroke',
      bio:
        'He is an assassin who serves as the archenemy of the Teen Titans, specifically Dick Grayson.',
      img: 'assets/img/deathstroke.png',
      aparicion: '1980-12-01',
      casa: 'DC',
    },
    {
      tipo: 2,
      nombre: 'Doomsday',
      bio:
        'Doomsday is depicted as a deadly demon monster genetically-engineered from the depths of prehistoric Krypton. His creator imbued him with few feelings, mostly hate and desire for destruction, which led to him destroying worlds and eventually finding Earth, where he meets Superman.[6] The character is best known as Superman  murderer in the 1992 storyline, "The Death of Superman".',
      img: 'assets/img/doomsday.png',
      aparicion: '1992-11-01',
      casa: 'DC',
    },
  ];

  constructor() {
    console.log('Servicio listo para usar!!');
  }

  //getHeros(){
  getHeros(): Hero[] {
    return this.hero;
  }

  getHero(id: number) {
    return this.hero[id];
  }

  buscarHeroe(palabra: string): Hero[] {
    let heroArr: Hero[] = [];
    palabra = palabra.toLowerCase();
    for (let hero of this.hero) {
      let nombre = hero.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        heroArr.push(hero);
      }
    }
    return heroArr;
  }
}

export interface Hero {
  tipo: any;
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
