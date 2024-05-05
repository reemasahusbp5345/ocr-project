const text = `Assembly Constituency No and Name : 17-WAZIRPUR Part No. : 98
Section No and Name 4-MIG FLATS, J-BLOCKASHOK VIHAR PHASE-I
WHC3656123 WHC 3659802 1051 WHC2230539
Mama t priyanshi aggarwa Mame : Nishant Agaarwal Mame : ARYAN PATHAK
Fathers Name: inder mohan aggarwal Fathers Mame: Inder Mohan Aggarwal Fathers Mama: RAJESH PATHAK
House Number : 34 Photo House Number : 34 Photo House Number = 5-B Photo
Age + 22 Gender : Female Age +18 Gender + Male Age © 25 Gender : Male
Available Available Available
1052 WHC3512191 WHC2330736 | || 8 1054 WHC3582087
Mame : MUDIT ARYA Mame : Tanishka Saxena Marne : Khushi Singh oY
Fathers Name: RAVINDER KUMAR Fathers Mame: Sanjay Saxena Mothers Name: AT GH
House Mumber : 7A Phato House Number : 11-B Photo Houss Numb Ne MIG FLATS Photo
Ane 122 Gendar : Mals Aga 123 Gander | Female Aga: oe emale
Available Available Available
WHC 1742344 wWHCas73274 | || 5 1057 WHC2271054
Mame : BRLIENDRA SINGH Mame : PASVAN SINGH Mame : FINKY SOR ¢O
Fathers Name! VIKRAM SINGH Fathers Mame: BRIJEMDRA SINGH Husbands Mare: ok SoRoUT
House Number 1 15-A Photo House Number © 15-A, MIG FLATS Photo Hauge Number o Photo
Age + 49 Gender : Male Age +19 Gender + Male Age 35 fe male
Available Available Available
1068 WHC0692376 1059 WHC2207073 1040 UrW0634782
Name : SUSHMA DIXIT Name : AANANDITAA DIXIT Mame : Samiksha Khati
Husbands Mame: PINGAKSH DIT Fathers Mame: PINGAKSH DIXIT Husbands Mame: Ravi Krishali
House Number + 16D Photo House Number : 16-0 Photo House Number = 18 B Photo
Age 1 52 Gender : Fermnale Age 27 Gander : Female Age : 43 Gender : Female
Available Available Available
1061 WHC1835130 1062 WHC3591021 1063 WHC2197233
Name  DEVANSH SHARMA Mame : ADT] GLILATI Mame : TUSHAR GARG
Fathers Mame! FRADEEP KLUIMAR SHARMA Fathers Mame: AMIT GLULATI Fathars Nama: MUKLL GARG
House Number 1 19D Photo House Number : 220 Photo Hosa Number : 26-4 Photo
Age + 30 Gender : Male Age + 21 Gender : Fernale Age 28 Gender © Male
Available Available Available
1064 WHC1699072 WHC1699049 WHC3582590
Marna : MEENA BHATNAGAR Marre : SUDHANSHL BHATHAGAR Marre : VANDITT SHARMA
Husbands Nama: MAHENDER KUMAR Fathers Mame: MAHENDER KUMAR Fathers Name: MANGJ SHARMA,
BHATMAGAR Photo BHATMAGAR Photo Howse Number = 57-0 Photo
House Mumber : 35-A BA block House Number : 35-4 BA block Age : 21 Gender : Male
Age 168 Gender 3 Fermnale Available Age 1 38 Gander : Mala Available Available
1067 WHC3625175 1068 WHCT7 19664 3 1069 WHC 3547429
Name : HARSHIT SACHDEVA Mame : VARUN DESHWAL Mame : RAKHEE NAG) Oo
Fathers Mame: ARVIND SACHDEVA Fathers Mame: VIRFAL SINGH DESHWAL Husbands Mame: HTA
House NMumbsar : B-36 Photo Hause Number : flat no 230 Photo Hausa Numb Ve Photo
Ane + 20 Gendar 3 Male Age 132 Gander | Mala Aga 1 49 fe amake
Available Available Available
1070 JBJ1164214 1071 WHGCZ2210979 1072 WHC 36461980
Mama : RITIKA Mame : AVLEEN KAUR CHANMDHOR Mame : DEEPTI DUA
Fathers Mame: ASHWANI KAPOOR Husbands Mame: GURJOT SINGH Husbands Mame: MANISH DUA
House Mumber + J-2 B MIG FLATS Photo CHANDHOK Photo Howse Number = JA12-B Photo
Age + 3 Gender : Female House Number @ J-BA Age © 43 Gender : Female
Available Age 130 Gender : Female Available Available
1073 WHCISGETTT 1074 WHC274430 1075 WHC757797
Name : MAMAN SHARMA Name : TEJ SINGH Mame : DIPASHA
Fathers Name: ANIL KUMAR Fathers Mame: RAM SWARQDP Fathers Mame: TEJ SINGH
House Mumber :.J-150 Photo Houses Number : 1-170 Photo Hausa Number :J-170 Photo
Ane 1 25 Gendar : Mals Age 60 Gender : Maks Age: 30 Gander : Female
Available Available Available
1076 WHC2266211 1077 WHC0499145 1078 HKS0925123
Mama WVANSHAL TALWAR Mame  GIREESH KHATTAR Mame : SONIA KHATTAR
Fathers Name: SHY RAM TALWAR Fathers Mama: BALDEY RAJ Husbands Marea: GIREESH KHATTAR
House Murnber : J-19 B Photo House Mumber © J-19/C Photo Houze Number = J-19/C Photo
Age + 27 Gender : Male Age +51 Gender + Male Age © 44 Gender : Female
Available Available Available
Age as on 01-01-2024 Date of Publication :- 22-01-2024 Total Pages 42 - Page 39`

const splittedText = text.trim().split('\n');
let data = [];
const loop = [1,2,3];
for(let i=3; i < splittedText.length-1; i+=6) {
    const name = (splittedText[i].split(/Mama :|Marre :|Marne :|Mame :|Mame |Name :|Mama |Name |Marna : /));
    const husbandName = splittedText[i+1].split(/Husbands Mame:|Fathers Nama:|Husbands Mame!|Fathers Mame:|Fathers Name:|Husbands Narme:|Fathars Nama:|Fathers Mama:|Mothers Name:/g)
    const houseNumber = splittedText[i+2].split(/House Mumber + |House Number : |House Number = |House Mumber |Houses Number |House Number |Hougs Number : /)
    const gender = splittedText[i+3].match(/Female|Male/g)
    const age = splittedText[i+3].match(/\b\d+\b/g)
    console.log("name",name,"husbandName",husbandName,"houseNumber",houseNumber)
    
    loop.map((item) => {
        let obj = {
            name: name?.[item],
            husbandName: husbandName?.[item],
            houseNumber: houseNumber?.[item],
            gender: gender?.[item-1],
            age: age?.[item-1] 
        };
        data.push(obj);
    })
    // console.log(data)
}
