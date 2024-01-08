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
    title: "Ozone Hotel Kangaroo Island",
    bgImage: "/images/Ozone-Hotel-Kangaroo-Island.jpg",
    projectLink: "https://eyenavaustralia.com/aurora_ozone/",
    webLink: "https://ozonehotelki.com.au/360-aurora-ozone-hotel-tour/",
    type: "featured",
  },
  {
    title: " Royal Phuket Marina",
    bgImage: "/images/Royal-Phuket-Marina.jpg",
    projectLink: "https://eyenavphuket.com/royalphuketmarina/",
    webLink: "https://www.royalphuketmarina.com/360-virtual-tour/",
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

export { isPopVisible, setPopVisible, projects, PopIframeURL, setIframeURL };
