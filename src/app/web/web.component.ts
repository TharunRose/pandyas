import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// export interface ListItem {
  
//   text: string;
//   imageUrl:string;
// }
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements AfterViewInit {
  @ViewChild('mapFrame') mapFrame!: ElementRef;

  ngAfterViewInit() {
    // Display default map location when the component initializes
    this.showDefaultMap();
  }

  showDefaultMap() {
    const mapElement: HTMLIFrameElement = this.mapFrame.nativeElement;
    const defaultMapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4963.319310372204!2d0.051331!3d51.537802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7dcde009f37%3A0xb6c030e473730b29!2sPANDYAS!5e0!3m2!1sen!2sin!4v1704779539171!5m2!1sen!2sin`;

    // Set default map source
    mapElement.src = defaultMapSrc;
  } 

  

  showLocationOnMap(location: string) {
    const mapElement: HTMLIFrameElement = this.mapFrame.nativeElement;
    const mapSrcLondon = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4963.319310372204!2d0.051331!3d51.537802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7dcde009f37%3A0xb6c030e473730b29!2sPANDYAS!5e0!3m2!1sen!2sin!4v1704779539171!5m2!1sen!2sin`;
    const mapSrcIndia =  `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4963.319310372204!2d0.051331!3d51.537802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7dcde009f37%3A0xb6c030e473730b29!2sPANDYAS!5e0!3m2!1sen!2sin!4v1704779539171!5m2!1sen!2sin`;
    const mapSrcAmerica = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4963.319310372204!2d0.051331!3d51.537802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7dcde009f37%3A0xb6c030e473730b29!2sPANDYAS!5e0!3m2!1sen!2sin!4v1704779539171!5m2!1sen!2sin`;
    const mapSrcchina = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4963.319310372204!2d0.051331!3d51.537802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7dcde009f37%3A0xb6c030e473730b29!2sPANDYAS!5e0!3m2!1sen!2sin!4v1704779539171!5m2!1sen!2sin`;

    // Manipulate the map source URL based on the clicked location
    if (location === 'London') {
      mapElement.src = mapSrcLondon + '&q=London';
    } else if (location === 'India') {
      mapElement.src = mapSrcIndia + '&q=India';
    } else if (location === 'America') {
      mapElement.src = mapSrcAmerica + '&q=America';
    }else if(location==='China'){
      mapElement.src=mapSrcchina+'&q=China'
    }
  }
   
  vegImage='assets/icons/salad.png';
  nonVegImage='assets/icons/fried-chicken (1).png';
  fishImage='assets/icons/fish.png';
  egg='assets/icons/egg.png'
  gravy='assets/icons/curry.png'

  // Dosa and Tiffin 
   dosaAndTiffin = [
    {  text: 'Idly 3pc (v)', imageUrl:this.vegImage , amount:'£2.99' },
    {  text: 'Pongal (v)', imageUrl:this.vegImage ,amount:'£3.50' },
    {  text: 'Plain Dosa (v)', imageUrl:this.vegImage , amount:'£3.50' },
    {  text: 'Ghee Roast (v)', imageUrl:this.vegImage , amount:'£3.99' },
    {  text: 'Kal Dosa(2Pc) (v)', imageUrl:this.vegImage , amount:'£4.50' },
    {  text: 'Onion Dosa (v)', imageUrl:this.vegImage , amount:'£3.99' },
    {  text: 'Masals Dosa (v)', imageUrl:this.vegImage , amount:'£4.99' },
    {  text: 'Podi Dosa (v)', imageUrl:this.vegImage , amount:'£3.99' },
    {  text: 'egg Dosa', imageUrl:this.egg , amount:'£4.99' },
    {  text: 'Pandyas Chicken Curry Dosa', imageUrl:this.nonVegImage , amount:'£5.99' },
    {  text: 'Pandyas Mutton Curry Dosa ', imageUrl:this.nonVegImage , amount:'£6.99' },
     
  ];

// Rice and Briyani 
riceAndBriyani = [
  {  text: 'plain Rice (v)', imageUrl:this.vegImage , amount:'£2.00' },
  {  text: 'pilau rice (v)', imageUrl:this.vegImage ,amount:'£3.50' },
  {  text: 'Egg Briyani', imageUrl:this.egg , amount:'£4.50' },
  {  text: 'Chicken Briyani', imageUrl:this.nonVegImage , amount:'£5.99' },
  {  text: 'Mutton Briyani', imageUrl:this.nonVegImage , amount:'£6.99' },
  {  text: 'veg fried rice', imageUrl:this.vegImage , amount:'£4.99' },
  {  text: 'egg fried rice', imageUrl:this.egg , amount:'£5.50' },
  {  text: 'Chicken fried rice', imageUrl:this.nonVegImage , amount:'£5.99' },
  {  text: 'Mutton fried rice', imageUrl:this.nonVegImage , amount:'£6.99' },
 
];


// breads
breads = [
  {  text: 'Chappathi (v)', imageUrl:this.vegImage , amount:'£1.00' },
  {  text: 'Parotta (v)', imageUrl:this.vegImage ,amount:'£1.25' },
  {  text: 'veg kothu (v)', imageUrl:this.vegImage , amount:'£4.50' },
  {  text: 'egg kothu', imageUrl:this.egg , amount:'£4.50' },
  {  text: 'Chicken kothu', imageUrl:this.nonVegImage , amount:'£5.50' },
  {  text: 'Mutton kothu', imageUrl:this.nonVegImage , amount:'£6.50' },
 
];

// breads
sides = [
  {  text: 'Pandyas special Salna (small)', imageUrl:this.gravy , amount:'£1.99' },
  {  text: 'Pandyas special Salna (large)', imageUrl:this.gravy ,amount:'£3.99' },
];

currys = [
  {  text: 'dhal/dhal spinach (v)', imageUrl:this.vegImage , amount:'£3.25' },
  {  text: 'Sambar (v)', imageUrl:this.vegImage ,amount:'£3.00' },
  {  text: 'channa masala  (v)', imageUrl:this.vegImage , amount:'£3.50' },
  {  text: 'kaara kuzhambu (v)', imageUrl:this.vegImage , amount:'£4.50' },
  {  text: 'veg kothu/Poriyal', imageUrl:this.vegImage , amount:'£3.00' },
  {  text: 'rasam  ', imageUrl:this.vegImage , amount:'£2.00' },
  {  text: 'Chicken curry', imageUrl:this.nonVegImage , amount:'£5.50' },
  {  text: 'Mutton curry', imageUrl:this.nonVegImage , amount:'£6.50' },
  {  text: 'Fish curry', imageUrl:this.fishImage , amount:'£6.50' },
 
];


// breads
deserts = [
  {  text: 'south indian sweet', imageUrl:this.vegImage , amount:'£1.00' },
  {  text: 'kadalai mittai(Peanut cake 2pc)', imageUrl:this.vegImage ,amount:'£1.00' },
  {  text: 'vazhai pazham(indian banana)', imageUrl:this.vegImage , amount:'£1.00' },
  {  text: 'Jigarthanda', imageUrl:this.egg , amount:'£3.99' },
  
 
];


}
