import React from 'react';
import './Listing.css';

const ListingCard = ({ image, title, price, rating, reviews }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-info">
        <h4>{title}</h4>
        <p>★ {rating} ({reviews} reviews)</p>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

const Listings = () => {
  const kolkataListings = [
    {
      image: "https://assets.telegraphindia.com/telegraph/2022/Sep/1663945733_lead-12.jpg",
      title: "Heritage & Cultural Walk of Kolkata",
      price: "10,073",
      rating: 4.4,
      reviews: 49,
    },
    {
      image: "https://assets.cntraveller.in/photos/653f53006c682a687e2bc144/master/w_1600%2Cc_limit/02202120009zszcnnA9A0.jpg",
      title: "Build Your Own: Private Tour",
      price: "1,444",
      rating: 4.0,
      reviews: 41,
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Howrah_bridge_at_night.jpg/1200px-Howrah_bridge_at_night.jpg",
        title: "Magic Hour Tour",
        price: "2,500",
        rating: 4.5,
        reviews: 1933,
    },
    {
        image: "https://touristdestinationoffbeat.wordpress.com/wp-content/uploads/2022/04/img_20220403_055338-01.jpeg?w=1568",
        title: "Divine Mayapur: Temples",
        price: "1,400",
        rating: 4.5,
        reviews:46,
    }
  ];

  const delhiListings = [
    {
      image: "https://www.holidify.com/images/bgImages/DELHI.jpg",
      title: "Delhi Historical Tour",
      price: "2,000",
      rating: 4.6,
      reviews: 10000,
    },
    {
      image: "https://t4.ftcdn.net/jpg/09/18/00/53/240_F_918005387_oOrsk1t14TTYRnBgh2XeHotvrbekCi82.jpg",
      title: "Taj Mahal and Agra city full-day private tour",
      price: "1,500",
      rating: 4.5,
      reviews: 9000,
    },
    {
      image: "https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg",
      title: "Delhi city full-day private tour",
      price: "1,200",
      rating: 4.4,
      reviews: 3000,
    },
    {
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/87/73/96.jpg",
      title: "Delhi Night Tour",
      price: "1,800",
      rating: 4.7,
      reviews: 7000,
    },

    // Add more Delhi listings here
  ];
  const andamanNicobarListings = [
    {
      image: "https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/a3/37/a337160971a80848668d6335907aee2e.webp",
      title: "Havelock Island Scuba Diving Experience",
      price: "3,500",
      rating: 4.8,
      reviews: 5000,
    },
    {
      image: "https://www.andamanislands.com/uploads/andamanislands/gallery/main/55685a7b1be3104c50ce5610b08a6b4d_174.jpg",
      title: "Snorkeling and Sea Walking at North Bay Island",
      price: "2,000",
      rating: 4.7,
      reviews: 4500,
    },
    {
      image: "https://www.india-a2z.com/images/Port-Blair1.jpg",
      title: "Port Blair Historical Tour",
      price: "1,800",
      rating: 4.6,
      reviews: 3000,
    },
    {
      image: "https://media1.thrillophilia.com/filestore/3070icefzzyo7eio952q9ucya1uy_shutterstock_1064304320-min.jpg?w=400&dpr=2",
      title: "Ross Island Heritage Walk",
      price: "1,500",
      rating: 4.5,
      reviews: 2000,
    },
  ];
  const jammuKashmirListings = [
    {
      image: "https://www.trawell.in/admin/images/upload/206750820skiing%20(1).jpg",
      title: "Gulmarg Skiing Adventure",
      price: "4,000",
      rating: 4.9,
      reviews: 6000,
    },
    {
      image: "https://static.toiimg.com/photo/msid-25810330,width-96,height-65.cms",
      title: "Srinagar Houseboat Stay",
      price: "3,000",
      rating: 4.7,
      reviews: 8000,
    },
    {
      image: "https://www.tusktravel.com/images/pahalgam-tusktravel.jpg",
      title: "Pahalgam Valley Day Tour",
      price: "2,500",
      rating: 4.6,
      reviews: 5500,
    },
    {
      image: "https://www.adventurenation.com/blog/wp-content/uploads/2018/05/Webp.net-compress-image-20.jpg",
      title: "Great Lakes Trek",
      price: "3,200",
      rating: 4.5,
      reviews: 3000,
    },
  ];
  const keralaListings = [
    {
      image: "https://www.rainbowcruises.in/flash/home/main/main-01.jpg",
      title: "Alleppey Houseboat Cruise",
      price: "2,800",
      rating: 4.7,
      reviews: 9000,
    },
    {
      image: "https://www.keralatourism.holiday/blog/wp-content/uploads/2023/03/munnar-tea-plantation.jpg",
      title: "Munnar Tea Garden Tour",
      price: "1,500",
      rating: 4.6,
      reviews: 7000,
    },
    {
      image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/14/0120528ad45d17654e50eef115d97f10_1000x1000.jpg",
      title: "Kochi City and Backwater Tour",
      price: "2,200",
      rating: 4.5,
      reviews: 4000,
    },
    {
      image: "https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/periyar-194.jpeg?370x248",
      title: "Thekkady Wildlife Sanctuary Visit",
      price: "2,600",
      rating: 4.4,
      reviews: 3500,
    },
  ];
  const tamilNaduListings = [
    {
      image: "https://qph.cf2.quoracdn.net/main-qimg-51e2af64c011b08aebe10a3cbe8442f2-pjlq",
      title: "Chennai Marina Beach",
      price: "1,500",
      rating: 4.5,
      reviews: 5000,
    },
    {
      image: "https://qph.cf2.quoracdn.net/main-qimg-5565f3379d32605e33f0994ef95c2c68-lq",
      title: "Dhanushkodi View Point",
      price: "2,200",
      rating: 4.6,
      reviews: 4000,
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=1200&h=-1&s=1",
      title: "Madurai Meenakshi Temple Tour",
      price: "1,800",
      rating: 4.7,
      reviews: 6000,
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/84/41/f0/caption.jpg?w=500&h=400&s=1",
      title: "Kanyakumari Sunrise and Beach Tour",
      price: "1,600",
      rating: 4.8,
      reviews: 7000,
    },
  ];

  return (
    <div>
      <div className="listings-section">
        <h1>Best visited places in Kolkata</h1>
        <div className="listings-container">
          {kolkataListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>

      <div className="listings-section">
        <h1>Best visited places in Delhi</h1>
        <div className="listings-container">
          {delhiListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>

      <div className="listings-section">
        <h1>Best visited places in Andaman-Nicobar</h1>
        <div className="listings-container">
          {andamanNicobarListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>

     
      <div className="listings-section">
        <h1>Best visited places in Jammu-Kashmir</h1>
        <div className="listings-container">
          {jammuKashmirListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>


      <div className="listings-section">
        <h1>Best visited places in kerala</h1>
        <div className="listings-container">
          {keralaListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>

      <div className="listings-section">
        <h1>Best visited places in Tamil-Nadu</h1>
        <div className="listings-container">
          {tamilNaduListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>
 {/* Add more sections for other cities similarly */}
    </div>
  );
};

export default Listings;
