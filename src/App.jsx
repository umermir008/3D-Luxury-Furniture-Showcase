import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import './App.css';

// 3D Model Components
import ChairModel from './components/ChairModel';
import SofaModel from './components/SofaModel';
import DiningTableModel from './components/DiningTableModel';

// Furniture data
const furnitureData = [
  {
    id: 1,
    name: "Elegant Lounge Chair",
    model: "chair",
    material: "Premium Italian Leather, Solid Walnut Wood",
    price: "$2,499 - $2,899",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Luxury Chesterfield Sofa",
    model: "sofa",
    material: "Hand-Tufted Velvet, Solid Birch Frame",
    price: "$4,299 - $5,199",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    name: "Modern Dining Table",
    model: "diningTable",
    material: "Premium Marble Top, Brushed Steel Base",
    price: "$3,199 - $3,799",
    image: "https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  }
];

// Gallery images
const galleryImages = [
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1615529162924-f8605388463a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1616137448564-0d23634c15a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1615529162924-f8605388463a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "The most elegant furniture I've ever purchased! The attention to detail is unmatched.",
    author: "Sophia Williams",
    role: "Interior Designer"
  },
  {
    id: 2,
    text: "LuxeLiving transformed my home. Every piece is a work of art.",
    author: "Michael Chen",
    role: "Architect"
  },
  {
    id: 3,
    text: "Exceptional quality and service. Worth every penny for the luxury experience.",
    author: "Emma Rodriguez",
    role: "Homeowner"
  }
];

function App() {
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const openModal = (furniture) => {
    setSelectedFurniture(furniture);
  };

  const closeModal = () => {
    setSelectedFurniture(null);
  };

  const addToWishlist = (furniture) => {
    if (!wishlist.find(item => item.id === furniture.id)) {
      setWishlist([...wishlist, furniture]);
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Redefining Spaces with Elegance
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore luxury furniture like never before
          </motion.p>
          <motion.button 
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Collection
          </motion.button>
        </div>
        <div className="hero-3d-model">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <ChairModel rotation={[0, Math.PI / 2, 0]} />
            <Environment preset="city" />
            <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      </section>

      {/* Furniture Explorer Section */}
      <section className="furniture-explorer">
        <h2 className="section-title">Furniture Collection</h2>
        <div className="furniture-grid">
          {furnitureData.map((furniture) => (
            <motion.div 
              key={furniture.id}
              className="furniture-card"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(furniture)}
            >
              <div className="furniture-3d">
                <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                  {furniture.model === "chair" && <ChairModel rotation={[0, Math.PI / 2, 0]} />}
                  {furniture.model === "sofa" && <SofaModel rotation={[0, Math.PI / 2, 0]} />}
                  {furniture.model === "diningTable" && <DiningTableModel rotation={[0, Math.PI / 2, 0]} />}
                  <Environment preset="city" />
                  <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
                  <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </div>
              <div className="furniture-info">
                <h3>{furniture.name}</h3>
                <p>{furniture.material}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2 className="section-title">Luxury Interiors</h2>
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={`Luxury interior ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-overlay">
          <motion.h2 
            className="video-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Experience Luxury Living
          </motion.h2>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">Client Experiences</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Transform Your Home Today</h2>
          <div className="cta-buttons">
            <button className="cta-button primary">Shop Collection</button>
            <button className="cta-button secondary">Book Consultation</button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#collection">Collection</a>
            <a href="#gallery">Gallery</a>
            <a href="#video">Video</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">i</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="Pinterest">p</a>
          </div>
          <p className="copyright">© 2025 LuxeLiving. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Furniture Detail Modal */}
      {selectedFurniture && (
        <div className="modal-overlay" onClick={closeModal}>
          <motion.div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{selectedFurniture.name}</h2>
            <img src={selectedFurniture.image} alt={selectedFurniture.name} />
            <div className="modal-details">
              <p><strong>Materials:</strong> {selectedFurniture.material}</p>
              <p><strong>Price Range:</strong> {selectedFurniture.price}</p>
            </div>
            <button 
              className="wishlist-button"
              onClick={() => addToWishlist(selectedFurniture)}
            >
              Add to Wishlist
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;