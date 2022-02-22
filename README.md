### 2. Seminarski rad: Senzor temperature


#### 1. Uvod

Za stvaranje aplikacije korištena je stranica iz primjera sa nastave kao podlaga za daljnji razvoj nove aplikacije.

##### 1.1. Sakrivanje podataka

U već postojeći `home-page.xml` predložak dodan je novi gub koji će na korisnikov dodir prikazati ili sakriti podatke o senzoru.

```xml
<Button text="{{ btnText }}" class="-primary" row="3" col="1" tap="{{ onTap }}"></Button>
```
Za prikaz teksta na gumbu koristi se varijabla `{{ btnText }}` s obzirom na to da je će se ovisno o trenutnom stanju mjenjati njegov sadržaj. Atribut `tap` na označava funkciju koja će se pozvati na dodir tog elementa.
Prije samog definiranja funkcije stvorit ćemo dvije varijable koje koje označavaju stanje gumba, a to su `rev` i `hide`. `rev` sadrži tekst `Reveal` odnosno `hide` sadrži tekst `Hide`.
Da bi mogli koristiti funkciju `onTap` potrebno ju je definirati u `hove-view-model.js`. U već postoječem viewModel objektu definiramo novu funkciju imena `onTap` na slijedeći način:

```js
    viewModel.onTap = function(){
        if (viewModel.visibility == 'visible'){
            viewModel.set('visibility', hid)
            viewModel.set('btnText', rev)
        }
        else{
            viewModel.set('visibility', vis)
            viewModel.set('btnText', hide)
        }
    }
```
Atribut `visibility`, čija je početna zadana vrijednost postavljena na `visible`, nam označava hoće li se element sa tim atributom vidjeti na ekranu. Svi elementi `GridLayout`-a u `home-page.xml` imaju vrijednost tog atributa postavljeno kao varijablu. Svakim klikom gumba mijenjamo vrijednosti te varijable vizibilnosti i mjenjamo text prikaza na gumbu.
![Reaveald screen](reveal.png "Text to show on mouseover").
![Hidden screen](hidden.png "Text to show on mouseover").

##### 1.2. Senzor temperature




