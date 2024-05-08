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
    webLink: "https://anaicbeppu.com/en/top/",
    type: "featured",
  },
  {
    title: "Le Meridien Phuket",
    bgImage: "/images/projects/01Le-Meridien-Phuket.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    webLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    type: "featured",
  },
  {
    title: "Krabi Resort",
    bgImage: "/images/projects/02Krabi-Resort.jpg",
    projectLink: "https://eyenavthailand.com/krabi_resort/",
    webLink: "https://eyenavthailand.com/krabi_resort/",
    type: "featured",
  },
  {
    title: "Rang Noi Private Island",
    bgImage: "/images/Rang-Noi-Private-Island.jpg",
    projectLink: "https://www.eyenavphuket.com/jbs_rangnoi/",
    webLink: "https://www.johnbsutherland.com/koh-rang-noi-island-phuket.html",
    type: "featured",
  },
  {
    title: "Samujana Villas",
    bgImage: "/images/Samujana-Villas.jpg",
    projectLink: "https://eyenavthailand.com/samujana/villa12/",
    webLink: "https://samujana.com/villas/villa-12/",
    type: "featured",
  },
  {
    title: "The-Sarojin",
    bgImage: "/images/The-Sarojin.jpg",
    projectLink: "https://eyenavthailand.com/the_sarojin/",
    webLink: "https://www.sarojin.com/en/khao-lak-resort-rooms/j-pool-suite/",
    type: "featured",
  },
  {
    title: "Villa Carmina Italy",
    bgImage: "/images/Villa-Carmina-Italy.jpg",
    projectLink: "https://eyenav.com/projects/villa_carmina/aerial_view.htm",
    webLink: "https://secretretreat.com/properties/villa-carmina/",
    type: "featured",
  },

  {
    title: "Diamond Cliff Resort",
    bgImage: "/images/projects/Diamond-Cliff-Resort.jpg",
    projectLink: "https://eyenavphuket.com/diamond_cliff/",
    webLink: "https://www.diamondcliff.com/villas/",
    type: "more",
  },
  {
    title: "Krabi Resort",
    bgImage: "/images/projects/Krabi-Resort.jpg",
    projectLink: "https://eyenavthailand.com/krabi_resort/",
    webLink: "http://www.krabiresort.net/tropical-pool-villa.php",
    type: "more",
  },

  {
    title: "Le Meridien Phuket",
    bgImage: "/images/projects/Le-Meridien-Phuket.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    webLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    type: "more",
  },

  {
    title: "Rang Noi Privet Island",
    bgImage: "/images/projects/Rang-Noi-Private-Island.jpg",
    projectLink: "https://www.eyenavphuket.com/jbs_rangnoi/",
    webLink: "https://www.johnbsutherland.com/koh-rang-noi-island-phuket.html",
    type: "more",
  },

  {
    title: "Saii Phi Phi Island Village",
    bgImage: "/images/projects/Saii-Phi-Phi-Island-Village.jpg",
    projectLink: "https://eyenavthailand.com/phiphi_village/",
    webLink:
      "https://www.saiiresorts.com/phiphiisland/village/sleep/deluxe-premium-bungalow/",
    type: "more",
  },

  {
    title: "The Sarojin",
    bgImage: "/images/projects/The-Sarojin.jpg",
    projectLink: "https://eyenavthailand.com/the_sarojin/",
    webLink: "https://www.sarojin.com/en/khao-lak-resort-rooms/j-pool-suite/",
    type: "more",
  },

  {
    title: "Villa Carmina Itlay",
    bgImage: "/images/projects/Villa-Carmina-Italy.jpg",
    projectLink: "https://eyenav.com/projects/villa_carmina/aerial_view.htm",
    webLink: "https://secretretreat.com/properties/villa-carmina/",
    type: "more",
  },

  {
    title: "Anantara Riverside Bangkok Resort",
    bgImage: "/images/projects/Anantara_Riverside.jpg",
    projectLink: "https://www.anantara.com/en/riverside-bangkok/virtual-tour",
    webLink: "https://www.anantara.com/en/riverside-bangkok",
    cat: "resort",
  },
  {
    title: "Aurora Ozone Hotel",
    bgImage: "/images/projects/Aurora_Ozone.jpg",
    projectLink: "https://eyenavaustralia.com/aurora_ozone/",
    webLink: "https://ozonehotelki.com.au/360-aurora-ozone-hotel-tour/",
    cat: "resort",
  },
  {
    title: "Bandara Suites Silom Bangkok",
    bgImage: "/images/projects/Bandara_Silom.jpg",
    projectLink: "https://www.eyenavthailand.com/bandara_bangkok/",
    webLink:
      "https://www.bandaragroup.com/bandara-suites-silom-bangkok/bandara-cafe.html",
    cat: "resort",
  },
  {
    title: "Crowne Plaza Vientiane ",
    bgImage: "/images/projects/Crowne_Plaza_Vientiane.jpg",
    projectLink:
      "https://www.eyenavasia.com/laos/cp_vientiane/tour/index1.html",
    webLink: "https://vientiane.crowneplaza.com/senses-spa",
    cat: "resort",
  },
  {
    title: "Diamond Cliff Resort & Spa Phuket",
    bgImage: "/images/projects/Diamond_Cliff_Resort.jpg",
    projectLink: "https://eyenavphuket.com/diamond_cliff/",
    webLink: "https://www.diamondcliff.com/villas/",
    cat: "resort",
  },
  {
    title: "Dusit Krabi Beach Resort",
    bgImage: "/images/projects/Dusit_Krabi.jpg",
    projectLink: "https://eyenavthailand.com/dusit_krabi/",
    webLink: "https://www.dusit.com/dusitthani-krabibeachresort/dining/",
    cat: "resort",
  },
  {
    title: "Holiday Inn Vana Nava Hua Hin",
    bgImage: "/images/projects/Holiday_Inn_Vana_Nava.jpg",
    projectLink: "https://eyenavthailand.com/hir_vananava/",
    webLink: "https://vananavahuahin.holidayinnresorts.com/",
    cat: "resort",
  },
  {
    title: "InterContinental Hanoi Landmark 72",
    bgImage: "/images/projects/InterContinental_Hanoi.jpg",
    projectLink: "https://eyenavasia.com/vietnam/ic_landmark72/embed.html",
    webLink: "https://landmark72.intercontinental.com/",
    cat: "resort",
  },
  {
    title: "JW Marriott Phuket Resort & Spa",
    bgImage: "/images/projects/Villa-Carmina-Italy.jpg",
    projectLink: "https://www.eyenavphuket.com/jw_phuket/",
    webLink: "https://www.marriott.com/en-us/hotels/hktjw",
    cat: "resort",
  },

  {
    title: "Krabi Resort",
    bgImage: "/images/projects/Dusit_Krabi.jpg",
    projectLink: "https://eyenavthailand.com/krabi_resort/",
    webLink: "http://www.krabiresort.net/tropical-pool-villa.php",
    cat: "resort",
  },
  {
    title: "Le Meridien Phuket Beach Resort",
    bgImage: "/images/projects/LeMeridien_Phuket.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/index1.htm",
    webLink: "https://www.marriott.com/en-us/hotels/hktmd",
    cat: "resort",
  },
  {
    title: "Marriott Bangkok Sukhumvit",
    bgImage: "/images/projects/Marriott_Sukhumvit.jpg",
    projectLink: "https://eyenavthailand.com/marriott_sukhumvit/",
    webLink: "https://www.marriott.com/en-us/hotels/bkkms",
    cat: "resort",
  },
  {
    title: "Mount Lofty House",
    bgImage: "/images/projects/Mt_Lofty_House.jpg",
    projectLink: "https://eyenavaustralia.com/mtlofty_house/",
    webLink: "https://www.mtloftyhouse.com.au/stay/classic-room/",
    cat: "resort",
  },
  {
    title: "InterContinental Phu Quoc Long Beach Resort",
    bgImage: "/images/projects/Phu_Quoc_InterContinental.jpg",
    projectLink: "https://www.eyenavasia.com/vietnam/ic_phuquoc/embed.htm",
    webLink: "https://phuquoc.intercontinental.com/meetings-events",
    cat: "resort",
  },
  {
    title: "Ramada Resort By Wyndham Khao Lak",
    bgImage: "/images/projects/Ramada_Khao_Lak.jpg",
    projectLink: "https://eyenavthailand.com/ramada_khaolak/",
    webLink: "https://www.ramadakhaolak.com/",
    cat: "resort",
  },
  {
    title: "The Reef House",
    bgImage: "/images/projects/Reef_House.jpg",
    projectLink: "https://eyenavaustralia.com/reef_house/",
    webLink: "https://www.reefhouse.com.au/ocean-view-king-suite/",
    cat: "resort",
  },

  {
    title: "Thavorn Beach Village Resort",
    bgImage: "/images/projects/Thavorn_Beach.jpg",
    projectLink: "https://eyenavphuket.com/thavorn_beach/",
    webLink: "https://www.thavornbeachvillage.com/360-overview",
    cat: "resort",
  },
  {
    title: "Villa Carmina Italy",
    bgImage: "/images/projects/Villa_Carmina.jpg",
    projectLink: "https://eyenav.com/projects/villa_carmina/aerial_view.htm",
    webLink: "https://secretretreat.com/properties/villa-carmina/",
    cat: "resort",
  },

  {
    title: "Alan Sheppard Constructions",
    bgImage: "/images/projects/Alan_Sheppard.jpg",
    projectLink: "https://eyenavaustralia.com/alan_sheppard/stpeters/",
    webLink: "https://eyenavaustralia.com/alan_sheppard/stpeters/",
    cat: "villa",
  },

  {
    title: "Amanpuri Villas",
    bgImage: "/images/projects/Amanpuri_Villas.jpg",
    projectLink: "https://eyenavphuket.com/amp/villa25/",
    webLink: "https://eyenavphuket.com/amp/villa25/",
    cat: "villa",
  },

  {
    title: "GP Architects",
    bgImage: "/images/projects/GP_Architects.jpg",
    projectLink: "http://eyenavaustralia.com/gp_architects/",
    webLink: "http://eyenavaustralia.com/gp_architects/",
    cat: "villa",
  },

  {
    title: "Jockwar Lakeside Property",
    bgImage: "/images/projects/Jockwar.jpg",
    projectLink: "https://eyenavaustralia.com/jockwar/",
    webLink: "https://eyenavaustralia.com/jockwar/",
    cat: "villa",
  },

  {
    title: "Villa Padma Phuket",
    bgImage: "/images/projects/Villa_Padma.jpg",
    projectLink: "https://eyenavthailand.com/villa_padma/",
    webLink: "https://eyenavthailand.com/villa_padma/",
    cat: "villa",
  },

  {
    title: "Merchants",
    bgImage: "/images/projects/3merchants.jpg",
    projectLink:
      "https://www.eyenavasia.com/laos/cp_vientiane/tour/3merchants.html",
    webLink: "https://vientiane.crowneplaza.com/3-merchants",
    cat: "venue",
  },

  {
    title: "Benihana Phuket",
    bgImage: "/images/projects/Benihana.jpg",
    projectLink: "https://eyenavphuket.com/jw_phuket/benihana/",
    webLink: "https://eyenavphuket.com/jw_phuket/benihana/",
    cat: "venue",
  },
  {
    title: "Hardys Verandah Restaurant",
    bgImage: "/images/projects/Hardys_Verandah.jpg",
    projectLink: "https://eyenavaustralia.com/mtlofty_house/hvr.htm",
    webLink: "https://eyenavaustralia.com/mtlofty_house/hvr.htm",
    cat: "venue",
  },
  {
    title: "Mr Wolf Hong Kong",
    bgImage: "/images/projects/Mr_Wolf.jpg",
    projectLink: "https://eyenavasia.com/hongkong/mr_wolf/",
    webLink: "https://mrwolf.hk/functions/",
    cat: "venue",
  },
  {
    title: "Mylkappa Wines",
    bgImage: "/images/projects/Mylkappa_Wines.jpg",
    projectLink: "https://eyenavaustralia.com/mylkappa/",
    webLink: "https://eyenavaustralia.com/mylkappa/",
    cat: "venue",
  },
  {
    title: "Sea Salt Lounge & Grill",
    bgImage: "/images/projects/Sea_Salt.jpg",
    projectLink: "https://eyenavphuket.com/express/restaurants/seasalt/",
    webLink: "https://eyenavphuket.com/express/restaurants/seasalt/",
    cat: "venue",
  },

  {
    title: "Born Free Yacht Charter",
    bgImage: "/images/projects/Born_Free_Charter.jpg",
    projectLink: "https://www.eyenavphuket.com/le_meridien/tour/born_free.htm",
    webLink: "https://www.eyenavphuket.com/le_meridien/tour/born_free.htm",
    cat: "yacht",
  },

  {
    title: "Lee Marine Brokerage",
    bgImage: "/images/projects/Lee_Marine.jpg",
    projectLink:
      "https://eyenavphuket.com/lee_marine/brokerage/ferretti_720_band_of_gypsys/",
    webLink:
      "https://eyenavphuket.com/lee_marine/brokerage/ferretti_720_band_of_gypsys/",
    cat: "yacht",
  },
  {
    title: "Royal Phuket Marina",
    bgImage: "/images/projects/Royal_Phuket_Marina.jpg",
    projectLink: "https://eyenavphuket.com/royalphuketmarina/",
    webLink: "https://www.royalphuketmarina.com/360-virtual-tour/",
    cat: "yacht",
  },
  {
    title: "Sawan Adventures - Luxury Charter",
    bgImage: "/images/projects/Sawan_Adventures.jpg",
    projectLink: "https://eyenavphuket.com/jbs_rangnoi/charter/princess/",
    webLink: "https://eyenavphuket.com/jbs_rangnoi/charter/princess/",
    cat: "yacht",
  },

  {
    title: "Darwin Destinations ",
    bgImage: "/images/projects/Darwin_Destinations.jpg",
    projectLink: "https://eyenavaustralia.com/destination_darwin",
    webLink: "https://eyenavaustralia.com/destination_darwin",
    cat: "park",
  },

  {
    title: "Discovery Parks - Hahndorf ",
    bgImage: "/images/projects/Discovery_Parks.jpg",
    projectLink: "https://eyenavaustralia.com/discovery_parks/hahndorf/",
    webLink: "https://eyenavaustralia.com/discovery_parks/hahndorf/",
    cat: "park",
  },

  {
    title: "Innes National Park Coastline",
    bgImage: "/images/projects/Innes_National_Park.jpg",
    projectLink: "https://eyenavaustralia.com/innes_park/",
    webLink: "https://eyenavaustralia.com/innes_park/",
    cat: "park",
  },

  {
    title: "Mt Barker Council ",
    bgImage: "/images/projects/Mt_Barker_Council.jpg",
    projectLink: "https://eyenavaustralia.com/sa_destinations/mt_barker/",
    webLink: "https://eyenavaustralia.com/sa_destinations/mt_barker/",
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
          images: ["/images/services/ps3.jpg", "/images/services/ps4.jpg"],
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
          title: "Click here to view Gallery",
          images: ["/images/services/ps1.jpg", "/images/services/ps2.jpg"],
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
      },
    ],
  },

  {
    title: "Marketing Installations",
    slug: "marketing-installations",
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
      },
      {
        title: "Booking.com 360 Upload",
        thumb: "/images/services/mi3.jpg",
        link: "#360-photography",
        face: "/images/services/mi3.jpg",
        faceType: "image",
        detail:
          "<h2>Precise 360° Photography</h2><p>Our 360ﾟ photography sets out to represent a space or facility in its best light with WoW factor or careful setups which make consumers feel like being there. In the same way as professional hotel still photography is done, an eyeNAV360 shoot is all in the preparation and timing.</p><p>There's no Fuss & No extra lighting, we carefully plan the shots with our clients and make sure they feature their brand standard setups. We use natural ambient light and avoid harsh daytime sun, executing most of our shoots during at early mornings and early evenings.</p><p>Care is taken to ensure our scheduled photo shoots bring minimal challenges to your operations and no effect on guest experience.</p>",
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
          "<p><strong>iOS App Store</strong><br/>https://apps.apple.com/au/app/eyenav-360-asia-luxury-hotels/id1118731433</p><p><strong>Android Google Play Store</strong><br/>https://play.google.com/store/apps/details?id=com.eyenav.tours</p>",
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
