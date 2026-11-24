

import React from 'react';
import Image from '@/lib/Image';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PlantItem } from '@/lib/plants-data';

export interface CartItem {
  plant: PlantItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const subtotal = items.reduce((acc, curr) => acc + curr.plant.price * curr.quantity, 0);
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-[#f3f5f2] shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#d8e2dc] bg-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#11231d] text-white flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#11231d]">Your Plant Bag</h3>
                    <p className="text-xs text-[#62776f]">{items.length} unique specimens</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close cart"
                  className="w-8 h-8 rounded-full border border-[#d2ddd6] flex items-center justify-center text-[#20362f] hover:bg-[#e8f0eb] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#e4ede7] flex items-center justify-center text-[#425e54] mb-4">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-[#11231d]">Your bag is empty</h4>
                    <p className="text-xs text-[#5a7269] max-w-[240px] mt-1.5 leading-relaxed">
                      Discover our fresh tropical arrivals and add curated greenery to your home.
                    </p>
                  </div>
                ) : (
                  items.map(({ plant, quantity }) => (
                    <div
                      key={plant.id}
                      className="bg-white rounded-2xl p-3.5 border border-[#dce5df] shadow-sm flex items-center gap-3.5"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#eaf0eb] shrink-0">
                        <Image
                          src={plant.image}
                          alt={plant.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Plant Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-sm text-[#11231d] truncate">
                          {plant.name}
                        </h4>
                        <p className="text-[11px] text-[#6d827a] truncate">{plant.moisture}</p>
                        <p className="text-xs font-semibold text-[#11231d] mt-1">
                          ${(plant.price * quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center border border-[#d2ddd6] rounded-full bg-[#f8faf8] px-1 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(plant.id, -1)}
                            aria-label="Decrease quantity"
                            className="w-5 h-5 flex items-center justify-center text-[#30473f] hover:text-black"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-2 text-[#11231d]">{quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(plant.id, 1)}
                            aria-label="Increase quantity"
                            className="w-5 h-5 flex items-center justify-center text-[#30473f] hover:text-black"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(plant.id)}
                          aria-label="Remove item"
                          className="text-[#96a9a0] hover:text-rose-600 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Checkout */}
              {items.length > 0 && (
                <div className="p-6 bg-white border-t border-[#d8e2dc] space-y-4">
                  <div className="space-y-1.5 text-xs text-[#526a60]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-sm text-[#11231d]">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#688077]">
                      <span>Climate-Shield Transit</span>
                      <span className="text-emerald-700 font-medium">Free</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    {checkoutComplete ? (
                      <div className="w-full py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Order Reserved! Thank you.</span>
                      </div>
                    ) : (
                      <button
                        onClick={handleCheckout}
                        className="w-full py-3.5 rounded-full bg-[#11231d] hover:bg-black text-white font-semibold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 transition-all group"
                      >
                        <span>Proceed to Secure Checkout</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-[#71887f] pt-1">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-emerald-700" /> 30-Day Guarantee
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Direct from Greenhouse
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
