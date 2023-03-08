const parentRows = document.querySelectorAll('.parent-row');
parentRows.forEach((parentRow) => {
  parentRow.addEventListener('click', () => {
    // Find the nested content row          
    const nestedContent = parentRow.nextElementSibling;
    // Toggle the display of the nested content row          
    if (nestedContent.classList.contains('hidden')) {
      nestedContent.classList.toggle('hidden', false);
      parentRow.classList.toggle('expanded', true);
    } else {
      nestedContent.classList.toggle('hidden', true);
      parentRow.classList.toggle('expanded', false);
    }
  });
});