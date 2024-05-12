import { atom } from "nanostores";
const initPopVisible = { value: false };
const isPopVisible = atom(initPopVisible);
const PopIframeURL = atom({
  value: "",
});

function setPopVisible(visible) {
  isPopVisible.set({ value: visible });
}
function setIframeURL({ url, visible }) {
  PopIframeURL.set({ value: url });
  isPopVisible.set({ value: visible });
}

const projects = [
  {
    title: "InterContinental Beppu Japan",
    bgImage: "/images/InterContinental-Beppu-Japan.jpg",
    projectLink: "https://www.eyenavasia.com/japan/ic_beppu/embed.htm",
    type: "featured",
  },
  {
    title: "Le Meridien Phuket",
    bgImage: "/images/projects/01Le-Meridien-Phuket.jpg",
    type: "featured",
  },
  {
    title: "Krabi Resort",
    bgImage: "/images/projects/02Krabi-Resort.jpg",
    projectLink: "https://eyenavthailand.com/krabi_resort/",
    type: "featured",
  },
  {
    title: "Rang Noi Private Island",
    bgImage: "/images/Rang-Noi-Private-Island.jpg",
    projectLink: "https://www.eyenavphuket.com/jbs_rangnoi/",
    type: "featured",
  },
  {
    title: "Samujana Villas",
    bgImage: "/images/Samujana-Villas.jpg",
    projectLink: "https://eyenavthailand.com/samujana/villa12/",
    type: "featured",
  },
  {
    title: "The-Sarojin",
    bgImage: "/images/The-Sarojin.jpg",
    projectLink: "https://eyenavthailand.com/the_sarojin/",
    type: "featured",
  },
  {
    title: "Villa Carmina Italy",
    bgImage: "/images/Villa-Carmina-Italy.jpg",
    projectLink: "https://eyenav.com/projects/villa_carmina/aerial_view.htm",
    type: "featured",
  },

  {
    title: "Diamond Cliff Resort",
    bgImage: "/images/projects/Diamond-Cliff-Resort.jpg",
    projectLink: "https://eyenavphuket.com/diamond_cliff/",
    type: "more",
  },
  {
    title: "Krabi Resort",
    bgImage: "/images/projects/Krabi-Resort.jpg",
    projectLink: "https://eyenavthailand.com/krabi_resort/",
    type: "more",
  },

  {
    title: "Le Meridien Phuket",
    bgImage: "/images/projects/Le-Meridien-Phuket.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    type: "more",
  },

  {
    title: "Rang Noi Privet Island",
    bgImage: "/images/projects/Rang-Noi-Private-Island.jpg",
    projectLink: "https://www.eyenavphuket.com/jbs_rangnoi/",
    type: "more",
  },

  {
    title: "Saii Phi Phi Island Village",
    bgImage: "/images/projects/Saii-Phi-Phi-Island-Village.jpg",
    projectLink: "https://eyenavthailand.com/phiphi_village/",
    type: "more",
  },

  {
    title: "The Sarojin",
    bgImage: "/images/projects/The-Sarojin.jpg",
    projectLink: "https://eyenavthailand.com/the_sarojin/",
    grpName: "Resorts",
    type: "more",
  },

  {
    title: "Villa Carmina Itlay",
    bgImage: "/images/projects/Villa-Carmina-Italy.jpg",
    projectLink: "https://eyenav.com/projects/villa_carmina/aerial_view.htm",
    grpName: "Resorts",
    type: "more",
  },

  {
    title: "Anantara Riverside Bangkok Resort",
    bgImage: "/images/projects/Anantara_Riverside.jpg",
    projectLink: "https://www.anantara.com/en/riverside-bangkok/virtual-tour",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Aurora Ozone Hotel",
    bgImage: "/images/projects/Aurora_Ozone.jpg",
    projectLink: "https://eyenavaustralia.com/aurora_ozone/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Bandara Suites Silom Bangkok",
    bgImage: "/images/projects/Bandara_Silom.jpg",
    projectLink: "https://www.eyenavthailand.com/bandara_bangkok/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Crowne Plaza Vientiane ",
    bgImage: "/images/projects/Crowne_Plaza_Vientiane.jpg",
    projectLink:
      "https://www.eyenavasia.com/laos/cp_vientiane/tour/index1.html",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Diamond Cliff Resort & Spa Phuket",
    bgImage: "/images/projects/Diamond_Cliff_Resort.jpg",
    projectLink: "https://eyenavphuket.com/diamond_cliff/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Dusit Krabi Beach Resort",
    bgImage: "/images/projects/Dusit_Krabi.jpg",
    projectLink: "https://eyenavthailand.com/dusit_krabi/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Holiday Inn Vana Nava Hua Hin",
    bgImage: "/images/projects/Holiday_Inn_Vana_Nava.jpg",
    projectLink: "https://eyenavthailand.com/hir_vananava/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "InterContinental Hanoi Landmark 72",
    bgImage: "/images/projects/InterContinental_Hanoi.jpg",
    projectLink: "https://eyenavasia.com/vietnam/ic_landmark72/embed.html",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "JW Marriott Phuket Resort & Spa",
    bgImage: "/images/projects/Villa-Carmina-Italy.jpg",
    projectLink: "https://www.eyenavphuket.com/jw_phuket/",
    grpName: "Resorts",
    cat: "resort",
  },

  {
    title: "Krabi Resort",
    bgImage: "/images/projects/Dusit_Krabi.jpg",
    projectLink: "https://eyenavthailand.com/krabi_resort/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Le Meridien Phuket Beach Resort",
    bgImage: "/images/projects/LeMeridien_Phuket.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Marriott Bangkok Sukhumvit",
    bgImage: "/images/projects/Marriott_Sukhumvit.jpg",
    projectLink: "https://eyenavthailand.com/marriott_sukhumvit/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Mount Lofty House",
    bgImage: "/images/projects/Mt_Lofty_House.jpg",
    projectLink: "https://eyenavaustralia.com/mtlofty_house/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "InterContinental Phu Quoc Long Beach Resort",
    bgImage: "/images/projects/Phu_Quoc_InterContinental.jpg",
    projectLink: "https://www.eyenavasia.com/vietnam/ic_phuquoc/embed.htm",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Ramada Resort By Wyndham Khao Lak",
    bgImage: "/images/projects/Ramada_Khao_Lak.jpg",
    projectLink: "https://eyenavthailand.com/ramada_khaolak/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "The Reef House",
    bgImage: "/images/projects/Reef_House.jpg",
    projectLink: "https://eyenavaustralia.com/reef_house/",
    grpName: "Resorts",
    cat: "resort",
  },

  {
    title: "Thavorn Beach Village Resort",
    bgImage: "/images/projects/Thavorn_Beach.jpg",
    projectLink: "https://eyenavphuket.com/thavorn_beach/",
    grpName: "Resorts",
    cat: "resort",
  },
  {
    title: "Villa Carmina Italy",
    bgImage: "/images/projects/Villa_Carmina.jpg",
    projectLink: "https://eyenav.com/projects/villa_carmina/aerial_view.htm",
    grpName: "Resorts",
    cat: "resort",
  },

  {
    title: "Alan Sheppard Constructions",
    bgImage: "/images/projects/Alan_Sheppard.jpg",
    projectLink: "https://eyenavaustralia.com/alan_sheppard/stpeters/",
    grpName: "Villas & Property",
    cat: "villa",
  },

  {
    title: "Amanpuri Villas",
    bgImage: "/images/projects/Amanpuri_Villas.jpg",
    projectLink: "https://eyenavphuket.com/amp/villa25/",
    grpName: "Villas & Property",
    cat: "villa",
  },

  {
    title: "GP Architects",
    bgImage: "/images/projects/GP_Architects.jpg",
    projectLink: "http://eyenavaustralia.com/gp_architects/",
    grpName: "Villas & Property",
    cat: "villa",
  },

  {
    title: "Jockwar Lakeside Property",
    bgImage: "/images/projects/Jockwar.jpg",
    projectLink: "https://eyenavaustralia.com/jockwar/",
    grpName: "Villas & Property",
    cat: "villa",
  },

  {
    title: "Villa Padma Phuket",
    bgImage: "/images/projects/Villa_Padma.jpg",
    projectLink: "https://eyenavthailand.com/villa_padma/",
    grpName: "Villas & Property",
    cat: "villa",
  },

  {
    title: "Merchants",
    bgImage: "/images/projects/3merchants.jpg",
    projectLink:
      "https://www.eyenavasia.com/laos/cp_vientiane/tour/3merchants.html",
    grpName: "Venues & Restaurants",
    cat: "venue",
  },

  {
    title: "Benihana Phuket",
    bgImage: "/images/projects/Benihana.jpg",
    projectLink: "https://eyenavphuket.com/jw_phuket/benihana/",
    grpName: "Venues & Restaurants",
    cat: "venue",
  },
  {
    title: "Hardys Verandah Restaurant",
    bgImage: "/images/projects/Hardys_Verandah.jpg",
    projectLink: "https://eyenavaustralia.com/mtlofty_house/hvr.htm",
    grpName: "Venues & Restaurants",
    cat: "venue",
  },
  {
    title: "Mr Wolf Hong Kong",
    bgImage: "/images/projects/Mr_Wolf.jpg",
    projectLink: "https://eyenavasia.com/hongkong/mr_wolf/",
    grpName: "Venues & Restaurants",
    cat: "venue",
  },
  {
    title: "Mylkappa Wines",
    bgImage: "/images/projects/Mylkappa_Wines.jpg",
    projectLink: "https://eyenavaustralia.com/mylkappa/",
    grpName: "Venues & Restaurants",
    cat: "venue",
  },
  {
    title: "Sea Salt Lounge & Grill",
    bgImage: "/images/projects/Sea_Salt.jpg",
    projectLink: "https://eyenavphuket.com/express/restaurants/seasalt/",
    grpName: "Venues & Restaurants",
    cat: "venue",
  },

  {
    title: "Born Free Yacht Charter",
    bgImage: "/images/projects/Born_Free_Charter.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/born_free.htm",
    grpName: "Yachts & Marinas",
    cat: "yacht",
  },

  {
    title: "Lee Marine Brokerage",
    bgImage: "/images/projects/Lee_Marine.jpg",
    projectLink:
      "https://eyenavphuket.com/lee_marine/brokerage/ferretti_720_band_of_gypsys/",
    grpName: "Yachts & Marinas",
    cat: "yacht",
  },
  {
    title: "Royal Phuket Marina",
    bgImage: "/images/projects/Royal_Phuket_Marina.jpg",
    projectLink: "https://eyenavphuket.com/royalphuketmarina/",
    grpName: "Yachts & Marinas",
    cat: "yacht",
  },
  {
    title: "Sawan Adventures - Luxury Charter",
    bgImage: "/images/projects/Sawan_Adventures.jpg",
    projectLink: "https://eyenavphuket.com/jbs_rangnoi/charter/princess/",
    grpName: "Yachts & Marinas",
    cat: "yacht",
  },

  {
    title: "Darwin Destinations ",
    bgImage: "/images/projects/Darwin_Destinations.jpg",
    projectLink: "https://eyenavaustralia.com/destination_darwin",
    grpName: "Parks & Councils",
    cat: "park",
  },

  {
    title: "Discovery Parks - Hahndorf ",
    bgImage: "/images/projects/Discovery_Parks.jpg",
    projectLink: "https://eyenavaustralia.com/discovery_parks/hahndorf/",
    grpName: "Parks & Councils",
    cat: "park",
  },

  {
    title: "Innes National Park Coastline",
    bgImage: "/images/projects/Innes_National_Park.jpg",
    projectLink: "https://eyenavaustralia.com/innes_park/",
    grpName: "Parks & Councils",
    cat: "park",
  },

  {
    title: "Mt Barker Council ",
    bgImage: "/images/projects/Mt_Barker_Council.jpg",
    projectLink: "https://eyenavaustralia.com/sa_destinations/mt_barker/",
    grpName: "Parks & Councils",
    cat: "park",
  },
];

const clients = [
  {
    logo: "/images/clients/01JW-Marriott.png",
  },
  {
    logo: "/images/clients/02LeMeridien.png",
  },
  {
    logo: "/images/clients/03Dusit-Hotels.png",
    webLink: "https://www.dusit.com/dusitthani-krabibeachresort/meetings/",
  },
  {
    logo: "/images/clients/04InterContinental Hotels.png",
    webLink: "https://phuquoc.intercontinental.com/meetings-events",
  },
  {
    logo: "/images/clients/05Crowne-Plaza.png",
    webLink: "https://vientiane.crowneplaza.com/3-merchants",
  },
  {
    logo: "/images/clients/06Holiday-Inn.png",
    webLink: "https://vananavahuahin.holidayinnresorts.com/",
  },
  {
    logo: "/images/clients/07Marriott.png",
  },
  {
    logo: "/images/clients/08Ramada.png",
    webLink:
      "https://www.ramadakhaolak.com/rooms-villas/private-pool-villa.html",
  },
  {
    logo: "/images/clients/09Sequoia-Lodge.png",
    webLink: "https://www.sequoialodge.com.au/sequoia-suites/ ",
  },
  {
    logo: "/images/clients/10OzoneKI.png",
    webLink: "https://ozonehotelki.com.au/360-aurora-ozone-hotel-tour/",
  },
  {
    logo: "/images/clients/11ReefHouse.png",
    webLink:
      "https://www.reefhouse.com.au/villa-casablanca-4-bedroom-spa-plunge-pool/",
  },
  {
    logo: "/images/clients/12DiamondCliff.png",
    webLink: "https://www.diamondcliff.com/",
  },
  { logo: "/images/clients/13MVC.png" },
  {
    logo: "/images/clients/14Samujana.png",
    webLink: "https://samujana.com/villas/villa-28/",
  },
  {
    logo: "/images/clients/14Wyndham.png",
    webLink: "https://www.wyndhamgrandphuket.com/rooms",
  },
  {
    logo: "/images/clients/16Thavorn.png",
    webLink: "https://www.thavornbeachvillage.com/360-overview",
  },
  {
    logo: "/images/clients/17LadyBayResort.png",
    webLink: "https://linksladybay.com.au/",
  },
  {
    logo: "/images/clients/18KrabiResort.png",
    webLink: "https://www.krabiresort.net/tropical-pool-villa.php 	",
  },
];

const testimonials = [
  {
    id: 1,
    review:
      "Tom’s eyeNAV 360 photography showcases our facilities brilliantly when doing sales presentations. He facilitated in getting our 360 photos on Booking.com and showed us how to post them on Facebook. The fees are reasonable for the high quality of work",
    user: "Marriott Manila General Manager - Richard M. Saul ",
  },
  {
    id: 2,
    review:
      "The quality and realism of the images that have been provided are a credit to eyeNAV and a real asset for our online marketing. I have no hesitation recommending eyeNAV for quality work that is also affordable. Here is one of the typical guest comments we receive referring to the helpfulness of these 360˚ Tours during the booking process. Trip Advisor comment: “Excellent Hotel” I stayed at the BYD lofts for two nights at the end of September, in the 2-bedroom suite. The room (apartment) was pristine - it looks just like the 360 degree tour you can find on their website. I've been let down by so many hotels in the past when I arrive and find out that the pictures were taken at good angles and photoshopped. But in this case, that was not the case! The room is shiny and bright.",
    user: "BYD LOFTS: Owner - Alex Bressers",
  },
  {
    id: 3,
    review:
      "We're consistently using the eyeNAV 360 format and thanks for updating our new logo. All the developed tools you provided help our sales team to better sell the hotel and destination. Our Sales team use the enhanced web tour a lot in their proposals to meeting/event organizers, running it offline during Trade shows & wedding expos, and we always include it on our email tagline, etc...",
    user: "JW MARRIOTT HONG KONG  Cherry Ko - E-Commerce Director",
  },
  {
    id: 4,
    review:
      "Hi Franco and Wesley,   I know that you have been in contact Tom Janzow of Eyenav 360 media regarding the possibility setting up a similar presentation for the JW Beijing.  I just want to advise how pleased I am with my product which has now been distributed to all GSOs around the globe.  Its a fantastic sales vehicle which has already assisted our hotel in closing some MICE bookings.  We have featured a 5 minute city overview of Shanghai too, which was provided by the Shanghai Tourism authorities.   If you need any further information then just shout!   With thanks",
    user: "JW Marriott Shanghai Simon Dowell - Director of Sales & Marketing",
  },
  {
    id: 5,
    review:
      "Attention Hotel partners, Tom Janzow of eyeNAV is regarded as the expert in Virtual 360 degree Tours, is travelling to Manila next year. He did this work for all the El Nido Resorts I was managing which helped us market the El Nido Resorts very successfully. Tom would be available to make a competitive quotation and requires us to make a draft shot list as the total production cost reflects how many 360 photos we need in our presentation. E.g all room types, event spaces and facilities.",
    user: "AURA HOTELS & RESORTS President / Senior Consultant – Etienne La’Brooy",
  },
];

const services = [
  {
    title: "Production Services",
    slug: "production-services",
    items: [
      {
        title: "360 Photography",
        thumb: "/images/services/ps1.png",
        link: "#360-photography",
        face: "/images/services/ps1.png",
        faceType: "image",
        detail:
          "<p>Our 360ﾟ photography sets out to represent a space or facility in its best light with WoW factor or careful setups which make consumers feel like being there. In the same way as professional hotel still photography is done, an eyeNAV360 shoot is all in the preparation and timing.</p><p>There's no Fuss & No extra lighting, we carefully plan the shots with our clients and make sure they feature their brand standard setups. We use natural ambient light and avoid harsh daytime sun, executing most of our shoots during at early mornings and early evenings.</p><p>Care is taken to ensure our scheduled photo shoots bring minimal challenges to your operations and no effect on guest experience.</p>       ",
        gallery: {
          thumb: "/images/services/ps1.png",
          title: "View Images",
          images: [
            "/images/services/s1/g1/img1.jpg",
            "/images/services/s1/g1/img2.jpg",
            "/images/services/s1/g1/img3.jpg",
            "/images/services/s1/g1/img4.jpg",
            "/images/services/s1/g1/img5.jpg",
            "/images/services/s1/g1/img6.jpg",
            "/images/services/s1/g1/img7.jpg",
            "/images/services/s1/g1/img8.jpg",
          ],
        },
      },

      {
        title: "Building Custom Presentation",
        thumb: "/images/services/ps6.jpg",
        link: "#building-custom-presentation",
        face: "/images/services/ps6.jpg",
        faceType: "image",
        detail:
          "<p>Our custom branded 360° Interactive Tours are the packaging we provide with our Panoramic Photography.  We will create a bespoke virtual tour with an option of different user interfaces, allowing viewers to explore your property in an intuitive way.</p><p>eyeNAV 360° Interactive Tours 360 are built to highlight all the features of your property, while enabling a visual story to the consumer. We implement hotspots and navigation menus that give your potential customers easy access to see what makes it unique.</p><p>With our Interactive 360° Tours, you can experience the highest level of engagement & visibility possible.          </p>       ",
        gallery: {
          thumb: "/images/services/ps6.jpg",
          title: "View Images",
          images: [
            "/images/services/s1/g1/img1.jpg",
            "/images/services/s1/g1/img2.jpg",
            "/images/services/s1/g1/img3.jpg",
            "/images/services/s1/g1/img4.jpg",
            "/images/services/s1/g1/img5.jpg",
            "/images/services/s1/g1/img6.jpg",
            "/images/services/s1/g1/img7.jpg",
            "/images/services/s1/g1/img8.jpg",
          ],
        },
      },

      {
        title: "Drone Footage",
        thumb: "/images/services/ps2.jpg",
        link: "#360-photography",
        face: "https://www.youtube.com/embed/wANrzz5NBf0?si=1afjvVpkPU7jpUev",
        faceType: "video",
        detail:
          "<p>When capturing 360 degree views of locations and to showcase property layout from above, our drones become our tripod in the sky, perfectly steady hovering at an optimal position above.</p><p>We are passionate about our drone panorama capture and utilise this for showing layouts of resorts and venues from low altitudes which provides great detail. In depth post-production and re-touching is part of this skill set which ensures these interactive aerial scenes which often open our 360 presentations, look neat and tidy.</p><p>We consider ourselves lucky to adopt safe and reliable drones today because our Aerial 360° Photography days started with Giant Kites and Helium Balloons lifting heavy cameras in 2005.</p>",
      },
      {
        title: "Hotel Brand Photography",
        thumb: "/images/services/ps3.jpg",
        link: "#360-photography",
        face: "/images/services/ps3.jpg",
        faceType: "image",
        detail:
          "<p>Refined Hotel Brand Photography & Photos for Sales Collateral are available by our experienced travel photographers as an additional service for your Sales & Marketing needs.</p><p>360 Capture - Due to the high quality of our 360ﾟ panorama construction we are also able to export still photos from our 360s. In many cases these images are adequate for the client's needs.</p>",
        gallery: {
          thumb: "/images/services/ps3.jpg",
          title: "View Images",
          images: [
            "/images/services/s1/g4/img1.jpg",
            "/images/services/s1/g4/img2.jpg",
            "/images/services/s1/g4/img3.jpg",
            "/images/services/s1/g4/img4.jpg",
            "/images/services/s1/g4/img5.jpg",
            "/images/services/s1/g4/img6.jpg",
            "/images/services/s1/g4/img7.jpg",
            "/images/services/s1/g4/img8.jpg",
            "/images/services/s1/g4/img9.jpg",
            "/images/services/s1/g4/img10.jpg",
            "/images/services/s1/g4/img11.jpg",
            "/images/services/s1/g4/img12.jpg",
            "/images/services/s1/g4/img13.jpg",
            "/images/services/s1/g4/img14.jpg",
            "/images/services/s1/g4/img15.jpg",
            "/images/services/s1/g4/img16.jpg",
            "/images/services/s1/g4/img17.jpg",
            "/images/services/s1/g4/img18.jpg",
          ],
        },
      },
      {
        title: "Video Clipettes",
        thumb: "/images/services/ps4.jpg",
        link: "#360-photography",
        face: "https://www.youtube.com/embed/vw04v57w6q4?si=fj7ACek-DaRQKJjt",
        faceType: "video",
        detail:
          "<p>Did you know eyeNAV 360ﾟ photos can also be turned into super smooth HD video clips? We call these '360 clipettes' which usually show just the sweet spot of the 360° view.</p><p>The combination of drone clips and 360 clipettes makes valuable extra content for our clients to use on YouTube, and all social media channels and can be edited into online ads for TikTik and Facebook.</p>",
      },
      {
        title: "Panos & Planets",
        thumb: "/images/services/ps5.jpg",
        link: "#360-photography",
        face: "/images/services/ps5.jpg",
        faceType: "image",
        detail:
          "<p>The art of 360° Photo production  is based on capturing the images with a fisheye lens.<br/>After stitching an equirectangular, spherical Panorama it can then be corrected and viewed as a rectilinear view on your screen. This little side hustle brings back the distortion with Stereophonic and hyperbolics....</p><p>Perhaps its easier just to call this our photo art section ...</p>",
        gallery: {
          thumb: "/images/services/ps5.jpg",
          title: "View Images",
          images: [
            "/images/services/s1/g6/img1.jpg",
            "/images/services/s1/g6/img2.jpg",
            "/images/services/s1/g6/img3.jpg",
            "/images/services/s1/g6/img4.jpg",
            "/images/services/s1/g6/img5.jpg",
            "/images/services/s1/g6/img6.jpg",
            "/images/services/s1/g6/img7.jpg",
            "/images/services/s1/g6/img8.jpg",
            "/images/services/s1/g6/img9.jpg",
            "/images/services/s1/g6/img10.jpg",
          ],
        },
      },
    ],
  },

  {
    title: "Marketing Installations",
    slug: "marketing-installations",
    detail:
      "<p>Installation of our 360° URLs into our client’s websites is a vital component of our service where we liaise directly with their website manager. We provide embed code, customization of 360 URLs & technical guidance. We also point out the advantages of featuring specific 360° views on various subpages of a website to increase conversion. </p><p>Some of our VIP clients are unable to feature their eyeNAV 360 presentations on their corporate brand.com websites. Ironically these clients are some of our most active users of  eyeNAV 360 URLs, being a vital component of their sales activities, especially group proposals and event sales.</p><p>Our complete solution enables eyeNAV 360 photos & URLs to be adopted for all of these Sales & Marketing channels</p><ul><li>Existing & new websites</li><li>E-newsletters</li><li>Facebook Posts / Ads</li><li>Google Business Profile</li><li>Booking.com</li><li>360 QR Codes </li><li>Off-line Presentation APP </li></ul>",
    items: [
      {
        title: "Website Integration",
        thumb: "/images/services/mi1.jpg",
        link: "#360-photography",
        face: "/images/services/mi1.jpg",
        faceType: "image",
        detail:
          "<p>Our 360ﾟ photography sets out to represent a space or facility in its best light with WoW factor or careful setups which make consumers feel like being there. In the same way as professional hotel still photography is done, an eyeNAV360 shoot is all in the preparation and timing.</p><p>There's no Fuss & No extra lighting, we carefully plan the shots with our clients and make sure they feature their brand standard setups. We use natural ambient light and avoid harsh daytime sun, executing most of our shoots during at early mornings and early evenings.</p><p>Care is taken to ensure our scheduled photo shoots bring minimal challenges to your operations and no effect on guest experience.</p>",
      },
      {
        title: "Google Integration",
        thumb: "/images/services/mi2.jpg",
        link: "#360-photography",
        face: "/images/services/mi2.jpg",
        faceType: "image",
        detail:
          "<h2>Precise 360° Photography</h2><p>Our 360ﾟ photography sets out to represent a space or facility in its best light with WoW factor or careful setups which make consumers feel like being there. In the same way as professional hotel still photography is done, an eyeNAV360 shoot is all in the preparation and timing.</p><p>There's no Fuss & No extra lighting, we carefully plan the shots with our clients and make sure they feature their brand standard setups. We use natural ambient light and avoid harsh daytime sun, executing most of our shoots during at early mornings and early evenings.</p><p>Care is taken to ensure our scheduled photo shoots bring minimal challenges to your operations and no effect on guest experience.</p>",
        gallery: {
          thumb: "/images/services/ps5.jpg",
          title: "View Images",
          images: [
            "/images/services/s2/g2/img1.jpg",
            "/images/services/s2/g2/img2.jpg",
            "/images/services/s2/g2/img3.jpg",
            "/images/services/s2/g2/img4.jpg",
            "/images/services/s2/g2/img5.jpg",
            "/images/services/s2/g2/img6.jpg",
            "/images/services/s2/g2/img7.jpg",
            "/images/services/s2/g2/img8.jpg",
          ],
        },
      },
      {
        title: "Booking.com 360 Upload",
        thumb: "/images/services/mi3.jpg",
        link: "#360-photography",
        face: "https://www.youtube.com/embed/z5TB_7l4a64?si=8vc4AYzz-J26AJBM",
        faceType: "video",
        detail:
          "<h2>Precise 360° Photography</h2><p>Our 360ﾟ photography sets out to represent a space or facility in its best light with WoW factor or careful setups which make consumers feel like being there. In the same way as professional hotel still photography is done, an eyeNAV360 shoot is all in the preparation and timing.</p><p>There's no Fuss & No extra lighting, we carefully plan the shots with our clients and make sure they feature their brand standard setups. We use natural ambient light and avoid harsh daytime sun, executing most of our shoots during at early mornings and early evenings.</p><p>Care is taken to ensure our scheduled photo shoots bring minimal challenges to your operations and no effect on guest experience.</p>",
      },

      {
        title: "Facebook 360 Posts",
        thumb: "/images/services/mi3.jpg",
        link: "#Facebook-360-Posts",
        face: "https://www.ciobulletin.com/assets/home_image/ciobulletin-upload-a-new-360-degree-cover-photo-on-facebook-using-facebook-app.jpg",
        faceType: "image",
        detail:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      },

      {
        title: "QR360 Codes for Print",
        thumb: "/images/services/mi3.jpg",
        link: "#QR360-Codes-for-Print",
        face: "https://s3-eu-west-2.amazonaws.com/techtrail-s3/2023/11/3D-Printed-QR-Codes.webp",
        faceType: "image",
        detail:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      },

      {
        title: "360 Tour Hosting Service",
        thumb: "/images/services/mi3.jpg",
        link: "#360-Tour-Hosting-Service",
        face: "data:image/jpeg;base64,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",
        faceType: "image",
        detail:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      },
    ],
  },

  {
    title: "Sales Team Support",
    slug: "sales-team-support",
    items: [
      {
        title: "Presentation Interface",
        thumb: "/images/services/st1.jpg",
        link: "#360-photography",
        face: "/images/services/st1.jpg",
        faceType: "image",
        detail:
          "<p>Our niche service is building unique, eye-catching presentations used as a visual aid for hotel sales teams.</p><p>Presenting your property with an eyeNAV 360 Presentation offers a ‘client centric’ experience,  meaning you can tailor your presentation to exactly what your client wants to see and in any order. This is a more memorable and interactive way of presenting in person, rather than  watching a linear video.</p><p>The main difference between a website 360 tour and a 360 sales presentation is integrating a client's existing sales materials into one seamless interface. Too often we see sales people have problems delivering a seamless presentation bnecause their fact sheet might be a PDF, the image galleries and hero shots are JPG inside a folder, a video clip which opens in windows media player, and a location map JPG and some slides in .PPTx</p><p>eyeNAV sales presentations solve this by integrating your favourite materials into the 360 presentation menu so you only need to run one file.</p><p>A popular feature is the PPT slides feature within the 360 presentation menu.</p><p> This enables the presenter to seamless toggle between image / text slides and 360° views which is an immersive way for the audience to learn aboiut that hotel/venue.</p>",
      },
      {
        title: "Offline Mobile APP",
        thumb: "/images/services/st2.jpg",
        link: "#360-photography",
        face: "/images/services/st2.jpg",
        faceType: "image",
        detail:
          "<a href='https://apps.apple.com/au/app/eyenav-360-asia-luxury-hotels/id1118731433' target='_blank'><p><strong>iOS App Store</strong><br/>https://apps.apple.com/au/app/eyenav-360-asia-luxury-hotels/id1118731433</p></a><a href='https://play.google.com/store/apps/details?id=com.eyenav.tours' target='_blank'><p><strong>Android Google Play Store</strong><br/>https://play.google.com/store/apps/details?id=com.eyenav.tours</p></a>",
      },
      {
        title: "Direct 360 URLs",
        thumb: "/images/services/st3.jpg",
        link: "#360-photography",
        face: "/images/services/st3.jpg",
        faceType: "image",
        detail:
          "<p>The direct URL content offers information about the Dusit Krabi resort in Thailand, including its leisure facilities, dining outlets, accommodation options, and meeting/event spaces.</p><p><strong><a href='/images/Direct-360-URLs.pdf' target='_blank' >View Client PDF</a></strong></p>",
      },
    ],
  },

  {
    title: "Birdeye Golf Interactive",
    slug: "birdeye-golf-interactive",
    items: [
      {
        title: "Presentation Interface",
        thumb: "/images/services/st1.jpg",
        link: "#360-photography",
        face: "/images/services/st1.jpg",
        faceType: "image",
        detail:
          "<p>eyeNAV 360 is proudly in partnership with and responsible for the co-development of Bird(e)ye Interactive.<br/> A visual presentation for destination golf courses, provide dedicated players with a combination of immersive 360° views, fly-throughs, hole maps and player tips.</p><p><a href='https://birdeye.golf' target='_blanket'>Check out birdeye.golf</a> </p>",
      },
    ],
  },
  {
    title: "Express350",
    slug: "express350",
    items: [
      {
        title: "Lorem Impsum Express350",
        thumb: "/images/services/st1.jpg",
        link: "#360-photography",
        face: "/images/services/st1.jpg",
        faceType: "image",
        detail:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
      },
    ],
  },
];

export {
  isPopVisible,
  setPopVisible,
  projects,
  PopIframeURL,
  setIframeURL,
  clients,
  testimonials,
  services,
};
