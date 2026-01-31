// Sample Reviews Data for Testing
// You can insert this data using MongoDB Compass or mongosh

// To insert via mongosh:
// 1. Open terminal and run: mongosh
// 2. Run: use spoiler-reviews
// 3. Copy and paste the db.reviews.insertMany() command below

db.reviews.insertMany([
  {
    movieTitle: "The Sixth Sense",
    userName: "Sarah Johnson",
    rating: 5,
    safeSummary: "An absolute masterpiece of psychological thriller filmmaking. Bruce Willis delivers one of his finest performances, and Haley Joel Osment is remarkably talented for his age. The atmosphere is haunting, the cinematography is beautiful, and M. Night Shyamalan proves himself as a master storyteller. Every scene is carefully crafted with attention to detail.",
    spoilerContent: "The twist ending where we discover that Bruce Willis' character has been dead the entire movie is one of the greatest plot twists in cinema history. When you rewatch the film knowing this, you notice all the subtle clues that were there all along - he never interacts with anyone except Cole, his wife ignores him at the restaurant, and the red doorknob. Absolutely brilliant!",
    genre: "Thriller",
    likes: 42,
    createdAt: new Date("2025-01-15")
  },
  {
    movieTitle: "Inception",
    userName: "Michael Chen",
    rating: 5,
    safeSummary: "Christopher Nolan crafts a visually stunning and intellectually challenging masterpiece. The concept of dreams within dreams is executed brilliantly, with phenomenal special effects that hold up incredibly well. Leonardo DiCaprio leads an ensemble cast that brings depth to this complex narrative. Hans Zimmer's score is absolutely epic and memorable.",
    spoilerContent: "The ending is deliberately ambiguous - the spinning top wobbles but we never see if it falls. This leaves viewers questioning whether Cobb is still in a dream or has returned to reality. Many fans have their own theories, but Nolan intentionally left it open to interpretation. The real question isn't whether he's dreaming, but whether he even cares anymore - he chooses to be with his children regardless.",
    genre: "Sci-Fi",
    likes: 38,
    createdAt: new Date("2025-01-20")
  },
  {
    movieTitle: "Parasite",
    userName: "Emma Rodriguez",
    rating: 5,
    safeSummary: "Bong Joon-ho delivers a darkly comedic thriller that brilliantly explores class disparity. The film seamlessly shifts between genres while maintaining perfect tension throughout. The cinematography uses space and architecture symbolically, and every performance is outstanding. It deserved every award it won, including Best Picture at the Oscars.",
    spoilerContent: "The shocking basement reveal completely changes the film's trajectory. When the former housekeeper returns and we discover her husband has been living in the bunker for years, the tension escalates dramatically. The ending at the birthday party is devastating - Ki-taek snapping and stabbing Mr. Park, then going into hiding in the same bunker. The son's letter planning to buy the house one day is heartbreaking.",
    genre: "Thriller",
    likes: 29,
    createdAt: new Date("2025-01-22")
  },
  {
    movieTitle: "Everything Everywhere All at Once",
    userName: "David Park",
    rating: 5,
    safeSummary: "An absolutely wild, creative, and emotionally powerful film that defies genre classification. Michelle Yeoh gives a career-best performance in this multiverse adventure that's simultaneously hilarious, action-packed, and deeply moving. The visual effects are inventive, the fight choreography is excellent, and the heart of the story about family and acceptance shines through all the chaos.",
    spoilerContent: "The film's emotional core is Evelyn learning to appreciate her life and her daughter Joycelyn/Joy. The Everything Bagel represents nihilism and meaninglessness, but Evelyn counters it by choosing kindness and connection across universes. The hot dog fingers universe and the rock universe seem absurd but carry profound meaning about finding beauty in any existence. The ending where Evelyn finally accepts Joy for who she is, including her girlfriend, is beautiful.",
    genre: "Sci-Fi",
    likes: 51,
    createdAt: new Date("2025-01-25")
  },
  {
    movieTitle: "Get Out",
    userName: "Alex Thompson",
    rating: 5,
    safeSummary: "Jordan Peele's directorial debut is a masterclass in building tension and social commentary. What starts as an awkward meet-the-parents story evolves into something far more sinister. Daniel Kaluuya's performance captures genuine fear and confusion perfectly. The film brilliantly uses horror to explore racism in America, and every scene has deeper meaning upon rewatching.",
    spoilerContent: "The Armitage family is literally transplanting white people's consciousness into Black bodies through a hypnotic procedure they call the Coagula. Rose has been luring Black victims for her family this whole time - she's not the innocent girlfriend at all. The Sunken Place is a terrifying metaphor for systemic racism. Chris escapes by using the cotton from the chair to block the hypnosis, and Rod's TSA investigator storyline pays off perfectly when he arrives to save Chris.",
    genre: "Horror",
    likes: 34,
    createdAt: new Date("2025-01-28")
  },
  {
    movieTitle: "Interstellar",
    userName: "Rachel Kim",
    rating: 4,
    safeSummary: "Visually spectacular space epic with genuine scientific concepts at its core. Matthew McConaughey delivers an emotional performance as a father desperate to save humanity and return to his children. The depiction of black holes and time dilation is scientifically grounded and beautifully rendered. Hans Zimmer's organ-heavy score is haunting and powerful.",
    spoilerContent: "Cooper ends up inside the tesseract, a five-dimensional construct created by future humans, where he can communicate across time with his daughter Murph. The love transcends dimensions theme is divisive but emotionally powerful. The time dilation means he barely ages while his daughter becomes elderly. When he finally reunites with her, she's on her deathbed surrounded by her own children and grandchildren. She tells him to find Brand, who's been alone on Edmunds' planet.",
    genre: "Sci-Fi",
    likes: 45,
    createdAt: new Date("2025-01-29")
  }
]);

console.log("Sample reviews inserted successfully!");
