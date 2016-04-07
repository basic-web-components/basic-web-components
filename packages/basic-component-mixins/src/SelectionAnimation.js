/* Exported function extends a base class with SelectionAnimation. */
export default (base) => {

  /**
   * Animates selection
   *
   * Expects: selectedItem, animation, animationDuration properties
   */
  class SelectionAnimation extends base {

    // get position() {
    //   return super.position;
    // }
    // set position(index) {
    //   if ('position' in base.prototype) { super.position = index; }
    // }

    get selectedItem() {
      return super.selectedItem;
    }
    set selectedItem(item) {
      if ('selectedItem' in base.prototype) { super.selectedItem = item; }
      let index = this.items.indexOf(item);
      animateSelection(this, this._previousSelectedIndex, index);
      this._previousSelectedIndex = index;
    }
  }

  return SelectionAnimation;
};


function animateSelection(element, fromIndex, toIndex) {
  console.log(`animating from ${fromIndex} to ${toIndex}`);
  let animateForward = fromIndex === null || toIndex > fromIndex;
  if (fromIndex >= 0) {
    element.animateItem(element.items[fromIndex], 0, animateForward ? 1 : -1);
  }
  element.animateItem(element.items[toIndex], animateForward ? -1 : 1, 0);
}


// complete = portion (between 0 and 1) of the way through animation.
// function animateItem(element, item, fraction) {
//   let player = getPlayerForItem(element, item);
//   if (player) {
//     let duration = element.animationDuration;
//     let time = fraction * duration;
//     player.currentTime = time;
//   }
// }
//
// function getPlayerForItem(element, item) {
//   let players = element.players;
//   if (!players) {
//     return;
//   }
//   let index = element.items.indexOf(item);
//   if (index < 0) {
//     return null;
//   }
//   let player = players[index];
//   if (!player) {
//     console.log(`Creating player ${index}`);
//     let animation = element.animation;
//     let animationOptions = {
//       duration: element.animationDuration,
//       easing: 'ease-in-out',
//       fill: 'both'
//     };
//     player = item.animate(animation, animationOptions);
//     player.pause();
//     players[index] = player;
//   }
//   return player;
// }
