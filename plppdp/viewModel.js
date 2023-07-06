

  
  // viewModel.js

  console.log('hello')
  define(['knockout'], function(ko) {
    return function() {
      var self = this;
  
      // Data
      self.products = [
        // Define your products ) {
       
        {name:'Boult Audio Airbass',category: 'AUDIO',price:'1399',description:'Boult Audio AirBass Y1 TWS Earbuds, 40H Playtime, Fast Charging, Pro+ Calling, Type C, IPX5 Water Resistant, Bluetooth v5.1, Voice Assistant Bluetooth Headset  (White, True Wireless)',link:''},
        {name:'Aroma NB120',category: 'AUDIO',price:'349',description:'Aroma NB120 Famous 36 Hours Playtime Dual Pairing Bluetooth Neckband Earphone Bluetooth Headset  (Black, Black, In the Ear)',link:''},
        {name:'boAt Rockers 255 pro+',category:'AUDIO',price:'1299',description:'boAt Rockerz 235 Pro with upto 20 Hours Playback & ASAP Charge Bluetooth Headset  (Furious Blue, In the Ear)',link: ''},
        {name:'Noise Buds Verve',category:'AUDIO',price:'1199',description:'Noise Buds Verve with 45 Hrs Playtime, Environmental Noise Cancellation, Quad Mic Bluetooth Headset  (Forest Green, True Wireless)',link: ''},
        {name:'PTRon Bassbuds',category:'AUDIO',price:'799',description:'PTron Bassbuds Joy TWS with 13mm Drivers, Stereo Calls, 32Hrs Playtime,Type-C Charging Bluetooth Headset  (White, True Wireless)',link: ''},
        {name:'Boult Audio Ammo',category:'AUDIO',price:'1399',description:'Boult Audio Ammo 40H Playtime, ZEN ENC Mic, 40ms Low Latency Gaming Mode, Interactive LED Bluetooth Headset  (Black, True Wireless)',link: ''},
        {name:'Canon EOS 3000',category:'CAMERA',price:'29000',description:'Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)',link:'canonEOS3000.html'},
        {name:'Canon EOS 90D',category:'CAMERA',price:'124000',description:'Canon EOS 90D DSLR Camera Body with Single Lens 18 - 135 mm IS USM  (Black)',link:''},
        {name:'Canon EOS 850D',category:'CAMERA',price:'69000',description:'Canon EOS 850D DSLR Camera body with EF-S18-55mm f/4-5.6 IS STM  (Black)',link:''},
        {name:'Nikon Z5',category:'CAMERA',price:'145000',description:'Your full-frame mirrorless journey starts here.Push the limits of your creativity with Z 5, an innovative full frame mirrorless camera built around Nikon',link:'NikonZ5.html'},
        {name:'Nikon Z 30',category:'CAMERA',price:'102000',description:'The Z 30 is made for your inner videographer. Hit record with ease whenever inspiration strikes. Excite the ears of your audience with premium sound quality from dual microphones. ',link:''},
        {name:'Nikon Z611',category:'CAMERA',price:'2340000',description:'Do it all with this versatile full frame mirrorless hybrid that excels in speed, image quality and video performance. Everything a hybrid still and video mirrorless camera is meant to be. High-speed shooting with the buffer capacity to match',link:''},
        {name:'Samsung Galaxy F54',category: 'MOBILE',price:'32000',description:'Packed with a myriad of exciting, innovative features, this Samsung Galaxy F54 smartphone is a revolutionary piece of technology. Rise up to your expectations and level up your excitement as this phone is sure to impress you in all its glory. ',link:''},
        {name:'Samsung Galaxy S23 Ultra',category: 'MOBILE',price:'125000',description:"Get a smartphone for yourself that can detect your moods and react appropriately. The Samsung Galaxy Ultra's potent processor and advanced camera sensor can handle low light and noise reduction. The phone's Snapdragon 8 Gen 2 processor, which also provides a long battery life to carry you through even the busiest days, also enables quick gaming and video streaming.",link:''},
        {name:'Samsung Galaxy A54',category: 'MOBILE',price:'38000',description:"The Samsung Galaxy A54 5G smartphone has a stunning design, thanks to its thin frame and neat camera layout. You can record life-like videos on its mesmerising camera with VDIS and auto focus. Capturing nightlife has never been easy, all thanks to the Wide OIS and image sensor featured in this smartphone",link:''},
        {name:'RealMe C55',category: 'MOBILE',price:'14000',description:'Carry a sophisticated smartphone with you that allows you to multitask effortlessly and continue working no matter how challenging the day appears to be. The 64 MP AI camera of the Realme C55 enables you to snap stunning, high-quality photographs that capture every detail with remarkable clarity. Get a fantastic visual experience as well with the 17.07 cm (6.72) 90 Hz FHD+ display, which can captivate and excite you. Perceive astounding speed and faultless efficiency with up to 16 GB of dynamic RAM, as well. ',link:''},
        {name:'Realme C30',category: 'MOBILE',price:'6500',description:'Explore your inner self and be outspoken about it with the realme C30 smartphone which reflects your persona to the whole world with its intuitive nature. Powered by the Unisoc T612 processor, you can seamlessly multitask and get things done at your convenience. Furthermore, an 8 MP AI-driven rear camera and a 5 MP selfie camera allow you to capture stunning images with exceptional imagery. ',link:''},
        {name:'Realme 8i',category: 'MOBILE',price:'11500',description:"Handset, Adapter, USB Cable, SIM Card Tool, Screen Protect Film, TPU Case, Important Info Booklet with Warranty Card, Quick Guide",link:''},
        {name:'Truke Buds Vibe',category:'AUDIO',price:'1600',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''},
        {name:'Nikon Z5',category:'CAMERA',price:'145000',description:'Your full-frame mirrorless journey starts here.Push the limits of your creativity with Z 5, an innovative full frame mirrorless camera built around Nikon',link:''},
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''},
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''} ,
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''}, 
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''},
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''},
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''},
        {name:'Realme 10',category:'MOBILE',price:'16000',description:"Get a Realme 10 smartphone for yourself and experience the enhanced feeling of colourful lifestyle that comes with it. In addition to its outstanding SOC performance, fluid apps, rapid startup, and quick page loading, this phone has a brilliant GPU performance for high frame rate, fluid gaming, and decreased latency. You can also enjoy stunning visuals thanks to the Realme 10's 90 Hz Super AMOLED display, 16.25 cm (6.4) FHD+ screen, 90.8% ",link:''},

    
    
    
    
    ];


      console.log(self.products)
      self.categories = ['AUDIO', 'MOBILE', 'CAMERA','LAPTOP'];
      self.selectedCategory = ko.observable(self.categories[0]);
      self.currentPage = ko.observable(1);
      self.productsPerPage = 3;
      self.pagination;
      self.totalPages = ko.observable();
    self.numbers = ko.observable([])

    

      
  
   

    console.log(self.products)
    self.updateTotalPages = function() {
        var totalProducts = self.products.filter(function(product) {
          return product.category === self.selectedCategory();
        }).length;
        self.totalPages(Math.ceil(totalProducts / self.productsPerPage));
      };

      self.updateTotalPages()
    console.log(self.totalPages())

    
      console.log(self.totalPages())

    

    self.displayedProducts = ko.computed(function() {
        var start = (self.currentPage() - 1) * self.productsPerPage;
        var end = start + self.productsPerPage;
  
        return self.products.filter(function(product) {
          return product.category === self.selectedCategory();
        }).slice(start, end);
      });
  
      // Pagination functions
      self.canGoToPreviousPage = ko.computed(function() {
        return self.currentPage() > 1;
      });
  
      self.canGoToNextPage = ko.computed(function() {
        return self.currentPage() < self.totalPages();
      });
  
      self.goToPreviousPage = function() {
        if (self.canGoToPreviousPage()) {
          self.currentPage(self.currentPage() - 1);
        }
      };
  
      self.goToNextPage = function() {
        if (self.canGoToNextPage()) {
          self.currentPage(self.currentPage() + 1);
        }
      };
  
      self.goToPage = function(data) {
        self.currentPage(data);
      };
  
      // Update total pages when the selected category changes
      self.selectedCategory.subscribe(function() {
        self.currentPage(1); // Reset to the first page
        self.updateTotalPages();
      });
  
      // Update total pages based on the selected category
      self.updateTotalPages = function() {
        var totalProducts = self.products.filter(function(product) {
          return product.category === self.selectedCategory();
        }).length;
        self.totalPages(Math.ceil(totalProducts / self.productsPerPage));
      };
  
      // Generate an array of page numbers based on the total pages
      self.pageNumbers = ko.computed(function() {
        var numbers = [];
        for (var i = 1; i <= self.totalPages(); i++) {
          numbers.push(i);
        }

        console.log(numbers)
        return numbers;
      });

      console.log(self.pageNumbers())

      
  
      // Initialize total pages
      self.update


    
   
  
    };
  });
  