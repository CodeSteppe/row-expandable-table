const parentRows = document.querySelectorAll('.parent-row');

parentRows.forEach((parentRow) => {
  parentRow.addEventListener('click', () => {
    parentRow.classList.toggle('expanded');
  });
});