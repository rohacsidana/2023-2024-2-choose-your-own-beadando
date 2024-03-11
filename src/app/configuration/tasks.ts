export const tasks = [
  {
    A: {
      imageUrl: 'assets/images/tasks/1/A/rectangle.gif',
      story: '',
      subTasks: [
        {
          text: `Vegyél fel 4 darab Angular Material slidert (https://material.angular.io/components/slider/overview).

A sliderek egy szín konfigurálás fogják elősegíteni, az RGBA (Red Green Blue Alpha) 4 értékét fogják definiálni.
Emiatt az első három slider 0 és 255 közötti értéket tudjon felvenni, az utolsó pedig 0 és 1 közöttit.`,
          xp: 1
        },
        {
          text: `<b>Komponens-szintű stílusosztály</b> (például ".rectangle") segítségével rajzolj ki egy négyzetet a sliderek alá.`,
          xp: 1
        },
        {
          text: `A sliderek mozgatásával a négyzet háttere automatikusan változzon a beállított értékek által
          definiált színre.
          `,
          xp: 1
        },
        {
          text: `<b>Globális stílus</b>: A megfelelő fájlban definiáld, hogy az oldalon található
          összes gombnak legyen egy vastag, színes kerete (border).

Ez a feladat teljesen független az első 3 részfeladattól.`,
          xp: 1
        },
      ],
      title: `Styling`
    },
    B: {
      imageUrl: 'assets/images/tasks/1/B/fishnet.jpeg',
      story: '',
      subTasks: [
        {
          text: `Készíts egy grid-et (https://material.angular.io/components/grid-list/overview) 4 listaelemmel.
          Az egyes elemeknek adj különböző háttérszínt, hogy az elrendezés mindig egyértelmű legyen.

A feladat célja, hogy a rácsok eltérő módon legyenek elrendezve a böngészőablak méretétől függően.

Segítség: A grid list dokumentációjának "Examples" fülén található példák tudnak segíteni az adatstruktúra kialakításában.`,
          xp: 1
        },
        {
          text: `Alapesetben a cellák legyen a következőképpen rendezve:

Nagy felbontás (>= Large): Az első sort ugyanakkora mérettel töltse ki az első két cella, a második sorban az 1.
(összesen a 3.) cella a terület harmadát foglalja el, az utolsó cella perdig a maradék 2/3-ot.

Közepes felbontás (Medium): Két soros legyen továbbra is a rács, egyenlő szélességű legyen minden cella.

Kis felbontás (<= Small): 4 darab sora legyen a rácsnak, minden cella töltse ki a teljes szélességet.

Segítség: a méretekhez érdemes a material layout által definiált töréspontokat használni
(ezekre hivatkoztam feljebb, pl.: Small, Medium, Large).
Ezek, a komponensektől független részek, egy külön csomagban, a CDK-ban találhatóak:
https://material.angular.io/cdk/layout/overview`,
          xp: 1
        },
        {
          text: `Egy cella felé mozgatva az egeret jelenjen meg felugró tooltip-ben, hogy hány oszlop szélességet
          vesz fel az adott cella.

Segítség: https://material.angular.io/components/tooltip/overview`,
          xp: 1
        },
        {
          text: `Minden cellában szerepeljen két gomb. Az egyik a cella szélességének csökkentésére (-), a másik
          pedig a cella méretének növelésére (+).

Gombnyomásra a cella szélessége 1-el több vagy 1-el kevesebb oszlopot foglaljon el.

Nem szükséges a szomszédokat hozzáigazítani, ha a növelés miatt külön sorba törik egy cella, nem gond!`,
          xp: 1
        }
      ],
      title: `Responsivity`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/1/A/loading.png',
      story: ``,
      subTasks: [
        {
          text: `Készíts egy új komponenst, amely inputként egy kép elérhetőségét
          (realtív URL-jét) várja.

A Task1AComponent-be vegyél fel három darabot a komponensből, mindegyik más képpel
legyen felparaméterezve.

A tetszőlegesen választott képeket helyezd be a projekt többi assetje közé.

Pluszpont jár viccess képek választásáért.
          `,
          xp: 1
        },
        {
          text: `Az előző feladatban felvett komponensekben található képek legyenek kattinhatóak.
          A Task1AComponent számolja hány kattintás történt a képeken.
          Tehát nem számít melyik kép lett kattintva, egy közös számláló értéke növekedjen.`,
          xp: 1
        },
        {
          text: `A kattintások számát és, hogy még hány kattintás van hátra 5-ből egy Angular Materialos
          progress baron jelezd:
          https://material.angular.io/components/progress-bar/overview`,
          xp: 1
        },
        {
          text: 'Az 5. kattintás elérésével a komponens háttere változzon zöldre.',
          xp: 1
        }
      ],
      title: `
        Komponens
      `
    },
    B: {
      imageUrl: 'assets/images/tasks/2/B/2B.jpg',
      story: '',
      subTasks: [
        {
          text: `Készíts egy reaktív űrlapot.
          Az űrlap tartalmazzon 3 mezőt:

- licence kulcs (sztring)
- korlátozott érvényesség (checkbox)
- érvényesség lejárta (date).

Az űrlaphoz hozz létre egy FormGroup-ot is TypeScriptben, amit köss
is össze ( [formGroup]="" ) a .html fájlban létrehozott űrlappal.

Segítség: https://angular.io/guide/reactive-forms
https://material.angular.io/components/checkbox/overview
https://material.angular.io/components/datepicker/overview`,
          xp: 1
        },
        {
          text: `Adj két validációt az előző részben létrehozott űrlaphoz:

- A licence kulcs megadása legyen kötelező.
- Az kulcsot a következő formátumokbanban lehessen megadni:
XXXX-XXXX-XXXX vagy XXXXXX-XXXXXX, ahol az X lehet szám vagy nagybetű.

A fenti ellenőrzésekhez használd az Angular alap validátorait, nem szükséges
sajátot létrehozni.`,
          xp: 1
        },
        {
          text: `Készíts egy saját group szintű validátort.

Ez akkor dobjon hibát, ha a "korlátozott érvényesség" checkbox be van pipálva, viszont az
"érvényesség lejárta" mezőhöz nem lett megadva helyes dátum.`,
          xp: 1
        },
        {
          text: `Az űrlapon szerepeljen egy submit gomb is.
          Gombnyomásra egy felugró dialogban
          (https://material.angular.io/components/dialog/overview)
          írasd ki, hogy az űrlap valid-e vagy sem.

Amennyiben az űrlap valid a modalban jelenjenek meg a megadott adatok is.

Például:

          Licence: 123456-987654

          Korlátozott érvényesség: Igen

          Érvényesség: 2024. 12. 31.`,
          xp: 1
        },
      ],
      title: `Form validation`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/3/A/nou.webp',
      story: '',
      subTasks: [
        {
          text: `Készíts egy saját pipe-ot.
          A többi részfeladat alapján hozz helyes döntést abban,
          hogy pure vagy impure pipe-ot érdemes-e itt használni.
          A pipe titkosítsa paraméterként fogadott sztringet.
          Az alfeladatokban részletezett esetekre írass ki 1-1 példát a komponensben.`,
          xp: 1
        },
        {
          text: `Amennyiben az értéke látszólag egy bankszámlaszám ("[0-9]{8}-[0-9]{8}") az eredmény
          egy csillag legyen amelyet a bankszámlaszám utolsó 4 számjegye követ.

Példa: {{ "12123434-56567878" | encrypt }} kimenete: "*7878"`,
          xp: 1
        },
        {
          text: `Amennyiben az értéke látszólag egy telefonszám, az eredményben
          a számok legyenek csillag karkterre cserélve, leszámítva az utolsó kettőt.

Elegendő egyetlen telefonszám formátumot kezelni, pl.: 06-20-123-4567.

Példa: {{ "06-20-123-4567" | encrypt }} kimenete: "**-**-***-**67"`,
          xp: 1
        },
        {
          text: `Ha a sztring se nem bankszámlaszám se nem telefonszám, akkor az összes karakterét
          cseréld csillagra.

Példa: {{ "password" | encrypt }} kimenete: "********"`,
          xp: 1
        },
      ],
      title: `Pipe`
    },
    B: {
      imageUrl: 'assets/images/tasks/3/B/babel.jpg',
      story: 'Megjelenő szöveg: Jelenleg magyar nyelven jelenik meg az oldal.',
      subTasks: [
        {
          text: `Integráld az ngx-translate és a hozzá tartozó http-loader (
          https://www.npmjs.com/package/@ngx-translate/core,
          https://www.npmjs.com/package/@ngx-translate/http-loader)
          csomagokat a projektbe.

Az AppModule-ban konfiguráld be a TranslateModule-t, hogy a fordításokat
mindenhol használni lehessen a projektben.

Hozz létre legalább 2 nyelvi fájlt.`,
          xp: 1
        },
        {
          text: `A felületen jeleníts meg egy Materialos Select
          (https://material.angular.io/components/select/overview)
          elemet. Az elérhető opciók a támogatott nyelvek legyenek.
          Maguk az opciók az éppen kiválasztott nyelven jelenítsék
          meg a a nyelveket (pl. magyar nyelv esetén a két opció
          lehet "Angol" és "Magyar", angol nyelvnél pedig "English"
          és "Hungarian").

Alapból legyen kiválasztva a default nyelv.

A kiválasztás módosításakor váltson nyelvet a felület.`,
          xp: 1
        },
        {
          text: `A kiválasztott nyelvet tárold el valahol (pl.: localStorage).
          A program inicializációjakor az utoljára kiválasztott nyelven töltsd
          be a felületet.
          Figyelj arra, hogy akkor se szálljon el a program, amikor még nem
          lett kiválasztva nyelv!`,
          xp: 1
        },
        {
          text: `Minden nyelvváltáskor növelj egy számlálót.
          A felületen egy fordítás felhasználásával írasd ki, hogy mennyi nyelvváltás történt összesen.
          A szöveg magyarul:
          "Összesen 10 nyelvváltás történt eddig."
          Angolul:
          "There were 10 language changes so far."

Segítség: https://www.vitamindev.com/angular/how-to-use-parameters-in-ngx-translate/`,
          xp: 1
        },
      ],
      title: `Translate`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/4/A/futurama.gif',
      story: '11223344-55667788',
      subTasks: [
        {
          text: `Készíts egy direktívát "PermissionDirective" nevű direktívát.
                A direktíva célja, hogy a felhasználó jogosultságai alapján módosítsa a HTML elemet amire helyezik.

A felületen helyezz el egy selectort a következő értékekkel:
- Olvasási jog
- Írási jog
- Adminisztrátori jog

Segítség: https://material.angular.io/components/select/overview#multiple-selection.
          `,
          xp: 1
        },
        {
          text: `A komponensben vegyél fel 1-1 DOM elemet mindhárom jogosultsághoz és rakd
          rájuk a direktívát.
          `,
          xp: 1
        },
        {
          text: `Azon funkciók amelyekhez írási jogra lenne szükség, de a felhasználónak csak
          olvasási jog van, kapjanak sárga hátteret.
          `,
          xp: 1
        },
        {
          text: `
          Azok a funkciók amelyekhez admin jogosultságra lenne szükség ne is jelenjen meg, ha
          a felhasználó nem rendelkezik vele.
          `,
          xp: 1
        },
      ],
      title: `Directive`
    },
    B: {
      imageUrl: 'assets/images/tasks/4/B/404.PNG',
      story: '1 2 3 4 5 404',
      subTasks: [
        {
          text: `Legyen 5 gomb a feladathoz tartozó komponensen, amellyel bármelyik
          lépésre átugorhatunk.
          A navigációhoz használhatod a RouterService-ben már megírt függvényt.
          `,
          xp: 1
        },
        {
          text: `Készíts egy szolgáltatást (service), amely menti és tárolja, hogy a
          felhasználó mely lépést (1, 2, 3, 4 vagy 5) nézte utoljára.
          Ehhez szükség lesz már meglevő komponensek kiegészítésére!
          `,
          xp: 1
        },
        {
          text: `Amennyiben már készült mentés az előző feladat alapján, akkor az oldal
          újratöltésekor automatikusan navigáljuk a felhasználót az utoljára
          megtekintett lépésre.

Tehát például, ha a "/task/4" URL-t próbáljuk megnyitni, de azt tároltuk
el, hogy utoljára a 2. lépést nézte, akkor navigáljuk át a 2. lépésre!

Ezt csak egyszer tegyük meg: az oldal betöltésekor!
          `,
          xp: 1
        },
        {
          text: `Amennyiben a felhasználó olyan indexű lépésre próbál navigálni, amely
          nem létezik (>5) akkor ugorjon fel egy üzenet, ami erről tájékoztatja a usert.
          Pl.: http://localhost:4200/task/6

Az üzenet megjelenítésére használd a Material SnackBar funkcióját:
https://material.angular.io/components/snack-bar/overview
          `,
          xp: 1
        },
      ],
      title: `Service`
    },
  },
  {
    A: {
      imageUrl: 'assets/images/tasks/5/A/crossroads.png',
      story: '-> <-',
      subTasks: [
        {
          text: `Készíts egy service-t, amely paraméterként megadott számú
          random személy adatait generálja.
          Pl.: generator.service.ts

A személyek a következő mezőkkel rendelkezzenek:
- "name" (string)
- "age" (number)
- "description" (string)

A generálás legyen randomizált és legalább az age mező nagyjából
reális (de random) értékeket tartalmazzon.`,
          xp: 1
        },
        {
          text: `Az előző feladatban definiált service használatával generálj
          10 személyt és tárold el őket egy komponens-változóban inicializációkor.`,
          xp: 1
        },
        {
          text: `A felületen jelenjen meg két konténer.
          Alapból a baloldali konténerben szerepeljen 10 kártya a generált személyek nevével.

A konténerek között húzogathatóak legyenek a személyek, tehát a baloldali
konténerből lehessen áthúzni a személyt a jobboldaliba, valamint vissza.
A kártyákat ne lehessen a konténereken kívül dobni.

Segítség: https://material.angular.io/cdk/drag-drop/overview`,
          xp: 1
        },
        {
          text: `Amikor már legalább 5 ember átkerült jobb oldalra,
          jelenjen meg a következő szöveg a felületen:
          "Kiválasztásra került a minimálisan szükséges számú személy!".

Ez a szöveg tűnjön el, amennyiben visszahúzunk személyeket balra és
újra 5-nél kevesebb személy szerepel a jobb oldali konténerben.`,
          xp: 1
        },
      ],
      title: `Tree & Clipboard`
    },
    B: {
      imageUrl: 'assets/images/tasks/5/B/burger.PNG',
      story: '*scrolls for hours with great performance*',
      subTasks: [
        {
          text: `Készíts egy service-t, amely paraméterként megadott számú
          random személy adatait generálja.
          Pl.: generator.service.ts

A személyek a következő mezőkkel rendelkezzenek:
- "name" (string)
- "age" (number)
- "description" (string)

A generálás legyen randomizált és legalább az age mező nagyjából
reális (de random) értékeket tartalmazzon.`,
          xp: 1
        },
        {
          text: `Az előző feladatban definiált service használatával generálj
          10000 személyt és tárold el őket egy komponens-változóban inicializációkor.`,
          xp: 1
        },
        {
          text: `Készíts egy táblázatot két oszloppal (name, age), amelyben megjeleníted
          az adatokat virtual scrolling használatával.
          Ennek célja az, hogy a DOM-ban ne jelenjen meg 10000 sor, csak azok,
          amelyek éppen látszanak is (plusz pár sor bufferként).

Segítség: https://material.angular.io/cdk/scrolling/overview`,
          xp: 1
        },
        {
          text: `A táblázatnak legyen egy 3. oszlopa, egy gombbal, amelyre kattintva
          felugró üzenetben jelenjen meg az adott személy "description" mezője.

A felugró üzenethez használható például a materialos snackbar:
https://material.angular.io/components/snack-bar/overview`,
          xp: 1
        }
      ],
      title: `Virtual Scrolling`
    },
    preview: {
      imageUrl: 'assets/images/preview/5.jpg',
      text: 'Csak így tovább, már csak egy feladat van hátra...'
    }
  }
]
