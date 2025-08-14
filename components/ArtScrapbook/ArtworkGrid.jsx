import React from 'react';
import { motion } from 'framer-motion';

const ArtworkGrid = ({ currentCategory, onArtSelect }) => {
  // Artwork data
  const artwork = [
    {
      id: 1,
      title: "Batik Scarf",
      category: "regional",
      description: "A hand-painted Indonesian batik scarf featuring a hummingbird and wisteria motif, created through traditional wax-resist dyeing techniques with added salt texture effects for dynamic movement.",
      processSteps: [
        {
          step: 1,
          title: "Wax Application",
          description: "Applying hot wax to create the detailed outlines of the hummingbird and wisteria design, ensuring the protected areas will resist dye during painting.",
          image: "/images/baltik1.jpeg"
        },
        {
          step: 2,
          title: "Dye Painting & Special Effects",
          description: "Brushing vibrant dyes into the fabric, layering colors for depth. Added salt to the painted bird section to produce a textured, airy effect that suggests motion in flight.",
          image: "/images/baltik2.jpeg"
        },
        {
          step: 3,
          title: "Wax Removal & Finishing",
          description: "Gently removing the wax to reveal crisp lines, refining colors for balance, and preparing the scarf for shipment as a completed wearable artwork.",
          image: "/images/baltik3.jpeg"
        }
      ],
      tags: ["Batik", "Textile Art", "Hand-Painted"],
      year: "2025",
      materials: ["Cotton Fabric", "Batik Wax", "Fiber-Reactive Dyes", "Salt"],
      difficulty: "Intermediate",
      coverImage: "/images/BaltikCover.jpeg",
      country: "Indonesia",
      history: "Batik is a traditional Indonesian textile art that dates back over a thousand years, recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity. The craft involves applying wax to fabric in intricate patterns before dyeing, a resist technique that allows for stunning layers of color and design. This scarf features a hummingbird and wisteria motif, combining centuries-old batik methods with modern artistic touches such as salt texturing to create a unique, dynamic piece."
    },
    {
      id: 2,
      title: "Mosaic Lamp",
      category: "regional",
      description: "A handcrafted Turkish mosaic lamp featuring a custom arrangement of pink and white glass pieces. The pink conveys warmth and creativity, while the white adds balance and a soft glow, creating a harmonious interplay of color when illuminated. Each mosaic piece is carefully placed to form a pattern that reflects both Ottoman tradition and a personal modern touch, resulting in a functional piece of decorative art.",
      processSteps: [
        {
          step: 1,
          title: "Design Layout",
          description: "Planning the lamp's pattern by arranging colorful glass mosaic pieces and beads to create a balanced, eye-catching design inspired by traditional Ottoman motifs.",
          image: "/images/TurkishLamp1.jpeg"
        },
        {
          step: 2,
          title: "Mosaic Application",
          description: "Gluing each mosaic piece carefully onto the lamp's glass bowl, ensuring the design is aligned and secure.",
          image: "/images/TurkishLamp2.jpeg"
        },
        {
          step: 3,
          title: "Plastering & Drying",
          description: "Applying plaster over the mosaics to fill gaps and create a smooth, finished surface, then allowing the bowl to dry completely.",
          image: "/images/TurkishLamp3.png"
        },
        {
          step: 4,
          title: "Assembly & Illumination",
          description: "Fitting the completed bowl onto the lamp base, installing the light fixture, and powering it on to bring the colors to life in a warm, patterned glow.",
          image: "/images/TurkishLamp4 .jpeg"
        }
      ],
      tags: ["Mosaic Art", "Lighting Design", "Turkish Lamp", "Handcrafted Decor", "Ottoman Style"],
      year: "2025",
      materials: ["Colored Glass Mosaic Pieces", "Beads", "Glass Bowl", "Mosaic Glue", "Plaster", "Lamp Base & Light Fixture"],
      difficulty: "Intermediate",
      coverImage: "/images/Turkish Cover.jpeg",
      country: "Turkey",
      history: "Turkish mosaic lamps date back to the Ottoman Empire, drawing inspiration from Byzantine glasswork and Islamic geometric patterns. Artisans traditionally hand-cut colored glass into small shapes, arranging them into intricate motifs before setting them with plaster. These lamps became a hallmark of Turkish interior décor, admired for their dazzling interplay of light and shadow."
    },
    {
      id: 3,
      title: "Lippan Art",
      category: "regional",
      description: "A handcrafted Lippan art panel featuring raised clay designs and embedded mirrors on a wooden base. The piece blends earthy textures with reflective elements to create a striking interplay of tradition and artistry.",
      processSteps: [
        {
          step: 1,
          title: "Sketching the Design",
          description: "Drawing the layout on a wooden board, mapping out patterns and spaces for clay work and mirrors.",
          image: "/images/lippan1.jpeg"
        },
        {
          step: 2,
          title: "Clay Preparation & Application",
          description: "Mixing clay with Fevicryl adhesive in roughly a 3:1 ratio (clay : Fevicryl) to create a smooth, pliable paste. Rolling and shaping the mixture along the sketched outlines to form raised patterns.",
          image: "/images/lippan2.jpeg"
        },
        {
          step: 3,
          title: "Painting & Mirror Inlay",
          description: "Painting the dried clay designs with vibrant colors and embedding small reflective mirrors to enhance the piece's decorative appeal.",
          image: "/images/lippan3.jpeg"
        }
      ],
      tags: ["Folk Art", "Indian Craft", "Lippan Kaam", "Clay Art", "Mirror Work"],
      year: "2025",
      materials: ["Wooden Board", "Clay + Fevicryl Adhesive (3:1 ratio)", "Small Reflective Mirrors", "Paints", "Adhesive"],
      difficulty: "Easy",
      coverImage: "/images/lippan3.jpeg",
      country: "India",
      history: "Lippan art, also known as Lippan Kaam or Mud and Mirror Work, is a traditional mural craft from the Kutch region of Gujarat, India. Historically practiced by the Rabari community to decorate the interior walls of their homes, the art originally used a mixture of clay and camel dung for durability. Modern adaptations often replace camel dung with adhesives like Fevicryl for cleaner, longer-lasting results. The embedded mirrors are believed to ward off evil spirits and reflect light, brightening interiors in arid regions. Today, Lippan art is celebrated both as cultural heritage and as a contemporary decorative medium."
    },
    {
      id: 4,
      title: "Garden Flower Pot",
      category: "pottery",
      description: "A handcrafted ceramic flower pot featuring a beautiful garden flower design, created through traditional pottery techniques with hand-painted decorative elements.",
      processSteps: [
        {
          step: 1,
          title: "Clay Preparation",
          description: "Wedging and preparing the clay to remove air bubbles and ensure consistent texture for throwing on the wheel.",
          image: "/images/FlowerBefore.png"
        },
        {
          step: 2,
          title: "Throwing & Shaping",
          description: "Centering the clay on the wheel and throwing to create the basic pot shape with proper proportions.",
          image: "/images/FlowerBefore.png"
        },
        {
          step: 3,
          title: "Decoration & Glazing",
          description: "Applying underglaze designs and final glazes before firing to achieve the desired finish and colors.",
          image: "/images/FlowerBefore.png"
        }
      ],
      tags: ["Pottery", "Ceramics", "Garden Art", "Handcrafted"],
      year: "2025",
      materials: ["Stoneware Clay", "Pottery Wheel", "Underglazes", "Clear Glaze", "Kiln"],
      difficulty: "Beginner",
      coverImage: "/images/FlowerBefore.png",
      country: "Local",
      history: "Pottery is one of the oldest human crafts, dating back thousands of years. The wheel-thrown technique used here has been refined over centuries, allowing potters to create symmetrical, functional vessels with artistic decorative elements."
    },
    {
      id: 5,
      title: "Bird Feeder",
      category: "pottery",
      description: "A functional ceramic bird feeder designed with both practicality and aesthetics in mind, featuring a textured surface and natural earth tones.",
      processSteps: [
        {
          step: 1,
          title: "Design & Planning",
          description: "Sketching the bird feeder design with consideration for both functionality and visual appeal.",
          image: "/images/BirdFeederBefore.jpg"
        },
        {
          step: 2,
          title: "Construction",
          description: "Building the feeder using hand-building techniques, ensuring proper drainage and feeding access.",
          image: "/images/BirdFeederBefore.jpg"
        },
        {
          step: 3,
          title: "Finishing",
          description: "Adding texture, glazing, and firing to create a durable, weather-resistant outdoor piece.",
          image: "/images/BirdFeederAfter.heic"
        }
      ],
      tags: ["Pottery", "Outdoor Art", "Wildlife", "Functional Art"],
      year: "2025",
      materials: ["Stoneware Clay", "Hand-building Tools", "Texturing Tools", "Outdoor Glazes"],
      difficulty: "Intermediate",
      coverImage: "/images/BirdFeederBefore.jpg",
      country: "Local",
      history: "Functional pottery has been essential to human civilization, providing vessels for food storage, cooking, and decorative purposes. This bird feeder combines traditional ceramic techniques with modern outdoor living needs."
    },
    {
      id: 6,
      title: "Jewelry Tray",
      category: "pottery",
      description: "A handcrafted ceramic jewelry tray with a textured surface and elegant design, perfect for organizing small accessories.",
      processSteps: [
        {
          step: 1,
          title: "Forming the Base",
          description: "Creating the tray base using slab construction techniques and adding decorative edges.",
          image: "/images/JeweleryTrayBefore.jpg"
        },
        {
          step: 2,
          title: "Adding Texture",
          description: "Applying various texturing tools to create interesting surface patterns and visual interest.",
          image: "/images/JeweleryTrayBefore.jpg"
        },
        {
          step: 3,
          title: "Glazing & Firing",
          description: "Applying glazes and firing to achieve the final finish and durability.",
          image: "/images/JeweleryTrayAfter.jpg"
        }
      ],
      tags: ["Pottery", "Home Decor", "Organization", "Textured Art"],
      year: "2025",
      materials: ["Stoneware Clay", "Slab Roller", "Texturing Tools", "Glazes", "Kiln"],
      difficulty: "Beginner",
      coverImage: "/images/JeweleryTrayBefore.jpg",
      country: "Local",
      history: "Decorative pottery has been used throughout history to add beauty and functionality to homes. This jewelry tray represents the continuation of this tradition, combining practical use with artistic expression."
    },
    {
      id: 7,
      title: "Resin Beach Clock",
      category: "regional",
      description: "A handcrafted resin clock featuring a beach-inspired design, created by blending ocean-blue and sandy-toned resin with shimmering glitter accents. Real seashells are embedded within the surface to add texture and depth, while the high-gloss finish captures the look of sunlit waves. The piece combines functional timekeeping with coastal-inspired artistry.",
      processSteps: [
        {
          step: 1,
          title: "Resin Preparation",
          description: "Mixing epoxy resin with hardener and adding ocean-blue and sandy-toned pigments to create the base colors.",
          image: "/images/Resin1.jpeg"
        },
        {
          step: 2,
          title: "Layering & Embedding",
          description: "Pouring resin layers and embedding real seashells and glitter accents to create texture and depth.",
          image: "/images/Resin2.png"
        },
        {
          step: 3,
          title: "Finishing & Assembly",
          description: "Adding the final high-gloss finish and assembling the clock mechanism for functional timekeeping.",
          image: "/images/Resin3.jpeg"
        }
      ],
      tags: ["Resin Art", "Mixed Media", "Contemporary Art", "Epoxy Work", "Decorative Panel"],
      year: "2025",
      materials: ["Epoxy Resin & Hardener", "Acrylic Paints / Pigments", "Decorative Elements (e.g., metallic flakes, shells, dried flowers)", "Mixing Cups & Stirrers", "Protective Gloves & Surface Coverings"],
      difficulty: "Easy",
      coverImage: "/images/Resin Cover.png",
      country: "USA",
      history: "Resin art emerged in the late 20th century as artists began experimenting with epoxy resin's versatility. Initially popular in jewelry making and tabletop coating, it evolved into a fine art medium known for its depth, gloss, and ability to preserve objects. Modern resin artists often combine pigments, metallics, and mixed media for unique, one-of-a-kind creations."
    },
    {
      id: 8,
      title: "Crochet Creation",
      category: "yarn",
      description: "A beautiful hand-crocheted piece showcasing intricate patterns and delicate craftsmanship. This piece demonstrates the artist's skill in creating complex textures and designs using traditional crochet techniques.",
      processSteps: [
        {
          step: 1,
          title: "Pattern Design",
          description: "Creating and following a detailed crochet pattern to achieve the desired texture and shape.",
          image: "/images/crochet1.png"
        },
        {
          step: 2,
          title: "Yarn Selection",
          description: "Choosing the perfect yarn weight and fiber content to bring the design to life.",
          image: "/images/crochet2.png"
        },
        {
          step: 3,
          title: "Final Assembly",
          description: "Completing the piece with proper finishing techniques and blocking for the perfect shape.",
          image: "/images/crochet3.png"
        }
      ],
      tags: ["Crochet", "Fiber Art", "Handcrafted", "Textile Design"],
      year: "2025",
      materials: ["Yarn", "Crochet Hooks", "Scissors", "Yarn Needle"],
      difficulty: "Intermediate",
      coverImage: "/images/crochet1.png",
      country: "Local",
      history: "Crochet is a centuries-old craft that involves creating fabric by interlocking loops of yarn using a crochet hook. This traditional technique has been passed down through generations and continues to be a popular form of fiber art today."
    },
    {
      id: 9,
      title: "Rug Tufting Project",
      category: "yarn",
      description: "A unique rug tufting project that combines traditional techniques with modern design. This piece showcases the versatility of yarn as a medium for creating textured, three-dimensional artwork.",
      processSteps: [
        {
          step: 1,
          title: "Canvas Preparation",
          description: "Setting up the tufting canvas and transferring the design pattern.",
          image: "/images/RugTufting.png"
        },
        {
          step: 2,
          title: "Tufting Process",
          description: "Using a tufting gun to create the pile and texture of the rug.",
          image: "/images/RugTufting.png"
        },
        {
          step: 3,
          title: "Finishing Touches",
          description: "Adding backing and trimming the pile for the perfect finish.",
          image: "/images/RugTufting.png"
        }
      ],
      tags: ["Rug Tufting", "Fiber Art", "Textile Design", "Home Decor"],
      year: "2025",
      materials: ["Yarn", "Tufting Canvas", "Tufting Gun", "Scissors", "Backing Material"],
      difficulty: "Advanced",
      coverImage: "/images/RugTufting.png",
      country: "Local",
      history: "Rug tufting is a modern fiber art technique that allows artists to create custom rugs and wall hangings. Using a tufting gun, artists can quickly build up texture and create intricate designs that would be time-consuming with traditional hand-knotting methods."
    }
  ];

  const filteredArtwork = artwork.filter(art => 
    art.category === currentCategory
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredArtwork.map((art, index) => (
        <motion.div
          key={art.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onArtSelect(art)}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 hover:border-primary/50 transition-all duration-500"
            whileHover={{ 
              y: -10,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)",
              borderColor: "rgba(139, 92, 246, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Scrapbook Cover Design */}
            <div className="p-6">
              {/* Scrapbook Title */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{art.title}</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">
                    {art.category === 'yarn' ? '🧶' : 
                     art.category === 'pottery' ? '🏺' : '🌍'}
                  </span>
                  <span className="text-sm text-gray-400 capitalize">{art.category}</span>
                </div>
              </div>
              
              {/* Scrapbook Page Preview */}
              <div className="relative mb-6">
                {/* Main Cover Image */}
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {art.coverImage ? (
                    <img 
                      src={art.coverImage} 
                      alt={art.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-xs text-gray-400">Cover Photo</p>
                    </div>
                  )}
                  
                  {/* Scrapbook Decorative Elements */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-red-400 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
                </div>
                        
                {/* Page Corner Fold Effect */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-600"></div>
                
                {/* Process Steps Preview */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-accent to-primary rounded-lg p-2 shadow-lg">
                  <div className="text-white text-xs font-bold">
                    {art.processSteps.length} Steps
                  </div>
                </div>
              </div>
              
              {/* Scrapbook Info */}
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{art.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {art.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {art.country && (
                    <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30 flex items-center space-x-1">
                      <span>
                        {art.country === 'Indonesia' ? '🇮🇩' : 
                         art.country === 'Turkey' ? '🇹🇷' : 
                         art.country === 'India' ? '🇮🇳' : '🌍'}
                      </span>
                      <span className="text-xs">{art.country}</span>
                    </span>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                  <div>
                    <span className="font-semibold">Year:</span> {art.year}
                  </div>
                  <div>
                    <span className="font-semibold">Difficulty:</span> {art.difficulty}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ArtworkGrid;
