/**
 * Board Customizer Utilities
 * Handles design flow navigation and product data fetching
 */

(function() {
  'use strict';

  /**
   * Get URL search parameters
   * @param {string} param - Parameter name
   * @returns {string|null} - Parameter value or null
   */
  window.BoardCustomizer = {
    getUrlParam: function(param) {
      const params = new URLSearchParams(window.location.search);
      return params.get(param);
    },

    /**
     * Fetch product data by handle
     * @param {string} handle - Product handle
     * @returns {Promise} - Product data
     */
    fetchProduct: async function(handle) {
      try {
        const response = await fetch(`/products/${handle}.json`);
        if (!response.ok) throw new Error(`Product ${handle} not found`);
        const data = await response.json();
        return data.product;
      } catch (error) {
        console.error('Error fetching product:', error);
        return null;
      }
    },

    /**
     * Navigate to design page with board selection
     * @param {string} handle - Product handle
     */
    designBoard: function(handle) {
      window.location.href = `/pages/customize-board?board=${encodeURIComponent(handle)}`;
    },

    /**
     * Navigate back to design page
     */
    backToDesign: function() {
      window.location.href = '/pages/design-your-board';
    },

    /**
     * Validate email format
     * @param {string} email - Email address
     * @returns {boolean} - True if valid
     */
    validateEmail: function(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    /**
     * Validate phone format (basic)
     * @param {string} phone - Phone number
     * @returns {boolean} - True if valid
     */
    validatePhone: function(phone) {
      // Basic validation: at least 10 characters of digits
      const re = /[\d\s\-\+\(\)]{10,}/;
      return re.test(phone.replace(/\s/g, ''));
    }
  };

  // Log that BoardCustomizer is available
  console.log('BoardCustomizer utilities loaded');
})();
