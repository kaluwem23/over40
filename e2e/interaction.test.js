describe('App Interactions', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await waitFor(element(by.text('Loading people data...')))
      .not.toBeVisible()
      .withTimeout(5000);
  });

  describe('Touch Interactions', () => {
    it('should provide visual feedback when tapping list items', async () => {
      // Tap on a list item and verify it responds
      await element(by.text('Alice Johnson')).tap();

      // Modal should open (indicating touch was registered)
      await expect(element(by.text('Age: 52'))).toBeVisible();

      // Close modal
      await element(by.id('modal-close-button')).tap();
    });

    it('should handle rapid taps correctly', async () => {
      // Rapidly tap different items
      await element(by.text('Alice Johnson')).tap();
      await expect(element(by.text('Age: 52'))).toBeVisible();

      await element(by.id('modal-close-button')).tap();
      await element(by.text('Baz Luhrmann')).tap();
      await expect(element(by.text('Age: 61'))).toBeVisible();
    });
  });

  describe('Scrolling Behavior', () => {
    it('should scroll smoothly through the list', async () => {
      // Test smooth scrolling
      await element(by.id('people-scroll-view')).scroll(100, 'down');
      await element(by.id('people-scroll-view')).scroll(100, 'up');
      await element(by.id('people-scroll-view')).scroll(200, 'down');

      // Verify we can still interact with items after scrolling
      await expect(element(by.text('Fiona Johnson'))).toBeVisible();
      await element(by.text('Fiona Johnson')).tap();
      await expect(element(by.text('Age: 48'))).toBeVisible();
    });

    it('should maintain scroll position when returning from modal', async () => {
      // Scroll down to see different items
      await element(by.id('people-scroll-view')).scroll(200, 'down');
      await expect(element(by.text('Fiona Johnson'))).toBeVisible();

      // Open modal
      await element(by.text('Fiona Johnson')).tap();
      await expect(element(by.text('Age: 48'))).toBeVisible();

      // Close modal
      await element(by.id('modal-close-button')).tap();

      // Should still see the same item (scroll position maintained)
      await expect(element(by.text('Fiona Johnson'))).toBeVisible();
    });
  });

  describe('Background and Layout', () => {
    it('should maintain background image throughout interactions', async () => {
      // Background should be visible
      await expect(element(by.id('app-background'))).toBeVisible();

      // Should remain visible when opening modal
      await element(by.text('Alice Johnson')).tap();
      await expect(element(by.text('Age: 52'))).toBeVisible();

      // Background should still be there (modal is semi-transparent)
      await expect(element(by.id('app-background'))).toBeVisible();
    });

    it('should maintain header visibility during interactions', async () => {
      // Header should always be visible
      await expect(element(by.text('People over 40 years'))).toBeVisible();

      // Should remain visible when scrolling
      await element(by.id('people-scroll-view')).scroll(200, 'down');
      await expect(element(by.text('People over 40 years'))).toBeVisible();

      // Should remain visible when modal is open
      await element(by.text('Alice Johnson')).tap();
      await expect(element(by.text('People over 40 years'))).toBeVisible();
    });
  });

  describe('Performance', () => {
    it('should handle multiple rapid interactions without issues', async () => {
      // Open and close modal multiple times quickly
      for (let i = 0; i < 3; i++) {
        await element(by.text('Alice Johnson')).tap();
        await expect(element(by.text('Age: 52'))).toBeVisible();
        await element(by.id('modal-close-button')).tap();
        await expect(element(by.text('Age: 52'))).not.toBeVisible();
      }

      // App should still be responsive
      await expect(element(by.text('7 Results'))).toBeVisible();
    });

    it('should maintain smooth scrolling performance', async () => {
      // Perform multiple scroll operations
      for (let i = 0; i < 5; i++) {
        await element(by.id('people-scroll-view')).scroll(50, 'down');
        await element(by.id('people-scroll-view')).scroll(50, 'up');
      }

      // Should still be able to interact with items
      await element(by.text('Alice Johnson')).tap();
      await expect(element(by.text('Age: 52'))).toBeVisible();
    });
  });
});
