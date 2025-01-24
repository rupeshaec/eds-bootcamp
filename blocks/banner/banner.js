const pictureElement = $0;
await setElementStyles(pictureElement, {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  display: 'block',
  top: '0',
  left: '0'
});
const updatedPictureStyles = window.getComputedStyle(pictureElement);
const data = {
  updatedPictureStyles: {
    width: updatedPictureStyles.width,
    height: updatedPictureStyles.height,
    position: updatedPictureStyles.position,
    display: updatedPictureStyles.display
  }
};