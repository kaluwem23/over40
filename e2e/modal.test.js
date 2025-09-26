describe('Person Modal', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    // Wait for the app to load and people list to appear
    await waitFor(element(by.text('Loading people data...')))
      .not.toBeVisible()
      .withTimeout(5000);
  });

  describe('Modal Opening', () => {
    it('should open modal when tapping on a person', async () => {
      // Tap on the first person in the list
      await element(by.text('Alice Johnson')).tap();

      // Modal should appear with person details
      await expect(element(by.text('Alice Johnson'))).toBeVisible();
      await expect(element(by.text('Age: 52'))).toBeVisible();
      await expect(element(by.text('Gender: female'))).toBeVisible();
      await expect(element(by.text('Full Name: Alice Johnson'))).toBeVisible();
      await expect(element(by.text('ID: 4'))).toBeVisible();
    });

    it('should open modal with correct details for different people', async () => {
      // Tap on Baz Luhrmann
      await element(by.text('Baz Luhrmann')).tap();

      // Should show Baz's details
      await expect(element(by.text('Baz Luhrmann'))).toBeVisible();
      await expect(element(by.text('Age: 61'))).toBeVisible();
      await expect(element(by.text('Gender: male'))).toBeVisible();
      await expect(element(by.text('Full Name: Baz Luhrmann'))).toBeVisible();
      await expect(element(by.text('ID: 1'))).toBeVisible();
    });
  });

  describe('Modal Closing', () => {
    beforeEach(async () => {
      // Open modal first
      await element(by.text('Alice Johnson')).tap();
      await expect(element(by.text('Age: 52'))).toBeVisible();
    });

    it('should close modal when tapping close button', async () => {
      // Tap the close button (X)
      await element(by.id('modal-close-button')).tap();

      // Modal should disappear
      await expect(element(by.text('Age: 52'))).not.toBeVisible();

      // List should still be visible
      await expect(element(by.text('Alice Johnson'))).toBeVisible();
    });

    it('should close modal when tapping outside', async () => {
      // Tap outside the modal (on the overlay)
      await element(by.id('modal-overlay')).tap();

      // Modal should disappear
      await expect(element(by.text('Age: 52'))).not.toBeVisible();
    });

    it('should not close modal when tapping inside modal content', async () => {
      // Tap on the modal content (not the overlay)
      await element(by.id('modal-content')).tap();

      // Modal should still be visible
      await expect(element(by.text('Age: 52'))).toBeVisible();
    });
  });

  describe('Modal Content', () => {
    beforeEach(async () => {
      await element(by.text('Jane Smith')).tap();
    });

    it('should display all person information correctly', async () => {
      // Verify all fields are present and correct
      await expect(element(by.text('Jane Smith'))).toBeVisible();
      await expect(element(by.text('Age: 45'))).toBeVisible();
      await expect(element(by.text('Gender: female'))).toBeVisible();
      await expect(element(by.text('Full Name: Jane Smith'))).toBeVisible();
      await expect(element(by.text('ID: 2'))).toBeVisible();
    });

    it('should have proper modal styling', async () => {
      // Modal container should be visible
      await expect(element(by.id('modal-container'))).toBeVisible();

      // Close button should be visible
      await expect(element(by.id('modal-close-button'))).toBeVisible();

      // Content should be scrollable if needed
      await expect(element(by.id('modal-scroll-view'))).toBeVisible();
    });
  });

  describe('Multiple Modal Interactions', () => {
    it('should allow opening different modals sequentially', async () => {
      // Open first modal
      await element(by.text('Alice Johnson')).tap();
      await expect(element(by.text('Age: 52'))).toBeVisible();

      // Close first modal
      await element(by.id('modal-close-button')).tap();
      await expect(element(by.text('Age: 52'))).not.toBeVisible();

      // Open second modal with different person
      await element(by.text('Baz Luhrmann')).tap();
      await expect(element(by.text('Age: 61'))).toBeVisible();
      await expect(element(by.text('Age: 52'))).not.toBeVisible();
    });
  });
});
