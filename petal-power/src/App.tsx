

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlantsForPeople from '@/components/PlantsForPeople';
import CategoryPills from '@/components/CategoryPills';
import FeatureCards from '@/components/FeatureCards';
import NewPlants from '@/components/NewPlants';
import IndoorCollection from '@/components/IndoorCollection';
import VideoShowcase from '@/components/VideoShowcase';
import FaqAccordion from '@/components/FaqAccordion';
import FooterCommunity from '@/components/FooterCommunity';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import PlantDetailModal from '@/components/PlantDetailModal';
import VideoModal from '@/components/VideoModal';
import AuthModal from '@/components/AuthModal';
import ContactModal from '@/components/ContactModal';
import PlantMatchQuiz from '@/components/PlantMatchQuiz';
import { SmoothScroll, ScrollProgress, BackToTop } from '@/lib/polish';
import { PlantItem, NEW_PLANTS } from '@/lib/plants-data';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Heart } from 'lucide-react';

export default function Home() {
  // Navigation & Interactive States
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedCategory, setSelectedCategory] = useState('Outdoor Plant');
  
  // Modals & Drawers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<PlantItem | null>(null);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { plant: NEW_PLANTS[0], quantity: 1 },
  ]);
  const [favorites, setFavorites] = useState<string[]>(['peperomia-watermelon']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart handlers
  const handleAddToCart = (plant: PlantItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCartItems((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { plant, quantity: 1 }];
    });
    showToast(`Added "${plant.name}" to your plant bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.plant.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.plant.id !== id));
  };

  // Wishlist handler
  const handleToggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from saved specimens');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Added to your favorite wishlist ❤️');
        return [...prev, id];
      }
    });
  };

  // Scroll to section handler
  const scrollToExplore = () => {
    const el = document.getElementById('category-filter-bar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
    <SmoothScroll />
    <ScrollProgress color="#c8e6b0" />
    <BackToTop className="bg-[#15342a] text-[#c8e6b0]" />
    <main className="min-h-screen bg-[#345c58] py-3 sm:py-6 md:py-8 px-2 sm:px-4 md:px-8 flex justify-center">
      {/* Central High-End Botanical App Canvas Frame */}
      <div className="w-full max-w-[1360px] bg-[#f2f4f1] rounded-[32px] sm:rounded-[44px] shadow-2xl overflow-hidden border border-[#2b4c46]/30 flex flex-col relative transition-all duration-300">
        
        {/* Top Hero Container (with nested floating Navbar inside) */}
        <div className="relative p-2.5 sm:p-4">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden">
            <Navbar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenAuth={() => setIsAuthOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
              cartCount={totalCartCount}
            />

            {/* Hero Main */}
            <Hero
              onExploreClick={scrollToExplore}
              onShopClick={() => setIsCartOpen(true)}
            />
          </div>
        </div>

        {/* Inner Content Sections Container */}
        <div className="px-3 sm:px-6 md:px-10 pb-6 flex-1 flex flex-col">
          {/* Section 2: Plants for the People */}
          <PlantsForPeople onPlayVideo={() => setIsVideoOpen(true)} />

          {/* Section 3: Category Filter Pills */}
          <CategoryPills
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              showToast(`Filtering by: ${cat}`);
            }}
            onSeeAllClick={() => setIsSearchOpen(true)}
          />

          {/* Section 4: 3 Feature Category Cards (Pet Friendly, Orchids, Succulents) */}
          <FeatureCards
            onCardClick={(id, title) => {
              const matchedPlant = NEW_PLANTS.find((p) => p.tag?.toLowerCase().includes('pet')) || NEW_PLANTS[0];
              setSelectedPlant(matchedPlant);
            }}
          />

          {/* Section 5: New Plants Product Row */}
          <NewPlants
            onSelectPlant={(plant) => setSelectedPlant(plant)}
            onAddToCart={handleAddToCart}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />

          {/* Section 6: Indoor Collection (4-card bento grid) */}
          <IndoorCollection
            onCardClick={(id, title) => {
              const matched = NEW_PLANTS.find((p) => p.name.toLowerCase().includes(id)) || NEW_PLANTS[1];
              setSelectedPlant(matched);
            }}
          />

          {/* Signature: personalised plant recommendation quiz */}

          <PlantMatchQuiz onSelectPlant={(plant) => setSelectedPlant(plant)} onAddToCart={(plant) => handleAddToCart(plant)} />


          {/* Section 7: Quality Plants & Curated Goods Video Showcase */}
          <VideoShowcase onPlayVideo={() => setIsVideoOpen(true)} />

          {/* Section 8: FAQ Accordion */}
          <FaqAccordion />

          {/* Section 9: Footer Community CTA */}
          <FooterCommunity />
        </div>
      </div>

      {/* Floating Interactive Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#11231d] text-white px-5 py-3 rounded-full shadow-2xl border border-white/20 text-xs sm:text-sm font-medium flex items-center gap-2.5 backdrop-blur-md"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <Check className="w-3 h-3" />
            </div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPlant={(plant) => setSelectedPlant(plant)}
      />

      <PlantDetailModal
        plant={selectedPlant}
        onClose={() => setSelectedPlant(null)}
        onAddToCart={(plant) => handleAddToCart(plant)}
        isFavorite={selectedPlant ? favorites.includes(selectedPlant.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
    </>
  );
}
