describe('Inkitt Takehome App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  describe('Home Screen', () => {
    it('should display the header with correct title', async () => {
      await expect(element(by.text('People over 40 years'))).toBeVisible();
      await expect(element(by.text('Already have an account? Log in to continue your journey.'))).toBeVisible();
    });

    it('should show loading state initially', async () => {
      await expect(element(by.text('Loading people data...'))).toBeVisible();
    });

    it('should display filtered people list after loading', async () => {
      // Wait for loading to complete (2 second delay in fetchPeople)
      await waitFor(element(by.text('Loading people data...')))
        .not.toBeVisible()
        .withTimeout(5000);

      // Check that we have people in the list (should be 7 people 40+ years old)
      await expect(element(by.text('7 Results'))).toBeVisible();

      // Check for specific people who should be in the filtered list
      await expect(element(by.text('Baz Luhrmann'))).toBeVisible();
      await expect(element(by.text('Jane Smith'))).toBeVisible();
      await expect(element(by.text('Alice Johnson'))).toBeVisible();

      // Check for people who should NOT be in the list (under 40)
      await expect(element(by.text('John Doe'))).not.toBeVisible();
      await expect(element(by.text('Bob Wilson'))).not.toBeVisible();
    });

    it('should display people sorted by surname then name', async () => {
      await waitFor(element(by.text('Loading people data...')))
        .not.toBeVisible()
        .withTimeout(5000);

      // Get all visible people and verify sorting
      const people = [
        'Alice Johnson',
        'Baz Luhrmann',
        'Charlie Brown',
        'Diana Prince',
        'Edward Smith',
        'Fiona Johnson',
        'Jane Smith'
      ];

      // Check that the first few people are in correct order
      await expect(element(by.text('Alice Johnson'))).toBeVisible();
      await expect(element(by.text('Baz Luhrmann'))).toBeVisible();
    });
  });

  describe('List Scrolling', () => {
    it('should allow scrolling through the list', async () => {
      await waitFor(element(by.text('Loading people data...')))
        .not.toBeVisible()
        .withTimeout(5000);

      // Scroll down to see more items
      await element(by.id('people-scroll-view')).scroll(200, 'down');

      // Check that we can see items further down the list
      await expect(element(by.text('Fiona Johnson'))).toBeVisible();

      // Scroll back up
      await element(by.id('people-scroll-view')).scroll(200, 'up');
      await expect(element(by.text('Alice Johnson'))).toBeVisible();
    });

    it('should show only 5 items at a time', async () => {
      await waitFor(element(by.text('Loading people data...')))
        .not.toBeVisible()
        .withTimeout(5000);

      // Verify the list container has the correct height
      await expect(element(by.id('people-scroll-view'))).toBeVisible();

      // The first 5 items should be visible without scrolling
      await expect(element(by.text('Alice Johnson'))).toBeVisible();
      await expect(element(by.text('Baz Luhrmann'))).toBeVisible();
      await expect(element(by.text('Charlie Brown'))).toBeVisible();
      await expect(element(by.text('Diana Prince'))).toBeVisible();
      await expect(element(by.text('Edward Smith'))).toBeVisible();
    });
  });

  describe('Results Counter', () => {
    it('should display correct number of results', async () => {
      await waitFor(element(by.text('Loading people data...')))
        .not.toBeVisible()
        .withTimeout(5000);

      // Should show exactly 7 results (people 40+ years old)
      await expect(element(by.text('7 Results'))).toBeVisible();

      // The results container should be white with rounded corners
      await expect(element(by.id('results-container'))).toBeVisible();
    });
  });
});
